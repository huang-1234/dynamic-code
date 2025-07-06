import type { CSSProperties } from 'react';

/**
 * 卡片协议
 */
export interface ComponentStructure {
  /**
   * 组件id
   */
  id: string;
  /**
   * 组件命名空间
   */
  namespace: string;
  /**
   * 版本号
   */
  version: string;
  /**
   * 容器样式
   */
  style: CSSProperties;
  /**
   * 组件属性
   */
  props: Record<string, any>;
  /**
   * 组件属性字段(用于获取后端数据映射)
   * 数据源拼接规则 组件id_属性名
   * 后端VO拼接规则 后端字段名称_属性名
   */
  fieldKeys: string[];
  /**
   * 渲染器消费属性
   */
  renderer: Record<string, RendererData>;
  /**
   * 子节点
   */
  children: ComponentStructure[];
}

/**
 * 渲染器元数据
 */
export interface RendererData {
  /**
   * 环境变量值
   */
  envValue: string;
  /**
   * 环境变量列表
   */
  envList: string[];
  /**
   * 环境变量别名映射
   */
  envAlias: Record<string, string>;
  /**
   * 取值路径
   */
  valuePath: string;
}

/**
 * 主题映射
 */
export interface ThemeMap {
  /**
   * 商家视角
   */
  seller?: {
    light: Record<string, string>;
    dark?: Record<string, string>;
  };
  /**
   * 消费者视角
   */
  customer?: {
    light: Record<string, string>;
    dark?: Record<string, string>;
  };
}

/**
 * 主题色身份
 */
export type ThemeRole = 'seller' | 'customer';

/**
 * 主题配置
 */
export interface ThemeConfig {
  /**
   * 是否暗黑模式
   */
  isDark: boolean;
  /**
   * 身份信息
   */
  role: ThemeRole;
}

/**
 * 组件上下文
 */
export interface ComponentContext {
  /**
   * 主题色配置
   */
  theme: ThemeConfig;
  /**
   * 局部更新组件数据
   * @param data
   */
  updateComponentData: (data: Record<string, any>) => void;
  /**
   * doAction回调
   */
  doAction?: (...args: any) => Promise<void>;
  /**
   * 自定义注入组件属性
   */
  custom: Record<string, any>;
  /**
   * 判断是否在设计器内部
   */
  isInDesigner?: boolean;
}
