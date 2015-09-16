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
            this.node = this.node.cloneNode(true);
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
            var root = this.commentNode.parentElement || this.commentNode.parentNode;
            Array.prototype.forEach.call(root.querySelectorAll(selector), function (node) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvcmVwZWF0LnRzIl0sIm5hbWVzIjpbIlJlcGVhdCIsIlJlcGVhdC5jb25zdHJ1Y3RvciIsIlJlcGVhdC5jcmVhdGVDb21tZW50IiwiUmVwZWF0LnJlbW92ZU9yaWdpbmFsTm9kZSIsIlJlcGVhdC5yZW1vdmVPbGROb2RlcyIsIlJlcGVhdC5pbnNlcnROb2RlIiwiUmVwZWF0Lm5ld0pTVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBRUE7UUFDb0NBLDBCQUFlQTtRQU9sREEsZ0JBQVlBLElBQVNBLEVBQUVBLElBQVNBLEVBQUVBLEtBQVdBLEVBQUVBLElBQVdBO1lBQ3pEQyxrQkFBTUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFFL0JBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBRXRCQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFBQTtZQUNwQkEsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxDQUFDQTtZQUUxQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDdkNBLENBQUNBO1FBRVNELDhCQUFhQSxHQUF2QkE7WUFDQ0UsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsR0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDeERBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ2hFQSxDQUFDQTtRQUVTRixtQ0FBa0JBLEdBQTVCQTtZQUNDRyxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUM3Q0EsQ0FBQ0E7UUFFU0gsK0JBQWNBLEdBQXhCQTtZQUNDSSxJQUFJQSxRQUFRQSxHQUFHQSxtQkFBbUJBLEdBQUNBLElBQUlBLENBQUNBLEVBQUVBLEdBQUNBLElBQUlBLENBQUNBO1lBQ2hEQSxJQUFJQSxJQUFJQSxHQUFPQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxhQUFhQSxJQUFJQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxVQUFVQSxDQUFDQTtZQUM3RUEsS0FBS0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxRQUFRQSxDQUFDQSxFQUFFQSxVQUFDQSxJQUFTQTtnQkFDdkVBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ25DQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNKQSxDQUFDQTtRQUVTSiwyQkFBVUEsR0FBcEJBLFVBQXFCQSxJQUFTQTtZQUM3QkssSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7UUFDOUVBLENBQUNBO1FBRURMLDJCQUFVQSxHQUFWQSxVQUFXQSxLQUFLQTtZQUFoQk0saUJBc0JDQTtZQXJCQUEsSUFBSUEsS0FBS0EsR0FBZUEsRUFBRUEsQ0FBQ0E7WUFFM0JBLEdBQUdBLENBQUFBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUN0QkEsSUFBSUEsS0FBS0EsR0FBR0EsRUFBQ0EsRUFBRUEsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBQ0EsQ0FBQ0E7Z0JBRTdCQSxJQUFJQSxHQUFHQSxHQUFPQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFBQTtnQkFDdkNBLE9BQU9BLEdBQUdBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO2dCQUNyQkEsR0FBR0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzlCQSxHQUFHQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQTtnQkFFbENBLHNCQUFPQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFFdEJBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2pCQSxDQUFDQTtZQUVEQSxJQUFJQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtZQUV0QkEsS0FBS0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsQ0FBQ0E7Z0JBQ3hCQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNwQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFSkEsQ0FBQ0E7UUEzRE1OLFNBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBSGZBO1lBQUNBLHdCQUFTQTttQkErRFRBO1FBQURBLGFBQUNBO0lBQURBLENBL0RBLEFBK0RDQSxFQTlEbUMsOEJBQWUsRUE4RGxEO0lBL0REOzRCQStEQyxDQUFBIiwiZmlsZSI6ImF0dHJpYnV0ZXMvcmVwZWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdHRyaWJ1dGUsIEN1c3RvbUF0dHJpYnV0ZSwgTW9kZWwsIGJpbmREb219IGZyb20gXCJob3JjcnV4LWNvcmVcIlxyXG5cclxuQEF0dHJpYnV0ZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBlYXQgZXh0ZW5kcyBDdXN0b21BdHRyaWJ1dGUge1xyXG5cdFxyXG5cdHN0YXRpYyBJRCA9IDA7XHJcblx0XHJcblx0cHJpdmF0ZSBJRDpudW1iZXI7XHJcblx0cHJpdmF0ZSBjb21tZW50Tm9kZTogQ29tbWVudDtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihub2RlOk5vZGUsIGF0dHI6QXR0ciwgbW9kZWw6TW9kZWwsIHBhdGg6c3RyaW5nKSB7XHJcblx0XHRzdXBlcihub2RlLCBhdHRyLCBtb2RlbCwgcGF0aCk7XHJcblx0XHRcclxuXHRcdHRoaXMuSUQgPSBSZXBlYXQuSUQrKztcclxuXHRcdFxyXG5cdFx0dGhpcy5jcmVhdGVDb21tZW50KClcclxuXHRcdHRoaXMucmVtb3ZlT3JpZ2luYWxOb2RlKCk7XHJcblx0XHRcclxuXHRcdHRoaXMubm9kZSA9IHRoaXMubm9kZS5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCBjcmVhdGVDb21tZW50KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb21tZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ0lEJyt0aGlzLklEKTtcclxuXHRcdHRoaXMubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNvbW1lbnROb2RlLCB0aGlzLm5vZGUpO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgcmVtb3ZlT3JpZ2luYWxOb2RlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIHJlbW92ZU9sZE5vZGVzKCk6IHZvaWQge1xyXG5cdFx0bGV0IHNlbGVjdG9yID0gJypbZGF0YS1yZXBlYXRpZD1cIicrdGhpcy5JRCsnXCJdJztcclxuXHRcdGxldCByb290OmFueSA9IHRoaXMuY29tbWVudE5vZGUucGFyZW50RWxlbWVudCB8fCB0aGlzLmNvbW1lbnROb2RlLnBhcmVudE5vZGU7XHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksIChub2RlOk5vZGUpID0+IHtcclxuXHRcdFx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCBpbnNlcnROb2RlKG5vZGU6Tm9kZSk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb21tZW50Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCB0aGlzLmNvbW1lbnROb2RlLm5leHRTaWJsaW5nKTtcclxuXHR9XHJcblx0XHJcblx0bmV3SlNWYWx1ZSh2YWx1ZSk6dm9pZCB7XHJcblx0XHRsZXQgbm9kZXM6QXJyYXk8Tm9kZT4gPSBbXTtcclxuXHRcdFxyXG5cdFx0Zm9yKHZhciBrZXkgaW4gdmFsdWUpIHtcclxuXHRcdFx0bGV0IG1vZGVsID0ge2l0OiB2YWx1ZVtrZXldfTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCByb3c6YW55ID0gdGhpcy5ub2RlLmNsb25lTm9kZSh0cnVlKVx0XHJcblx0XHRcdGRlbGV0ZSByb3dbJ3JlcGVhdCddO1xyXG5cdFx0XHRyb3cucmVtb3ZlQXR0cmlidXRlKCdyZXBlYXQnKTtcclxuXHRcdFx0cm93LmRhdGFzZXRbJ3JlcGVhdGlkJ10gPSB0aGlzLklEO1xyXG5cdFx0XHRcclxuXHRcdFx0YmluZERvbShyb3csIFttb2RlbF0pO1xyXG5cdFx0XHRcclxuXHRcdFx0bm9kZXMucHVzaChyb3cpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR0aGlzLnJlbW92ZU9sZE5vZGVzKCk7XHJcblx0XHRcclxuXHRcdG5vZGVzLnJldmVyc2UoKS5mb3JFYWNoKG4gPT4ge1xyXG5cdFx0XHR0aGlzLmluc2VydE5vZGUobik7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH1cclxufSAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=