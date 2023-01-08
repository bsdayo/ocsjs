import { $ } from '../utils/common';
import { $creator } from '../utils/creator';
import { el } from '../utils/dom';
import { HeaderElement } from './header';
import { IElement } from './interface';

export class ContainerElement extends IElement {
	header: HeaderElement = $creator.tooltip(el('header-element', { className: 'header', title: '菜单栏-可拖动区域' }));
	body: HTMLDivElement = el('div', { className: 'body', clientHeight: window.innerHeight / 2 });
	footer: HTMLDivElement = el('div', { className: 'footer' });

	connectedCallback() {
		this.append(this.header, this.body, this.footer);

		$.onresize(this, (cont) => {
			cont.body.style.maxHeight = window.innerHeight - this.header.clientHeight - 100 + 'px';
			cont.body.style.maxWidth = window.innerWidth - 50 + 'px';
		});
	}
}
