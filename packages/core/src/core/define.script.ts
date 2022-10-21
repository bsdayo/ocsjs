/**
 * url glob pattern
 *  @see https://en.wikipedia.org/wiki/Glob_(programming)
 */
export type GlobPattern = string;

/** 脚本路由 */
export interface ScriptRoute {
	/** 名字 */
	name: string;
	/** 页面路径匹配 */
	url: string | RegExp | GlobPattern | string[] | RegExp[] | GlobPattern[];
	/** 等待页面加载完毕调用 */
	onload?: (...args: any[]) => any;
	/** 加载时 立即执行 */
	onstart?: (...args: any[]) => any;
	/** 优先级, 默认0 */
	priority?: number;
}

/** 脚本面板 */
export interface ScriptPanel {
	/** 名字 */
	name: string;
	/** 页面路径匹配 */
	url: string | RegExp | GlobPattern | string[] | RegExp[] | GlobPattern[];
	/** 返回一个 html 元素
	 *
	 * 支持 3 种 el 元素 :
	 * - {@link VNode}
	 * - {@link DefineComponent}
	 * - string template
	 */
	el: () => any;
	/** 其余的子面板  */
	children?: Omit<ScriptPanel, 'url' | 'children'>[];
	/** 优先级, 默认0 */
	priority?: number;
	/** 当页面没有任何面板时，显示的默认面板 */
	default?: boolean;
	/** 是否隐藏 */
	hide?: () => boolean;
}

export type ScriptPanelChild = Omit<ScriptPanel, 'url' | 'children'>;

export interface DefineScript {
	name: string;
	// 主域名
	domain?: string | string[];
	// 用于一些统计列表中的显示及隐藏，不影响任何使用
	hide?: boolean;
	routes?: ScriptRoute[];
	panels?: ScriptPanel[];
}

export const scripts: DefineScript[] = [];

export function defineScript(options: DefineScript) {
	scripts.push(options);
	return options;
}
