/// <reference path="../../typings/observe-js/observe-js.d.ts" />


import {Attribute, CustomAttribute, Model, bindDom, ComponentCanBindEvent} from "horcrux-core"
import {ArrayObserver, ObjectObserver} from "observejs"

@Attribute
class Repeat extends CustomAttribute {
	
	static ID = 0;
	
	private ID:number;
	private commentNode: Comment;
	private observer: observejs.ArrayObserver_instance | observejs.ObjectObserver_instance;
	
	protected init(): void {
		this.ID = Repeat.ID++;
		
		this.createComment()
		this.removeOriginalNode();
		
		/*
		(<Element>this.node).setAttribute("dontVisit", "");
		this.node = this.node.cloneNode(true);
		*/
		(<any>this.node).setAttribute("lazy", "");
		
		
		this.binding.onNewValue(this.onNewValue.bind(this));
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
		let root:any = this.commentNode.parentElement || this.commentNode.parentNode;
		Array.prototype.forEach.call(root.querySelectorAll(selector), (node:Node) => {
			node.parentNode.removeChild(node);
		});
	}
	
	protected insertNode(node:Node): void {
		this.commentNode.parentNode.insertBefore(node, this.commentNode.nextSibling);
	}
	
	protected clearObserver() {
		this.observer ? this.observer.close() : undefined;
	}
	
	protected onNewValue(value):void {
		this.renderList(value);
		
		this.clearObserver();
		
		if(value instanceof Array) {
			let observer = new ArrayObserver(value);
			observer.open(()=>{
				this.renderList(value);
			});
			
			this.observer = observer;
		}
		else if(value instanceof Object) {
			let observer = new ObjectObserver(value);
			observer.open(()=>{
				this.renderList(value);
			});
			
			this.observer = observer;
		}
	}
	
	protected renderList(value:any): void {
		let nodes:Array<Node> = [];
		
		for(var key in value) {
			let model = {it: value[key]};
			
			let row:any = this.node.cloneNode(true)	
			delete row['repeat'];
			row.removeAttribute('repeat');
			row.dataset['repeatid'] = this.ID;
			
			bindDom(row, [model].concat(this.model.objects));
			row.removeAttribute("lazy");
			
			if(!!row.eventBus) {
				row.eventBus.dispatch(new ComponentCanBindEvent([model].concat(this.model.objects)))	
			}
			else {
				[].filter.call(row.querySelectorAll("*"), e=> {
					return e.nodeName.indexOf("-") > -1
				}).forEach(e => {
					e.eventBus.dispatch(new ComponentCanBindEvent([model].concat(this.model.objects)))
				})
			}
			
			nodes.push(row);
		}
		
		this.removeOldNodes();
		
		nodes.reverse().forEach(n => {
			this.insertNode(n);
		});
	}
	
} 

export {Repeat}