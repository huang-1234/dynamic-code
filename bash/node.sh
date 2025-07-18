# 1. 安装 NVM-Windows（若未安装）
winget install -e --id CoreyButler.NVMforWindows

# 2. 列出可用版本
nvm list available
# 查看18.x的精确版本号（例如：18.20.2）

# 3. 安装指定版本
nvm install 18.20.2

# 4. 设置为默认版本
nvm use 18.20.2
nvm alias default 18.20.2

# 5. 验证安装
node -v # 应输出 v18.20.2
npm -v  # 应输出 9.x+