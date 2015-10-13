import {Component, CustomElement} from "horcrux-core"

declare var System:any;

@Component
class HcImport extends CustomElement {
	
	static pending = {};
	static import(element: HcImport, src:string): Promise<any> {
		return System.import(src)
		.then(_=> {
			element.style.display = 'none';
		})
		.catch(err => {
			element.style.display = 'none';
			window.alert(err);
		})
	}
	
	created() {
		let src = this.getAttribute("from") || this.innerHTML;
		let promise = HcImport.import(this, src);
		
		if(this.hasAttribute("wait")) {
			this.parentComponent.beforeBinding.push(promise);
		}
	}
	
}

 export {HcImport}