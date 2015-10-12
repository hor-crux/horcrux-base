import {Component, CustomElement} from "horcrux-core"

declare var System:any;

@Component
class HcImport extends CustomElement {
	
	created() {
		let src = this.getAttribute("from") || this.innerHTML;
		System.import(src);
	}
	
	attached() {
		this.remove();
	}
}

 export {HcImport}