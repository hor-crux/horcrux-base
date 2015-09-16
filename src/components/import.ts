import {Component, CustomElement, created} from "horcrux-core"

declare var System:any;

@Component({
	namespace: "ho",
	template: false
})
export default class Import extends CustomElement {
	
	@created created() {
		let src = this.getAttribute("from") || this.innerHTML;
		System.import(src);
	}
	
	attachedCallback() {
		this.remove();
	}
}