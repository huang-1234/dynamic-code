import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import minimist from 'minimist';

const { name, version, tag } = minimist(process.argv.slice(2));
const targetPackage = `libs/${name.replace('@dc/', '')}`;

console.log(name, tag, targetPackage, version);

// 步骤1：验证包存在
if (!fs.existsSync(targetPackage)) {
  throw new Error(`🚨 Package ${name} not found!`);
}

let newVersion = version;

// 步骤2：更新版本
if (version) {
  console.log(`⚙️ Updating ${name} to v${version}`);
  const pkgPath = path.join(targetPackage, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  pkg.version = version;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
} else {
  // 获取当前版本
  const pkgPath = path.join(targetPackage, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  const currentVersion = pkg.version;
  let newVersion;

  if (tag) {
    // 预发布版本处理 (tag如 beta/alpha/rc)
    const tagPrefix = tag.toLowerCase();
    const versionParts = currentVersion.split('-');

    if (versionParts.length === 1) {
      // 正式版转预发布: 1.2.3 -> 1.2.4-beta.0
      const baseVersion = versionParts[0].split('.');
      baseVersion[2] = String(Number(baseVersion[2]) + 1);
      newVersion = `${baseVersion.join('.')}-${tagPrefix}.0`;
    } else {
      // 已有预发布版本: 1.2.3-beta.0 -> 1.2.3-beta.1
      const preParts = versionParts[1].split('.');
      preParts[1] = String(Number(preParts[1]) + 1);
      newVersion = `${versionParts[0]}-${preParts.join('.')}`;
    }
  } else {
    // 正式版本升级规则
    const versionParts = currentVersion.split('.').map(Number);
    if (currentVersion.includes('-')) {
      // 预发布转正式版: 1.2.3-beta.0 -> 1.2.3
      newVersion = currentVersion.split('-')[0];
    } else {
      // 标准版本升级: 1.2.3 -> 1.2.4
      versionParts[2] += 1;
      newVersion = versionParts.join('.');
    }
  }

  console.log(`🔄 Version updated: ${currentVersion} → ${newVersion}`);
  pkg.version = newVersion;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}

// 步骤3：构建
console.log('🏗️ Building package...');
execSync(`pnpm --filter ${name} run build`, { stdio: 'inherit' });

// 步骤4：发布
console.log('🚀 Publishing to npm...');
execSync(`pnpm publish -r --filter ${name} --no-git-checks --access public --tag ${tag}`, {
  stdio: 'inherit'
});

// 步骤5：打标签
if (tag) {
  execSync(`git tag ${name}@${newVersion}`, { stdio: 'inherit' });
}

console.log(`✅ Successfully published ${name}@${newVersion}`);