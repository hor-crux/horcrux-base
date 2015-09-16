/// <reference path="../../typings/observe-js/observe-js.d.ts" />
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
define(["require", "exports", "horcrux-core", "observejs"], function (require, exports, horcrux_core_1, observejs_1) {
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
        Repeat.prototype.clearObserver = function () {
            this.observer ? this.observer.close() : undefined;
        };
        Repeat.prototype.newJSValue = function (value) {
            var _this = this;
            this.renderList(value);
            this.clearObserver();
            if (value instanceof Array) {
                var observer = new observejs_1.ArrayObserver(value);
                observer.open(function () {
                    _this.renderList(value);
                });
                this.observer = observer;
            }
            else if (value instanceof Object) {
                var observer = new observejs_1.ObjectObserver(value);
                observer.open(function () {
                    _this.renderList(value);
                });
                this.observer = observer;
            }
        };
        Repeat.prototype.renderList = function (value) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvcmVwZWF0LnRzIl0sIm5hbWVzIjpbIlJlcGVhdCIsIlJlcGVhdC5jb25zdHJ1Y3RvciIsIlJlcGVhdC5jcmVhdGVDb21tZW50IiwiUmVwZWF0LnJlbW92ZU9yaWdpbmFsTm9kZSIsIlJlcGVhdC5yZW1vdmVPbGROb2RlcyIsIlJlcGVhdC5pbnNlcnROb2RlIiwiUmVwZWF0LmNsZWFyT2JzZXJ2ZXIiLCJSZXBlYXQubmV3SlNWYWx1ZSIsIlJlcGVhdC5yZW5kZXJMaXN0Il0sIm1hcHBpbmdzIjoiQUFBQSxpRUFBaUU7Ozs7Ozs7Ozs7Ozs7OztJQU1qRTtRQUNvQ0EsMEJBQWVBO1FBUWxEQSxnQkFBWUEsSUFBU0EsRUFBRUEsSUFBU0EsRUFBRUEsS0FBV0EsRUFBRUEsSUFBV0E7WUFDekRDLGtCQUFNQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUUvQkEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsTUFBTUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7WUFFdEJBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUFBO1lBQ3BCQSxJQUFJQSxDQUFDQSxrQkFBa0JBLEVBQUVBLENBQUNBO1lBRTFCQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN2Q0EsQ0FBQ0E7UUFFU0QsOEJBQWFBLEdBQXZCQTtZQUNDRSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxRQUFRQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxHQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUN4REEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDaEVBLENBQUNB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SUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQUE7Z0JBQ3ZDQSxPQUFPQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFDckJBLEdBQUdBLENBQUNBLGVBQWVBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO2dCQUM5QkEsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7Z0JBRWxDQSxzQkFBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRXRCQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNqQkEsQ0FBQ0E7WUFFREEsSUFBSUEsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7WUFFdEJBLEtBQUtBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBLFVBQUFBLENBQUNBO2dCQUN4QkEsS0FBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLENBQUNBLENBQUNBLENBQUNBO1FBQ0pBLENBQUNBO1FBdEZNUixTQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUhmQTtZQUFDQSx3QkFBU0E7bUJBMkZUQTtRQUFEQSxhQUFDQTtJQUFEQSxDQTNGQSxBQTJGQ0EsRUExRm1DLDhCQUFlLEVBMEZsRDtJQTNGRDs0QkEyRkMsQ0FBQSIsImZpbGUiOiJhdHRyaWJ1dGVzL3JlcGVhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL29ic2VydmUtanMvb2JzZXJ2ZS1qcy5kLnRzXCIgLz5cclxuXHJcblxyXG5pbXBvcnQge0F0dHJpYnV0ZSwgQ3VzdG9tQXR0cmlidXRlLCBNb2RlbCwgYmluZERvbX0gZnJvbSBcImhvcmNydXgtY29yZVwiXHJcbmltcG9ydCB7QXJyYXlPYnNlcnZlciwgT2JqZWN0T2JzZXJ2ZXJ9IGZyb20gXCJvYnNlcnZlanNcIlxyXG5cclxuQEF0dHJpYnV0ZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBlYXQgZXh0ZW5kcyBDdXN0b21BdHRyaWJ1dGUge1xyXG5cdFxyXG5cdHN0YXRpYyBJRCA9IDA7XHJcblx0XHJcblx0cHJpdmF0ZSBJRDpudW1iZXI7XHJcblx0cHJpdmF0ZSBjb21tZW50Tm9kZTogQ29tbWVudDtcclxuXHRwcml2YXRlIG9ic2VydmVyOiBvYnNlcnZlanMuQXJyYXlPYnNlcnZlcl9pbnN0YW5jZSB8IG9ic2VydmVqcy5PYmplY3RPYnNlcnZlcl9pbnN0YW5jZTtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihub2RlOk5vZGUsIGF0dHI6QXR0ciwgbW9kZWw6TW9kZWwsIHBhdGg6c3RyaW5nKSB7XHJcblx0XHRzdXBlcihub2RlLCBhdHRyLCBtb2RlbCwgcGF0aCk7XHJcblx0XHRcclxuXHRcdHRoaXMuSUQgPSBSZXBlYXQuSUQrKztcclxuXHRcdFxyXG5cdFx0dGhpcy5jcmVhdGVDb21tZW50KClcclxuXHRcdHRoaXMucmVtb3ZlT3JpZ2luYWxOb2RlKCk7XHJcblx0XHRcclxuXHRcdHRoaXMubm9kZSA9IHRoaXMubm9kZS5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCBjcmVhdGVDb21tZW50KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb21tZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ0lEJyt0aGlzLklEKTtcclxuXHRcdHRoaXMubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNvbW1lbnROb2RlLCB0aGlzLm5vZGUpO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgcmVtb3ZlT3JpZ2luYWxOb2RlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIHJlbW92ZU9sZE5vZGVzKCk6IHZvaWQge1xyXG5cdFx0bGV0IHNlbGVjdG9yID0gJypbZGF0YS1yZXBlYXRpZD1cIicrdGhpcy5JRCsnXCJdJztcclxuXHRcdGxldCByb290OmFueSA9IHRoaXMuY29tbWVudE5vZGUucGFyZW50RWxlbWVudCB8fCB0aGlzLmNvbW1lbnROb2RlLnBhcmVudE5vZGU7XHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksIChub2RlOk5vZGUpID0+IHtcclxuXHRcdFx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCBpbnNlcnROb2RlKG5vZGU6Tm9kZSk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb21tZW50Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCB0aGlzLmNvbW1lbnROb2RlLm5leHRTaWJsaW5nKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIGNsZWFyT2JzZXJ2ZXIoKSB7XHJcblx0XHR0aGlzLm9ic2VydmVyID8gdGhpcy5vYnNlcnZlci5jbG9zZSgpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHRcclxuXHRuZXdKU1ZhbHVlKHZhbHVlKTp2b2lkIHtcclxuXHRcdHRoaXMucmVuZGVyTGlzdCh2YWx1ZSk7XHJcblx0XHRcclxuXHRcdHRoaXMuY2xlYXJPYnNlcnZlcigpO1xyXG5cdFx0XHJcblx0XHRpZih2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdGxldCBvYnNlcnZlciA9IG5ldyBBcnJheU9ic2VydmVyKHZhbHVlKTtcclxuXHRcdFx0b2JzZXJ2ZXIub3BlbigoKT0+e1xyXG5cdFx0XHRcdHRoaXMucmVuZGVyTGlzdCh2YWx1ZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZih2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0XHRsZXQgb2JzZXJ2ZXIgPSBuZXcgT2JqZWN0T2JzZXJ2ZXIodmFsdWUpO1xyXG5cdFx0XHRvYnNlcnZlci5vcGVuKCgpPT57XHJcblx0XHRcdFx0dGhpcy5yZW5kZXJMaXN0KHZhbHVlKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCByZW5kZXJMaXN0KHZhbHVlOmFueSk6IHZvaWQge1xyXG5cdFx0bGV0IG5vZGVzOkFycmF5PE5vZGU+ID0gW107XHJcblx0XHRcclxuXHRcdGZvcih2YXIga2V5IGluIHZhbHVlKSB7XHJcblx0XHRcdGxldCBtb2RlbCA9IHtpdDogdmFsdWVba2V5XX07XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgcm93OmFueSA9IHRoaXMubm9kZS5jbG9uZU5vZGUodHJ1ZSlcdFxyXG5cdFx0XHRkZWxldGUgcm93WydyZXBlYXQnXTtcclxuXHRcdFx0cm93LnJlbW92ZUF0dHJpYnV0ZSgncmVwZWF0Jyk7XHJcblx0XHRcdHJvdy5kYXRhc2V0WydyZXBlYXRpZCddID0gdGhpcy5JRDtcclxuXHRcdFx0XHJcblx0XHRcdGJpbmREb20ocm93LCBbbW9kZWxdKTtcclxuXHRcdFx0XHJcblx0XHRcdG5vZGVzLnB1c2gocm93KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy5yZW1vdmVPbGROb2RlcygpO1xyXG5cdFx0XHJcblx0XHRub2Rlcy5yZXZlcnNlKCkuZm9yRWFjaChuID0+IHtcclxuXHRcdFx0dGhpcy5pbnNlcnROb2RlKG4pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG59ICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==