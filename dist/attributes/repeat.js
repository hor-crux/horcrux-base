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
            var originalNode = this.node;
            this.node = this.node.cloneNode(true);
            originalNode.dontVisit = true;
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
                horcrux_core_1.bindDom(row, [model].concat(this.model.objects));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvcmVwZWF0LnRzIl0sIm5hbWVzIjpbIlJlcGVhdCIsIlJlcGVhdC5jb25zdHJ1Y3RvciIsIlJlcGVhdC5pbml0IiwiUmVwZWF0LmNyZWF0ZUNvbW1lbnQiLCJSZXBlYXQucmVtb3ZlT3JpZ2luYWxOb2RlIiwiUmVwZWF0LnJlbW92ZU9sZE5vZGVzIiwiUmVwZWF0Lmluc2VydE5vZGUiLCJSZXBlYXQuY2xlYXJPYnNlcnZlciIsIlJlcGVhdC5vbk5ld1ZhbHVlIiwiUmVwZWF0LnJlbmRlckxpc3QiXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFpRTs7Ozs7Ozs7Ozs7Ozs7O0lBTWpFO1FBQ3FCQSwwQkFBZUE7UUFEcENBO1lBQ3FCQyw4QkFBZUE7UUE2RnBDQSxDQUFDQTtRQXJGVUQscUJBQUlBLEdBQWRBO1lBQ0NFLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBRXRCQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFBQTtZQUNwQkEsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxDQUFDQTtZQUUxQkEsSUFBSUEsWUFBWUEsR0FBT0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFDakNBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ3RDQSxZQUFZQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUc5QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDckRBLENBQUNBO1FBRVNGLDhCQUFhQSxHQUF2QkE7WUFDQ0csSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsR0FBQ0EsSUFBSUEsQ0FBQ0Es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cmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3Mvb2JzZXJ2ZS1qcy9vYnNlcnZlLWpzLmQudHNcIiAvPlxyXG5cclxuXHJcbmltcG9ydCB7QXR0cmlidXRlLCBDdXN0b21BdHRyaWJ1dGUsIE1vZGVsLCBiaW5kRG9tfSBmcm9tIFwiaG9yY3J1eC1jb3JlXCJcclxuaW1wb3J0IHtBcnJheU9ic2VydmVyLCBPYmplY3RPYnNlcnZlcn0gZnJvbSBcIm9ic2VydmVqc1wiXHJcblxyXG5AQXR0cmlidXRlXHJcbmNsYXNzIFJlcGVhdCBleHRlbmRzIEN1c3RvbUF0dHJpYnV0ZSB7XHJcblx0XHJcblx0c3RhdGljIElEID0gMDtcclxuXHRcclxuXHRwcml2YXRlIElEOm51bWJlcjtcclxuXHRwcml2YXRlIGNvbW1lbnROb2RlOiBDb21tZW50O1xyXG5cdHByaXZhdGUgb2JzZXJ2ZXI6IG9ic2VydmVqcy5BcnJheU9ic2VydmVyX2luc3RhbmNlIHwgb2JzZXJ2ZWpzLk9iamVjdE9ic2VydmVyX2luc3RhbmNlO1xyXG5cdFxyXG5cdHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5JRCA9IFJlcGVhdC5JRCsrO1xyXG5cdFx0XHJcblx0XHR0aGlzLmNyZWF0ZUNvbW1lbnQoKVxyXG5cdFx0dGhpcy5yZW1vdmVPcmlnaW5hbE5vZGUoKTtcclxuXHRcdFxyXG5cdFx0bGV0IG9yaWdpbmFsTm9kZTphbnkgPSB0aGlzLm5vZGU7XHJcblx0XHR0aGlzLm5vZGUgPSB0aGlzLm5vZGUuY2xvbmVOb2RlKHRydWUpO1xyXG5cdFx0b3JpZ2luYWxOb2RlLmRvbnRWaXNpdCA9IHRydWU7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0dGhpcy5iaW5kaW5nLm9uTmV3VmFsdWUodGhpcy5vbk5ld1ZhbHVlLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgY3JlYXRlQ29tbWVudCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29tbWVudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdJRCcrdGhpcy5JRCk7XHJcblx0XHR0aGlzLm5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jb21tZW50Tm9kZSwgdGhpcy5ub2RlKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIHJlbW92ZU9yaWdpbmFsTm9kZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCByZW1vdmVPbGROb2RlcygpOiB2b2lkIHtcclxuXHRcdGxldCBzZWxlY3RvciA9ICcqW2RhdGEtcmVwZWF0aWQ9XCInK3RoaXMuSUQrJ1wiXSc7XHJcblx0XHRsZXQgcm9vdDphbnkgPSB0aGlzLmNvbW1lbnROb2RlLnBhcmVudEVsZW1lbnQgfHwgdGhpcy5jb21tZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChyb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLCAobm9kZTpOb2RlKSA9PiB7XHJcblx0XHRcdG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgaW5zZXJ0Tm9kZShub2RlOk5vZGUpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29tbWVudE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5jb21tZW50Tm9kZS5uZXh0U2libGluZyk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCBjbGVhck9ic2VydmVyKCkge1xyXG5cdFx0dGhpcy5vYnNlcnZlciA/IHRoaXMub2JzZXJ2ZXIuY2xvc2UoKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIG9uTmV3VmFsdWUodmFsdWUpOnZvaWQge1xyXG5cdFx0dGhpcy5yZW5kZXJMaXN0KHZhbHVlKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5jbGVhck9ic2VydmVyKCk7XHJcblx0XHRcclxuXHRcdGlmKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0bGV0IG9ic2VydmVyID0gbmV3IEFycmF5T2JzZXJ2ZXIodmFsdWUpO1xyXG5cdFx0XHRvYnNlcnZlci5vcGVuKCgpPT57XHJcblx0XHRcdFx0dGhpcy5yZW5kZXJMaXN0KHZhbHVlKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdGxldCBvYnNlcnZlciA9IG5ldyBPYmplY3RPYnNlcnZlcih2YWx1ZSk7XHJcblx0XHRcdG9ic2VydmVyLm9wZW4oKCk9PntcclxuXHRcdFx0XHR0aGlzLnJlbmRlckxpc3QodmFsdWUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIHJlbmRlckxpc3QodmFsdWU6YW55KTogdm9pZCB7XHJcblx0XHRsZXQgbm9kZXM6QXJyYXk8Tm9kZT4gPSBbXTtcclxuXHRcdFxyXG5cdFx0Zm9yKHZhciBrZXkgaW4gdmFsdWUpIHtcclxuXHRcdFx0bGV0IG1vZGVsID0ge2l0OiB2YWx1ZVtrZXldfTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCByb3c6YW55ID0gdGhpcy5ub2RlLmNsb25lTm9kZSh0cnVlKVx0XHJcblx0XHRcdGRlbGV0ZSByb3dbJ3JlcGVhdCddO1xyXG5cdFx0XHRyb3cucmVtb3ZlQXR0cmlidXRlKCdyZXBlYXQnKTtcclxuXHRcdFx0cm93LmRhdGFzZXRbJ3JlcGVhdGlkJ10gPSB0aGlzLklEO1xyXG5cdFx0XHRcclxuXHRcdFx0YmluZERvbShyb3csIFttb2RlbF0uY29uY2F0KHRoaXMubW9kZWwub2JqZWN0cykpO1xyXG5cdFx0XHRcclxuXHRcdFx0bm9kZXMucHVzaChyb3cpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR0aGlzLnJlbW92ZU9sZE5vZGVzKCk7XHJcblx0XHRcclxuXHRcdG5vZGVzLnJldmVyc2UoKS5mb3JFYWNoKG4gPT4ge1xyXG5cdFx0XHR0aGlzLmluc2VydE5vZGUobik7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcbn0gXHJcblxyXG5leHBvcnQge1JlcGVhdH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=