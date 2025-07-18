#!/bin/zsh

echo "���️ 清除PATH中无效Node路径..."
# 创建干净PATH基础
new_path=(
  "/c/Program Files/nodejs"
  "/mingw64/bin"
  "/usr/bin"
  "/c/Windows/System32"
  "/c/Program Files/Git/usr/bin"
  "/c/Users/13770/AppData/Roaming/npm"
  "/c/Users/13770/bin"
)

# 清理重复和无效路径
cleaned_path=()
for p in "${new_path[@]}"; do
  if [[ -d "$p" ]]; then
    cleaned_path+=("$p")
  fi
done

# 查找真实Node安装位置
if [[ ! -f "/c/Program Files/nodejs/node.exe" ]]; then
  echo "��� 搜索Node安装位置..."
  possible_paths=(
    "/c/Program Files/nodejs"
    "/c/d/programmingSoftWare/feSoftWare/nvmTools/node"
    "/c/d/programmingSoftWare/feSoftWare/nodePackage/package/node_global"
    "/c/Users/13770/AppData/Local/nvs"
    "$HOME/.nvs"
  )
  
  for p in "${possible_paths[@]}"; do
    if [[ -f "$p/node.exe" ]]; then
      echo "✅ 发现Node在: $p"
      export PATH="$p:$PATH"
      break
    fi
  done
fi

# 设置永久PATH
export PATH=$(echo "${cleaned_path[@]}" | tr ' ' ':')
typeset -U PATH

echo 'export PATH="'$PATH'"' > ~/.zshrc.fixed
echo "✅ PATH优化完成! 新PATH已保存到 ~/.zshrc.fixed"

# 创建应急别名
echo "alias node='/c/Program\ Files/nodejs/node.exe'" >> ~/.zshrc
echo "alias npm='/c/Program\ Files/nodejs/npm.cmd'" >> ~/.zshrc
