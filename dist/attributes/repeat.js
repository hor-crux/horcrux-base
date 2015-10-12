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
        function Repeat() {
            _super.apply(this, arguments);
        }
        Repeat.prototype.init = function () {
            this.ID = Repeat.ID++;
            this.createComment();
            this.removeOriginalNode();
            this.node = this.node.cloneNode(true);
            this.binding.onNewValue(this.onNewValue.bind(this));
        };
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
        Repeat.prototype.onNewValue = function (value) {
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
    exports.Repeat = Repeat;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvcmVwZWF0LnRzIl0sIm5hbWVzIjpbIlJlcGVhdCIsIlJlcGVhdC5jb25zdHJ1Y3RvciIsIlJlcGVhdC5pbml0IiwiUmVwZWF0LmNyZWF0ZUNvbW1lbnQiLCJSZXBlYXQucmVtb3ZlT3JpZ2luYWxOb2RlIiwiUmVwZWF0LnJlbW92ZU9sZE5vZGVzIiwiUmVwZWF0Lmluc2VydE5vZGUiLCJSZXBlYXQuY2xlYXJPYnNlcnZlciIsIlJlcGVhdC5vbk5ld1ZhbHVlIiwiUmVwZWF0LnJlbmRlckxpc3QiXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFpRTs7Ozs7Ozs7Ozs7Ozs7O0lBTWpFO1FBQ3FCQSwwQkFBZUE7UUFEcENBO1lBQ3FCQyw4QkFBZUE7UUEwRnBDQSxDQUFDQTtRQWxGVUQscUJBQUlBLEdBQWRBO1lBQ0NFLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBRXRCQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFBQTtZQUNwQkEsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxDQUFDQTtZQUUxQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFFdENBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQ3JEQSxDQUFDQTtRQUVTRiw4QkFBYUEsR0FBdkJBO1lBQ0NHLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLFFBQVFBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLEdBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO1lBQ3hEQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxF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QSxDQUFDQTtnQkFFN0JBLElBQUlBLEdBQUdBLEdBQU9BLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUFBO2dCQUN2Q0EsT0FBT0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JCQSxHQUFHQSxDQUFDQSxlQUFlQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFDOUJBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO2dCQUVsQ0Esc0JBQU9BLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUV0QkEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLENBQUNBO1lBRURBLElBQUlBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1lBRXRCQSxLQUFLQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxDQUFDQTtnQkFDeEJBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNKQSxDQUFDQTtRQXRGTVQsU0FBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFIZkE7WUFBQ0Esd0JBQVNBO21CQTJGVEE7UUFBREEsYUFBQ0E7SUFBREEsQ0EzRkEsQUEyRkNBLEVBMUZvQiw4QkFBZSxFQTBGbkM7SUFFTyxjQUFNLFVBRmI7SUFFYyIsImZpbGUiOiJhdHRyaWJ1dGVzL3JlcGVhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL29ic2VydmUtanMvb2JzZXJ2ZS1qcy5kLnRzXCIgLz5cclxuXHJcblxyXG5pbXBvcnQge0F0dHJpYnV0ZSwgQ3VzdG9tQXR0cmlidXRlLCBNb2RlbCwgYmluZERvbX0gZnJvbSBcImhvcmNydXgtY29yZVwiXHJcbmltcG9ydCB7QXJyYXlPYnNlcnZlciwgT2JqZWN0T2JzZXJ2ZXJ9IGZyb20gXCJvYnNlcnZlanNcIlxyXG5cclxuQEF0dHJpYnV0ZVxyXG5jbGFzcyBSZXBlYXQgZXh0ZW5kcyBDdXN0b21BdHRyaWJ1dGUge1xyXG5cdFxyXG5cdHN0YXRpYyBJRCA9IDA7XHJcblx0XHJcblx0cHJpdmF0ZSBJRDpudW1iZXI7XHJcblx0cHJpdmF0ZSBjb21tZW50Tm9kZTogQ29tbWVudDtcclxuXHRwcml2YXRlIG9ic2VydmVyOiBvYnNlcnZlanMuQXJyYXlPYnNlcnZlcl9pbnN0YW5jZSB8IG9ic2VydmVqcy5PYmplY3RPYnNlcnZlcl9pbnN0YW5jZTtcclxuXHRcclxuXHRwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuSUQgPSBSZXBlYXQuSUQrKztcclxuXHRcdFxyXG5cdFx0dGhpcy5jcmVhdGVDb21tZW50KClcclxuXHRcdHRoaXMucmVtb3ZlT3JpZ2luYWxOb2RlKCk7XHJcblx0XHRcclxuXHRcdHRoaXMubm9kZSA9IHRoaXMubm9kZS5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0XHRcclxuXHRcdHRoaXMuYmluZGluZy5vbk5ld1ZhbHVlKHRoaXMub25OZXdWYWx1ZS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIGNyZWF0ZUNvbW1lbnQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbW1lbnROb2RlID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnSUQnK3RoaXMuSUQpO1xyXG5cdFx0dGhpcy5ub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY29tbWVudE5vZGUsIHRoaXMubm9kZSk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCByZW1vdmVPcmlnaW5hbE5vZGUoKTogdm9pZCB7XHJcblx0XHR0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgcmVtb3ZlT2xkTm9kZXMoKTogdm9pZCB7XHJcblx0XHRsZXQgc2VsZWN0b3IgPSAnKltkYXRhLXJlcGVhdGlkPVwiJyt0aGlzLklEKydcIl0nO1xyXG5cdFx0bGV0IHJvb3Q6YW55ID0gdGhpcy5jb21tZW50Tm9kZS5wYXJlbnRFbGVtZW50IHx8IHRoaXMuY29tbWVudE5vZGUucGFyZW50Tm9kZTtcclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwocm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgKG5vZGU6Tm9kZSkgPT4ge1xyXG5cdFx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIGluc2VydE5vZGUobm9kZTpOb2RlKTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbW1lbnROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMuY29tbWVudE5vZGUubmV4dFNpYmxpbmcpO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgY2xlYXJPYnNlcnZlcigpIHtcclxuXHRcdHRoaXMub2JzZXJ2ZXIgPyB0aGlzLm9ic2VydmVyLmNsb3NlKCkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCBvbk5ld1ZhbHVlKHZhbHVlKTp2b2lkIHtcclxuXHRcdHRoaXMucmVuZGVyTGlzdCh2YWx1ZSk7XHJcblx0XHRcclxuXHRcdHRoaXMuY2xlYXJPYnNlcnZlcigpO1xyXG5cdFx0XHJcblx0XHRpZih2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdGxldCBvYnNlcnZlciA9IG5ldyBBcnJheU9ic2VydmVyKHZhbHVlKTtcclxuXHRcdFx0b2JzZXJ2ZXIub3BlbigoKT0+e1xyXG5cdFx0XHRcdHRoaXMucmVuZGVyTGlzdCh2YWx1ZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZih2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0XHRsZXQgb2JzZXJ2ZXIgPSBuZXcgT2JqZWN0T2JzZXJ2ZXIodmFsdWUpO1xyXG5cdFx0XHRvYnNlcnZlci5vcGVuKCgpPT57XHJcblx0XHRcdFx0dGhpcy5yZW5kZXJMaXN0KHZhbHVlKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCByZW5kZXJMaXN0KHZhbHVlOmFueSk6IHZvaWQge1xyXG5cdFx0bGV0IG5vZGVzOkFycmF5PE5vZGU+ID0gW107XHJcblx0XHRcclxuXHRcdGZvcih2YXIga2V5IGluIHZhbHVlKSB7XHJcblx0XHRcdGxldCBtb2RlbCA9IHtpdDogdmFsdWVba2V5XX07XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgcm93OmFueSA9IHRoaXMubm9kZS5jbG9uZU5vZGUodHJ1ZSlcdFxyXG5cdFx0XHRkZWxldGUgcm93WydyZXBlYXQnXTtcclxuXHRcdFx0cm93LnJlbW92ZUF0dHJpYnV0ZSgncmVwZWF0Jyk7XHJcblx0XHRcdHJvdy5kYXRhc2V0WydyZXBlYXRpZCddID0gdGhpcy5JRDtcclxuXHRcdFx0XHJcblx0XHRcdGJpbmREb20ocm93LCBbbW9kZWxdKTtcclxuXHRcdFx0XHJcblx0XHRcdG5vZGVzLnB1c2gocm93KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy5yZW1vdmVPbGROb2RlcygpO1xyXG5cdFx0XHJcblx0XHRub2Rlcy5yZXZlcnNlKCkuZm9yRWFjaChuID0+IHtcclxuXHRcdFx0dGhpcy5pbnNlcnROb2RlKG4pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG59IFxyXG5cclxuZXhwb3J0IHtSZXBlYXR9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9