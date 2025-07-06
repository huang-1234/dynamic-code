export interface MenuNode {
  id: number;
  name: string;
  pid: number;
  order: number;
}
export const menus: MenuNode[] = [
  // 原始数据（ID 1-20，保留特殊边界）
  { id: 1, name: "系统管理", pid: 0, order: 1 },
  { id: 2, name: "用户管理", pid: 1, order: 1 },
  { id: 3, name: "角色管理", pid: 1, order: 2 },
  { id: 4, name: "权限配置", pid: 3, order: 1 },
  { id: 5, name: "日志审计", pid: 1, order: 3 },
  { id: 6, name: "操作日志", pid: 5, order: 1 },
  { id: 7, name: "安全日志", pid: 5, order: 2 },
  { id: 8, name: "商品中心", pid: 0, order: 2 },
  { id: 9, name: "商品列表", pid: 8, order: 1 },
  { id: 10, name: "商品分类", pid: 8, order: 2 },
  { id: 11, name: "电子产品", pid: 10, order: 1 },
  { id: 12, name: "服装", pid: 10, order: 2 },
  { id: 13, name: "订单管理", pid: 0, order: 3 },
  { id: 14, name: "订单列表", pid: 13, order: 1 },
  { id: 15, name: "退货管理", pid: 13, order: 2 },
  { id: 16, name: "孤儿节点", pid: 999, order: 1 },
  { id: 17, name: "空children节点", pid: 12, order: 1 },
  { id: 18, name: "深层节点1", pid: 11, order: 1 },
  { id: 19, name: "深层节点2", pid: 18, order: 1 },
  { id: 20, name: "无序节点", pid: 1, order: 0 },

  // 新增数据（ID 21-300，扩展层级与场景）
  // 1. 根节点扩展
  { id: 21, name: "会员管理", pid: 0, order: 4 },
  { id: 22, name: "营销中心", pid: 0, order: 5 },
  { id: 23, name: "客服管理", pid: 0, order: 6 },

  // 2. 系统管理分支深化
  { id: 24, name: "部门管理", pid: 1, order: 4 },
  { id: 25, name: "权限组", pid: 3, order: 2 },
  { id: 26, name: "审计报表", pid: 5, order: 3 },
  { id: 27, name: "登录日志", pid: 6, order: 2 },
  { id: 28, name: "数据备份", pid: 1, order: 5 },

  // 3. 商品中心分支扩展
  { id: 29, name: "库存管理", pid: 8, order: 3 },
  { id: 30, name: "日用百货", pid: 10, order: 3 },
  { id: 31, name: "手机", pid: 11, order: 1 },
  { id: 32, name: "笔记本电脑", pid: 11, order: 2 },
  { id: 33, name: "女装", pid: 12, order: 1 },
  { id: 34, name: "男装", pid: 12, order: 2 },
  { id: 35, name: "零食", pid: 30, order: 1 },
  { id: 36, name: "库存预警", pid: 29, order: 1 },

  // 4. 订单管理分支细化
  { id: 37, name: "支付管理", pid: 13, order: 3 },
  { id: 38, name: "售后申请", pid: 15, order: 1 },
  { id: 39, name: "物流跟踪", pid: 14, order: 2 },

  // 5. 会员管理分支
  { id: 40, name: "会员等级", pid: 21, order: 1 },
  { id: 41, name: "积分规则", pid: 40, order: 1 },
  { id: 42, name: "优惠券", pid: 21, order: 2 },

  // 6. 深层嵌套测试（5级）
  { id: 43, name: "三级节点", pid: 19, order: 1 },
  { id: 44, name: "四级节点", pid: 43, order: 1 },
  { id: 45, name: "五级节点", pid: 44, order: 1 },

  // 7. 特殊场景补充
  { id: 46, name: "循环引用风险", pid: 45, order: 1 }, // 指向深层节点
  { id: 47, name: "重复PID节点", pid: 1, order: 6 }, // 测试同父节点排序
  { id: 48, name: "负序节点", pid: 1, order: -1 }, // 测试负值排序

  // 8. 其他节点（按层级填充至ID 300）...
  // 示例：商品分类的更多子类
  { id: 49, name: "家电", pid: 10, order: 4 },
  { id: 50, name: "厨具", pid: 49, order: 1 },
  { id: 51, name: "电视", pid: 49, order: 2 },
  // 继续生成直至 ID 300...
];

export const keyValueMap = {
  key: {
    form: "id",
    to: "key",
  },
  value: {
    from: "name",
    to: "title",
  },
};

function kvMapNode(node: any, kvMap = keyValueMap) {
  const k = kvMap.key.to;
  return {
    [kvMap.key.to]: node?.[kvMap.key.form],
    [kvMap.value.to]: node?.[kvMap.value.from],
    ...node,
  };
}

export interface TreeNode {
  id?: number;
  key: React.Key;
  name?: string;
  title?: string;
}

export function buildTreeMenus<T extends TreeNode = TreeNode>(
  menus: MenuNode[],
  kvMap = keyValueMap
) {
  const map = new Map(); // 哈希表存储节点
  const tree: T[] = [];

  // 初始化节点并存入Map
  menus.forEach((menu) => {
    map.set(menu.id, { ...menu, children: [] });
  });
  // 构建树形结构
  menus.forEach((menu) => {
    const node = map.get(menu.id);
    if (menu.pid === null || menu.pid === 0) {
      tree.push(kvMapNode(node, kvMap)); // 根节点
    } else {
      const parent = map.get(menu.pid);
      if (parent) {
        parent.children.push(kvMapNode(node, kvMap)); // 挂载到父节点
      }
    }
  });
  return tree as T[];
}
