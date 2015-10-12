import {Component, CustomElement} from "horcrux-core"

declare var System:any;

@Component
class HcImport extends CustomElement {
	
	static pending = {};
	static import(element: HcImport, src:string): void {
		System.import(src)
		.then(_=> {
			element.style.display = 'none';
		})
		.catch(err => {
			element.style.display = 'none';
			window.alert(err);
		})
	}
	
	attached() {
		let src = this.getAttribute("from") || this.innerHTML;
		HcImport.import(this, src);
	}
	
}

 export {HcImport}