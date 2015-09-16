var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", "horcrux-core"], function (require, exports, horcrux_core_1) {
    var Repeat = (function (_super) {
        __extends(Repeat, _super);
        function Repeat(node, attr, model, path) {
            _super.call(this, node, attr, model, path);
            this.ID = Repeat.ID++;
            this.createComment();
            this.removeOriginalNode();
            this.newJSValue(model.get(path).value);
        }
        Repeat.prototype.createComment = function () {
            this.commentNode = document.createComment('ID' + this.ID);
            this.node.parentNode.insertBefore(this.commentNode, this.node);
        };
        Repeat.prototype.removeOriginalNode = function () {
            this.node.parentNode.removeChild(this.node);
        };
        Repeat.prototype.removeOldNodes = function () {
            var selector = '*[data-repeatid="' + this.ID + '"]';
            Array.prototype.forEach.call(document.querySelectorAll(selector), function (node) {
                node.parentNode.removeChild(node);
            });
        };
        Repeat.prototype.insertNode = function (node) {
            this.commentNode.parentNode.insertBefore(node, this.commentNode.nextSibling);
        };
        Repeat.prototype.newJSValue = function (value) {
            var _this = this;
            var nodes = [];
            for (var key in value) {
                var model = { it: value[key] };
                var row = this.node.cloneNode(true);
                delete row['repeat'];
                row.removeAttribute('repeat');
                row.dataset['repeatid'] = this.ID;
                horcrux_core_1.bindDom(row, [model]);
                nodes.push(row);
            }
            this.removeOldNodes();
            nodes.reverse().forEach(function (n) {
                _this.insertNode(n);
            });
        };
        Repeat.ID = 0;
        Repeat = __decorate([
            horcrux_core_1.Attribute
        ], Repeat);
        return Repeat;
    })(horcrux_core_1.CustomAttribute);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Repeat;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvcmVwZWF0LnRzIl0sIm5hbWVzIjpbIlJlcGVhdCIsIlJlcGVhdC5jb25zdHJ1Y3RvciIsIlJlcGVhdC5jcmVhdGVDb21tZW50IiwiUmVwZWF0LnJlbW92ZU9yaWdpbmFsTm9kZSIsIlJlcGVhdC5yZW1vdmVPbGROb2RlcyIsIlJlcGVhdC5pbnNlcnROb2RlIiwiUmVwZWF0Lm5ld0pTVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBRUE7UUFDb0NBLDBCQUFlQTtRQU9sREEsZ0JBQVlBLElBQVNBLEVBQUVBLElBQVNBLEVBQUVBLEtBQVdBLEVBQUVBLElBQVdBO1lBQ3pEQyxrQkFBTUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFFL0JBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBRXRCQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFBQTtZQUNwQkEsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxDQUFDQTtZQUUxQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLENBQUNBO1FBRVNELDhCQUFhQSxHQUF2QkE7WUFDQ0UsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsR0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDeERBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ2hFQSxDQUFDQTtRQUVTRixtQ0FBa0JBLEdBQTVCQTtZQUNDRyxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUM3Q0EsQ0FBQ0E7UUFFU0gsK0JBQWNBLEdBQXhCQTtZQUNDSSxJQUFJQSxRQUFRQSxHQUFHQSxtQkFBbUJBLEdBQUNBLElBQUlBLENBQUNBLEVBQUVBLEdBQUNBLElBQUlBLENBQUNBO1lBQ2hEQSxLQUFLQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFFBQVFBLENBQUNBLEVBQUVBLFVBQUNBLElBQVNBO2dCQUMzRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDbkNBLENBQUNBLENBQUNBLENBQUNBO1FBQ0pBLENBQUNBO1FBRVNKLDJCQUFVQSxHQUFwQkEsVUFBcUJBLElBQVNBO1lBQzdCSyxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxVQUFVQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtRQUM5RUEsQ0FBQ0E7UUFFREwsMkJBQVVBLEdBQVZBLFVBQVdBLEtBQUtBO1lBQWhCTSxpQkFzQkNBO1lBckJBQSxJQUFJQSxLQUFLQSxHQUFlQSxFQUFFQSxDQUFDQTtZQUUzQkEsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RCQSxJQUFJQSxLQUFLQSxHQUFHQSxFQUFDQSxFQUFFQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFDQSxDQUFDQTtnQkFFN0JBLElBQUlBLEdBQUdBLEdBQU9BLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUFBO2dCQUN2Q0EsT0FBT0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JCQSxHQUFHQSxDQUFDQSxlQUFlQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFDOUJBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO2dCQUVsQ0Esc0JBQU9BLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUV0QkEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLENBQUNBO1lBRURBLElBQUlBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1lBRXRCQSxLQUFLQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxDQUFDQTtnQkFDeEJBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVKQSxDQUFDQTtRQTFETU4sU0FBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFIZkE7WUFBQ0Esd0JBQVNBO21CQThEVEE7UUFBREEsYUFBQ0E7SUFBREEsQ0E5REEsQUE4RENBLEVBN0RtQyw4QkFBZSxFQTZEbEQ7SUE5REQ7NEJBOERDLENBQUEiLCJmaWxlIjoiYXR0cmlidXRlcy9yZXBlYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F0dHJpYnV0ZSwgQ3VzdG9tQXR0cmlidXRlLCBNb2RlbCwgYmluZERvbX0gZnJvbSBcImhvcmNydXgtY29yZVwiXHJcblxyXG5AQXR0cmlidXRlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGVhdCBleHRlbmRzIEN1c3RvbUF0dHJpYnV0ZSB7XHJcblx0XHJcblx0c3RhdGljIElEID0gMDtcclxuXHRcclxuXHRwcml2YXRlIElEOm51bWJlcjtcclxuXHRwcml2YXRlIGNvbW1lbnROb2RlOiBDb21tZW50O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKG5vZGU6Tm9kZSwgYXR0cjpBdHRyLCBtb2RlbDpNb2RlbCwgcGF0aDpzdHJpbmcpIHtcclxuXHRcdHN1cGVyKG5vZGUsIGF0dHIsIG1vZGVsLCBwYXRoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5JRCA9IFJlcGVhdC5JRCsrO1xyXG5cdFx0XHJcblx0XHR0aGlzLmNyZWF0ZUNvbW1lbnQoKVxyXG5cdFx0dGhpcy5yZW1vdmVPcmlnaW5hbE5vZGUoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5uZXdKU1ZhbHVlKG1vZGVsLmdldChwYXRoKS52YWx1ZSk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCBjcmVhdGVDb21tZW50KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb21tZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ0lEJyt0aGlzLklEKTtcclxuXHRcdHRoaXMubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNvbW1lbnROb2RlLCB0aGlzLm5vZGUpO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgcmVtb3ZlT3JpZ2luYWxOb2RlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIHJlbW92ZU9sZE5vZGVzKCk6IHZvaWQge1xyXG5cdFx0bGV0IHNlbGVjdG9yID0gJypbZGF0YS1yZXBlYXRpZD1cIicrdGhpcy5JRCsnXCJdJztcclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksIChub2RlOk5vZGUpID0+IHtcclxuXHRcdFx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCBpbnNlcnROb2RlKG5vZGU6Tm9kZSk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb21tZW50Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCB0aGlzLmNvbW1lbnROb2RlLm5leHRTaWJsaW5nKTtcclxuXHR9XHJcblx0XHJcblx0bmV3SlNWYWx1ZSh2YWx1ZSk6dm9pZCB7XHJcblx0XHRsZXQgbm9kZXM6QXJyYXk8Tm9kZT4gPSBbXTtcclxuXHRcdFxyXG5cdFx0Zm9yKHZhciBrZXkgaW4gdmFsdWUpIHtcclxuXHRcdFx0bGV0IG1vZGVsID0ge2l0OiB2YWx1ZVtrZXldfTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCByb3c6YW55ID0gdGhpcy5ub2RlLmNsb25lTm9kZSh0cnVlKVx0XHJcblx0XHRcdGRlbGV0ZSByb3dbJ3JlcGVhdCddO1xyXG5cdFx0XHRyb3cucmVtb3ZlQXR0cmlidXRlKCdyZXBlYXQnKTtcclxuXHRcdFx0cm93LmRhdGFzZXRbJ3JlcGVhdGlkJ10gPSB0aGlzLklEO1xyXG5cdFx0XHRcclxuXHRcdFx0YmluZERvbShyb3csIFttb2RlbF0pO1xyXG5cdFx0XHRcclxuXHRcdFx0bm9kZXMucHVzaChyb3cpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR0aGlzLnJlbW92ZU9sZE5vZGVzKCk7XHJcblx0XHRcclxuXHRcdG5vZGVzLnJldmVyc2UoKS5mb3JFYWNoKG4gPT4ge1xyXG5cdFx0XHR0aGlzLmluc2VydE5vZGUobik7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH1cclxufSAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=