import {Attribute, CustomAttribute, Model, bindDom} from "horcrux-core"

@Attribute
export default class Repeat extends CustomAttribute {
	
	static ID = 0;
	
	private ID:number;
	private commentNode: Comment;
	
	constructor(node:Node, attr:Attr, model:Model, path:string) {
		super(node, attr, model, path);
		
		this.ID = Repeat.ID++;
		
		this.createComment()
		this.removeOriginalNode();
		
		this.node = this.node.cloneNode(true);
	}
	
	protected createComment(): void {
		this.commentNode = document.createComment('ID'+this.ID);
		this.node.parentNode.insertBefore(this.commentNode, this.node);
	}
	
	protected removeOriginalNode(): void {
		this.node.parentNode.removeChild(this.node);
	}
	
	protected removeOldNodes(): void {
		let selector = '*[data-repeatid="'+this.ID+'"]';
		Array.prototype.forEach.call(document.querySelectorAll(selector), (node:Node) => {
			node.parentNode.removeChild(node);
		});
	}
	
	protected insertNode(node:Node): void {
		this.commentNode.parentNode.insertBefore(node, this.commentNode.nextSibling);
	}
	
	newJSValue(value):void {
		let nodes:Array<Node> = [];
		
		for(var key in value) {
			let model = {it: value[key]};
			
			let row:any = this.node.cloneNode(true)	
			delete row['repeat'];
			row.removeAttribute('repeat');
			row.dataset['repeatid'] = this.ID;
			
			bindDom(row, [model]);
			
			nodes.push(row);
		}
		
		this.removeOldNodes();
		
		nodes.reverse().forEach(n => {
			this.insertNode(n);
		});
		
	}
} 