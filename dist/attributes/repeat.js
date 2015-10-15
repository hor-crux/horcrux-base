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
            this.node.setAttribute("lazy", "");
            /*
            clone the node, because after init the repeat attribute, the node gets parsed and its attributes may get changed, e.g. to undefined
            */
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
            var $index = 0;
            for (var key in value) {
                var model = {
                    it: value[key],
                    $index: $index
                };
                var row = this.node.cloneNode(true);
                delete row['repeat'];
                row.removeAttribute('repeat');
                row.dataset['repeatid'] = this.ID;
                horcrux_core_1.bindDom(row, [model].concat(this.model.objects));
                row.removeAttribute("lazy");
                if (!!row.eventBus) {
                    row.eventBus.dispatch(new horcrux_core_1.ComponentCanBindEvent([model].concat(this.model.objects)));
                }
                else {
                    [].filter.call(row.querySelectorAll("*"), function (e) {
                        return e.nodeName.indexOf("-") > -1;
                    }).forEach(function (e) {
                        e.eventBus.dispatch(new horcrux_core_1.ComponentCanBindEvent([model].concat(_this.model.objects)));
                    });
                }
                nodes.push(row);
            }
            this.removeOldNodes();
            nodes.reverse().forEach(function (n) {
                _this.insertNode(n);
            });
        };
        Repeat.precedence = 1;
        Repeat.ID = 0;
        Repeat = __decorate([
            horcrux_core_1.Attribute
        ], Repeat);
        return Repeat;
    })(horcrux_core_1.CustomAttribute);
    exports.Repeat = Repeat;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvcmVwZWF0LnRzIl0sIm5hbWVzIjpbIlJlcGVhdCIsIlJlcGVhdC5jb25zdHJ1Y3RvciIsIlJlcGVhdC5pbml0IiwiUmVwZWF0LmNyZWF0ZUNvbW1lbnQiLCJSZXBlYXQucmVtb3ZlT3JpZ2luYWxOb2RlIiwiUmVwZWF0LnJlbW92ZU9sZE5vZGVzIiwiUmVwZWF0Lmluc2VydE5vZGUiLCJSZXBlYXQuY2xlYXJPYnNlcnZlciIsIlJlcGVhdC5vbk5ld1ZhbHVlIiwiUmVwZWF0LnJlbmRlckxpc3QiXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFpRTs7Ozs7Ozs7Ozs7Ozs7O0lBTWpFO1FBQ3FCQSwwQkFBZUE7UUFEcENBO1lBQ3FCQyw4QkFBZUE7UUFnSHBDQSxDQUFDQTtRQXZHVUQscUJBQUlBLEdBQWRBO1lBQ0NFLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBRXRCQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFBQTtZQUNwQkEsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxDQUFDQTtZQUVwQkEsSUFBSUEsQ0FBQ0EsSUFBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDMUNBOztjQUVFQTtZQUNGQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUd0Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDckRBLENBQUNBO1FBRVNGLDhCQUFhQSxHQUF2QkE7WUFDQ0csSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsR0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEs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LENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLFVBQUFBLENBQUNBO3dCQUMxQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7b0JBQ3BDQSxDQUFDQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxDQUFDQTt3QkFDWEEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsb0NBQXFCQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFBQTtvQkFDbkZBLENBQUNBLENBQUNBLENBQUFBO2dCQUNIQSxDQUFDQTtnQkFFREEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLENBQUNBO1lBRURBLElBQUlBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1lBRXRCQSxLQUFLQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxDQUFDQTtnQkFDeEJBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNKQSxDQUFDQTtRQTVHTVQsaUJBQVVBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2ZBLFNBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBSmZBO1lBQUNBLHdCQUFTQTttQkFpSFRBO1FBQURBLGFBQUNBO0lBQURBLENBakhBLEFBaUhDQSxFQWhIb0IsOEJBQWUsRUFnSG5DO0lBRU8sY0FBTSxVQUZiO0lBRWMiLCJmaWxlIjoiYXR0cmlidXRlcy9yZXBlYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9vYnNlcnZlLWpzL29ic2VydmUtanMuZC50c1wiIC8+XHJcblxyXG5cclxuaW1wb3J0IHtBdHRyaWJ1dGUsIEN1c3RvbUF0dHJpYnV0ZSwgTW9kZWwsIGJpbmREb20sIENvbXBvbmVudENhbkJpbmRFdmVudH0gZnJvbSBcImhvcmNydXgtY29yZVwiXHJcbmltcG9ydCB7QXJyYXlPYnNlcnZlciwgT2JqZWN0T2JzZXJ2ZXJ9IGZyb20gXCJvYnNlcnZlanNcIlxyXG5cclxuQEF0dHJpYnV0ZVxyXG5jbGFzcyBSZXBlYXQgZXh0ZW5kcyBDdXN0b21BdHRyaWJ1dGUge1xyXG5cdFxyXG5cdHN0YXRpYyBwcmVjZWRlbmNlID0gMTtcclxuXHRzdGF0aWMgSUQgPSAwO1xyXG5cdFxyXG5cdHByaXZhdGUgSUQ6bnVtYmVyO1xyXG5cdHByaXZhdGUgY29tbWVudE5vZGU6IENvbW1lbnQ7XHJcblx0cHJpdmF0ZSBvYnNlcnZlcjogb2JzZXJ2ZWpzLkFycmF5T2JzZXJ2ZXJfaW5zdGFuY2UgfCBvYnNlcnZlanMuT2JqZWN0T2JzZXJ2ZXJfaW5zdGFuY2U7XHJcblx0XHJcblx0cHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLklEID0gUmVwZWF0LklEKys7XHJcblx0XHRcclxuXHRcdHRoaXMuY3JlYXRlQ29tbWVudCgpXHJcblx0XHR0aGlzLnJlbW92ZU9yaWdpbmFsTm9kZSgpO1xyXG5cdFx0XHJcblx0XHQoPGFueT50aGlzLm5vZGUpLnNldEF0dHJpYnV0ZShcImxhenlcIiwgXCJcIik7XHJcblx0XHQvKlxyXG5cdFx0Y2xvbmUgdGhlIG5vZGUsIGJlY2F1c2UgYWZ0ZXIgaW5pdCB0aGUgcmVwZWF0IGF0dHJpYnV0ZSwgdGhlIG5vZGUgZ2V0cyBwYXJzZWQgYW5kIGl0cyBhdHRyaWJ1dGVzIG1heSBnZXQgY2hhbmdlZCwgZS5nLiB0byB1bmRlZmluZWQgXHJcblx0XHQqL1xyXG5cdFx0dGhpcy5ub2RlID0gdGhpcy5ub2RlLmNsb25lTm9kZSh0cnVlKTtcclxuXHRcdFxyXG5cdFx0XHJcblx0XHR0aGlzLmJpbmRpbmcub25OZXdWYWx1ZSh0aGlzLm9uTmV3VmFsdWUuYmluZCh0aGlzKSk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCBjcmVhdGVDb21tZW50KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb21tZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ0lEJyt0aGlzLklEKTtcclxuXHRcdHRoaXMubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNvbW1lbnROb2RlLCB0aGlzLm5vZGUpO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgcmVtb3ZlT3JpZ2luYWxOb2RlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIHJlbW92ZU9sZE5vZGVzKCk6IHZvaWQge1xyXG5cdFx0bGV0IHNlbGVjdG9yID0gJypbZGF0YS1yZXBlYXRpZD1cIicrdGhpcy5JRCsnXCJdJztcclxuXHRcdGxldCByb290OmFueSA9IHRoaXMuY29tbWVudE5vZGUucGFyZW50RWxlbWVudCB8fCB0aGlzLmNvbW1lbnROb2RlLnBhcmVudE5vZGU7XHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksIChub2RlOk5vZGUpID0+IHtcclxuXHRcdFx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCBpbnNlcnROb2RlKG5vZGU6Tm9kZSk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb21tZW50Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCB0aGlzLmNvbW1lbnROb2RlLm5leHRTaWJsaW5nKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIGNsZWFyT2JzZXJ2ZXIoKSB7XHJcblx0XHR0aGlzLm9ic2VydmVyID8gdGhpcy5vYnNlcnZlci5jbG9zZSgpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgb25OZXdWYWx1ZSh2YWx1ZSk6dm9pZCB7XHJcblx0XHR0aGlzLnJlbmRlckxpc3QodmFsdWUpO1xyXG5cdFx0XHJcblx0XHR0aGlzLmNsZWFyT2JzZXJ2ZXIoKTtcclxuXHRcdFxyXG5cdFx0aWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0XHRsZXQgb2JzZXJ2ZXIgPSBuZXcgQXJyYXlPYnNlcnZlcih2YWx1ZSk7XHJcblx0XHRcdG9ic2VydmVyLm9wZW4oKCk9PntcclxuXHRcdFx0XHR0aGlzLnJlbmRlckxpc3QodmFsdWUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0bGV0IG9ic2VydmVyID0gbmV3IE9iamVjdE9ic2VydmVyKHZhbHVlKTtcclxuXHRcdFx0b2JzZXJ2ZXIub3BlbigoKT0+e1xyXG5cdFx0XHRcdHRoaXMucmVuZGVyTGlzdCh2YWx1ZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgcmVuZGVyTGlzdCh2YWx1ZTphbnkpOiB2b2lkIHtcclxuXHRcdGxldCBub2RlczpBcnJheTxOb2RlPiA9IFtdO1xyXG5cdFx0XHJcblx0XHRsZXQgJGluZGV4ID0gMDtcclxuXHRcdGZvcih2YXIga2V5IGluIHZhbHVlKSB7XHJcblx0XHRcdGxldCBtb2RlbCA9IHtcclxuXHRcdFx0XHRpdDogdmFsdWVba2V5XSxcclxuXHRcdFx0XHQkaW5kZXg6ICRpbmRleFx0XHRcdFx0XHJcblx0XHRcdH07XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgcm93OmFueSA9IHRoaXMubm9kZS5jbG9uZU5vZGUodHJ1ZSlcdFxyXG5cdFx0XHRkZWxldGUgcm93WydyZXBlYXQnXTtcclxuXHRcdFx0cm93LnJlbW92ZUF0dHJpYnV0ZSgncmVwZWF0Jyk7XHJcblx0XHRcdHJvdy5kYXRhc2V0WydyZXBlYXRpZCddID0gdGhpcy5JRDtcclxuXHRcdFx0XHJcblx0XHRcdGJpbmREb20ocm93LCBbbW9kZWxdLmNvbmNhdCh0aGlzLm1vZGVsLm9iamVjdHMpKTtcclxuXHRcdFx0cm93LnJlbW92ZUF0dHJpYnV0ZShcImxhenlcIik7XHJcblx0XHRcdFxyXG5cdFx0XHRpZighIXJvdy5ldmVudEJ1cykge1xyXG5cdFx0XHRcdHJvdy5ldmVudEJ1cy5kaXNwYXRjaChuZXcgQ29tcG9uZW50Q2FuQmluZEV2ZW50KFttb2RlbF0uY29uY2F0KHRoaXMubW9kZWwub2JqZWN0cykpKVx0XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0W10uZmlsdGVyLmNhbGwocm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLCBlPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGUubm9kZU5hbWUuaW5kZXhPZihcIi1cIikgPiAtMVxyXG5cdFx0XHRcdH0pLmZvckVhY2goZSA9PiB7XHJcblx0XHRcdFx0XHRlLmV2ZW50QnVzLmRpc3BhdGNoKG5ldyBDb21wb25lbnRDYW5CaW5kRXZlbnQoW21vZGVsXS5jb25jYXQodGhpcy5tb2RlbC5vYmplY3RzKSkpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0bm9kZXMucHVzaChyb3cpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR0aGlzLnJlbW92ZU9sZE5vZGVzKCk7XHJcblx0XHRcclxuXHRcdG5vZGVzLnJldmVyc2UoKS5mb3JFYWNoKG4gPT4ge1xyXG5cdFx0XHR0aGlzLmluc2VydE5vZGUobik7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcbn0gXHJcblxyXG5leHBvcnQge1JlcGVhdH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=