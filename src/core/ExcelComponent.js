import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ''
		this.emitter = options.emitter
		this.unsuscribers = []

		this.prepare()
	}

	prepare() {}

	// Возвращяет шаблон компонента
	toHTML() {
		return ''
	}

	$emit(event, ...args) {
		this.emitter.emit(event, ...args)
	}

	$on(event, fn) {
		const unsub = this.emitter.subscribe(event, fn)
		this.unsuscribers.push(unsub)
	}

	init() {
		this.initDOMListeners()
	}

	destroy() {
		this.removeDOMListeners()
		this.unsuscribers.forEach(unsub => unsub())
	}
}
