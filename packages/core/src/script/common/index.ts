import { createNote } from '../../components';
import { defineScript } from '../../core/define.script';
import { getRemoteSetting, onComplete, onInteractive, useUnsafeWindow } from '../../core/utils';
import { logger } from '../../logger';
import { definedScripts } from '../../main';
import { useSettings } from '../../store';

const supports = ['*'];

export const CommonScript = defineScript({
	name: '默认脚本',
	hide: true,
	routes: [
		{
			name: '禁止弹窗脚本',
			url: supports,
			onstart() {
				try {
					// @ts-ignore
					if (typeof useUnsafeWindow() !== 'undefined') {
						// @ts-ignore
						// eslint-disable-next-line no-undef
						useUnsafeWindow().alert = console.log;
					}
					window.alert = self.alert = console.log;
				} catch (e) {
					// @ts-ignore
					console.error('禁止弹窗脚本错误', e.message);
				}
			}
		},
		{
			name: '开启页面复制粘贴功能',
			url: supports,
			onstart() {
				function enableCopy() {
					try {
						const d = document;
						const b = document.body;
						d.onselectstart = d.oncopy = d.onpaste = d.onkeydown = d.oncontextmenu = () => true;
						b.onselectstart = b.oncopy = b.onpaste = b.onkeydown = b.oncontextmenu = () => true;
					} catch (err) {
						console.error('页面复制粘贴功能开启失败', err);
					}

					const style = document.createElement('style');
					style.innerHTML = `
                        html * {
                          -webkit-user-select: text !important;
                          -khtml-user-select: text !important;
                          -moz-user-select: text !important;
                          -ms-user-select: text !important;
                          user-select: text !important;
                        }`;

					document.body.appendChild(style);
				}
				onInteractive(() => enableCopy());
				onComplete(() => {
					enableCopy();
					setTimeout(() => enableCopy(), 3000);
				});
			}
		},
		{
			name: '获取软件题库配置脚本',
			url: supports,
			async onload() {
				if (top === self) {
					const settings = useSettings();
					if (settings.common.answererWrappers.length === 0) {
						const setting = await getRemoteSetting(15319);
						if (setting?.answererWrappers) {
							logger('debug', '成功读取本地题库配置');
							const settings = useSettings();
							settings.common.answererWrappers = setting.answererWrappers;
						}
					}
				}
			}
		}
	],
	panels: [
		{
			name: 'OCS助手',
			priority: 100,
			default: true,
			url: supports,
			el: () =>
				createNote(
					'⭐ 脚本列表：' + definedScripts.map((s) => s.name).join(', '),
					'📢 手动点击进入视频，作业，考试页面，即可自动运行',
					'📢 如果进入后未显示任何设置或者未运行，则您当前的页面或者网课没有脚本哦。',
					'⚠️ 请将浏览器页面保持最大化，或者缩小窗口，不能最小化，可能导致视频，ppt等任务不能运行！',
					'💡 拖动上方标题栏可以进行拖拽哦!'
				)
		}
	]
});
