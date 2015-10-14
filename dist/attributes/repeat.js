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
            this.node.setAttribute("dontVisit", "");
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
                row.removeAttribute("dontVisit");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvcmVwZWF0LnRzIl0sIm5hbWVzIjpbIlJlcGVhdCIsIlJlcGVhdC5jb25zdHJ1Y3RvciIsIlJlcGVhdC5pbml0IiwiUmVwZWF0LmNyZWF0ZUNvbW1lbnQiLCJSZXBlYXQucmVtb3ZlT3JpZ2luYWxOb2RlIiwiUmVwZWF0LnJlbW92ZU9sZE5vZGVzIiwiUmVwZWF0Lmluc2VydE5vZGUiLCJSZXBlYXQuY2xlYXJPYnNlcnZlciIsIlJlcGVhdC5vbk5ld1ZhbHVlIiwiUmVwZWF0LnJlbmRlckxpc3QiXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFpRTs7Ozs7Ozs7Ozs7Ozs7O0lBTWpFO1FBQ3FCQSwwQkFBZUE7UUFEcENBO1lBQ3FCQyw4QkFBZUE7UUE4RnBDQSxDQUFDQTtRQXRGVUQscUJBQUlBLEdBQWRBO1lBQ0NFLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBRXRCQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFBQTtZQUNwQkEsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxDQUFDQTtZQUVoQkEsSUFBSUEsQ0FBQ0EsSUFBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsV0FBV0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDbkRBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBR3RDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNyREEsQ0FBQ0E7UUFFU0YsOEJBQWFBLEdBQXZCQTtZQUNDRyxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxRQUFRQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxHQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtZ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cyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL29ic2VydmUtanMvb2JzZXJ2ZS1qcy5kLnRzXCIgLz5cclxuXHJcblxyXG5pbXBvcnQge0F0dHJpYnV0ZSwgQ3VzdG9tQXR0cmlidXRlLCBNb2RlbCwgYmluZERvbX0gZnJvbSBcImhvcmNydXgtY29yZVwiXHJcbmltcG9ydCB7QXJyYXlPYnNlcnZlciwgT2JqZWN0T2JzZXJ2ZXJ9IGZyb20gXCJvYnNlcnZlanNcIlxyXG5cclxuQEF0dHJpYnV0ZVxyXG5jbGFzcyBSZXBlYXQgZXh0ZW5kcyBDdXN0b21BdHRyaWJ1dGUge1xyXG5cdFxyXG5cdHN0YXRpYyBJRCA9IDA7XHJcblx0XHJcblx0cHJpdmF0ZSBJRDpudW1iZXI7XHJcblx0cHJpdmF0ZSBjb21tZW50Tm9kZTogQ29tbWVudDtcclxuXHRwcml2YXRlIG9ic2VydmVyOiBvYnNlcnZlanMuQXJyYXlPYnNlcnZlcl9pbnN0YW5jZSB8IG9ic2VydmVqcy5PYmplY3RPYnNlcnZlcl9pbnN0YW5jZTtcclxuXHRcclxuXHRwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuSUQgPSBSZXBlYXQuSUQrKztcclxuXHRcdFxyXG5cdFx0dGhpcy5jcmVhdGVDb21tZW50KClcclxuXHRcdHRoaXMucmVtb3ZlT3JpZ2luYWxOb2RlKCk7XHJcblx0XHRcclxuXHRcdCg8RWxlbWVudD50aGlzLm5vZGUpLnNldEF0dHJpYnV0ZShcImRvbnRWaXNpdFwiLCBcIlwiKTtcclxuXHRcdHRoaXMubm9kZSA9IHRoaXMubm9kZS5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0dGhpcy5iaW5kaW5nLm9uTmV3VmFsdWUodGhpcy5vbk5ld1ZhbHVlLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgY3JlYXRlQ29tbWVudCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29tbWVudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdJRCcrdGhpcy5JRCk7XHJcblx0XHR0aGlzLm5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jb21tZW50Tm9kZSwgdGhpcy5ub2RlKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIHJlbW92ZU9yaWdpbmFsTm9kZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCByZW1vdmVPbGROb2RlcygpOiB2b2lkIHtcclxuXHRcdGxldCBzZWxlY3RvciA9ICcqW2RhdGEtcmVwZWF0aWQ9XCInK3RoaXMuSUQrJ1wiXSc7XHJcblx0XHRsZXQgcm9vdDphbnkgPSB0aGlzLmNvbW1lbnROb2RlLnBhcmVudEVsZW1lbnQgfHwgdGhpcy5jb21tZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChyb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLCAobm9kZTpOb2RlKSA9PiB7XHJcblx0XHRcdG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgaW5zZXJ0Tm9kZShub2RlOk5vZGUpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29tbWVudE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5jb21tZW50Tm9kZS5uZXh0U2libGluZyk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCBjbGVhck9ic2VydmVyKCkge1xyXG5cdFx0dGhpcy5vYnNlcnZlciA/IHRoaXMub2JzZXJ2ZXIuY2xvc2UoKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIG9uTmV3VmFsdWUodmFsdWUpOnZvaWQge1xyXG5cdFx0dGhpcy5yZW5kZXJMaXN0KHZhbHVlKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5jbGVhck9ic2VydmVyKCk7XHJcblx0XHRcclxuXHRcdGlmKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0bGV0IG9ic2VydmVyID0gbmV3IEFycmF5T2JzZXJ2ZXIodmFsdWUpO1xyXG5cdFx0XHRvYnNlcnZlci5vcGVuKCgpPT57XHJcblx0XHRcdFx0dGhpcy5yZW5kZXJMaXN0KHZhbHVlKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdGxldCBvYnNlcnZlciA9IG5ldyBPYmplY3RPYnNlcnZlcih2YWx1ZSk7XHJcblx0XHRcdG9ic2VydmVyLm9wZW4oKCk9PntcclxuXHRcdFx0XHR0aGlzLnJlbmRlckxpc3QodmFsdWUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIHJlbmRlckxpc3QodmFsdWU6YW55KTogdm9pZCB7XHJcblx0XHRsZXQgbm9kZXM6QXJyYXk8Tm9kZT4gPSBbXTtcclxuXHRcdFxyXG5cdFx0Zm9yKHZhciBrZXkgaW4gdmFsdWUpIHtcclxuXHRcdFx0bGV0IG1vZGVsID0ge2l0OiB2YWx1ZVtrZXldfTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCByb3c6YW55ID0gdGhpcy5ub2RlLmNsb25lTm9kZSh0cnVlKVx0XHJcblx0XHRcdGRlbGV0ZSByb3dbJ3JlcGVhdCddO1xyXG5cdFx0XHRyb3cucmVtb3ZlQXR0cmlidXRlKCdyZXBlYXQnKTtcclxuXHRcdFx0cm93LmRhdGFzZXRbJ3JlcGVhdGlkJ10gPSB0aGlzLklEO1xyXG5cdFx0XHRcclxuXHRcdFx0cm93LnJlbW92ZUF0dHJpYnV0ZShcImRvbnRWaXNpdFwiKTtcclxuXHRcdFx0XHJcblx0XHRcdGJpbmREb20ocm93LCBbbW9kZWxdLmNvbmNhdCh0aGlzLm1vZGVsLm9iamVjdHMpKTtcclxuXHRcdFx0XHJcblx0XHRcdG5vZGVzLnB1c2gocm93KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy5yZW1vdmVPbGROb2RlcygpO1xyXG5cdFx0XHJcblx0XHRub2Rlcy5yZXZlcnNlKCkuZm9yRWFjaChuID0+IHtcclxuXHRcdFx0dGhpcy5pbnNlcnROb2RlKG4pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG59IFxyXG5cclxuZXhwb3J0IHtSZXBlYXR9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9