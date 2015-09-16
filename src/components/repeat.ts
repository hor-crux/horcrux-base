import {Component, bind} from "horcrux-core"

@Component({
	namespace: "ho",
	template: false
})
class Repeat extends CustomElement {
	
	dontVisit = true;
	
	attachedCallback() {
		let path = this.getAttribute("data").replace(/\{/gm, "").replace(/\}/gm, "");
		let host = this.getHost();
		let data:any[] = host[path];
		
		let contents = this.childNodes;
		let shadow = this.createShadowRoot();
		
		data.forEach(row => {
			Array.prototype.forEach.call(contents, (node:Node) => {
				let model = {
					item: row
				}
				let cloned = node.cloneNode(true);
				visit(cloned, node => {bindNode(node, model);});
				shadow.appendChild(cloned)
			});
		})
		
	}
	
	protected getHost(): Node {
		let parent = this.parentNode;
		while(!(<any>parent).host)
			parent = parent.parentNode;
		return (<any>parent).host;
	}
	
}