import {Component, CustomElement, created} from "horcrux-core"

declare var System:any;

@Component
export default class HcImport extends CustomElement {
	
	@created created() {
		let src = this.getAttribute("from") || this.innerHTML;
		System.import(src);
	}
	
	attachedCallback() {
		this.remove();
	}
}