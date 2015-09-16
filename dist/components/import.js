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
    var Import = (function (_super) {
        __extends(Import, _super);
        function Import() {
            _super.apply(this, arguments);
        }
        Import.prototype.createdCallback = function () {
            var src = _super.prototype.getAttribute.call(this, "from") || _super.prototype.innerHTML;
            System.import(src);
        };
        Import.prototype.attachedCallback = function () {
            _super.prototype.remove.call(this);
        };
        Import = __decorate([
            horcrux_core_1.Component({
                namespace: "ho",
                template: false
            })
        ], Import);
        return Import;
    })(CustomElement);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW1wb3J0LnRzIl0sIm5hbWVzIjpbIkltcG9ydCIsIkltcG9ydC5jb25zdHJ1Y3RvciIsIkltcG9ydC5jcmVhdGVkQ2FsbGJhY2siLCJJbXBvcnQuYXR0YWNoZWRDYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFFQTtRQUlxQkEsMEJBQWFBO1FBSmxDQTtZQUlxQkMsOEJBQWFBO1FBVWxDQSxDQUFDQTtRQVJBRCxnQ0FBZUEsR0FBZkE7WUFDQ0UsSUFBSUEsR0FBR0EsR0FBR0EsZ0JBQUtBLENBQUNBLFlBQVlBLFlBQUNBLE1BQU1BLENBQUNBLElBQUlBLGdCQUFLQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUN4REEsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDcEJBLENBQUNBO1FBRURGLGlDQUFnQkEsR0FBaEJBO1lBQ0NHLGdCQUFLQSxDQUFDQSxNQUFNQSxXQUFFQSxDQUFDQTtRQUNoQkEsQ0FBQ0E7UUFiRkg7WUFBQ0Esd0JBQVNBLENBQUNBO2dCQUNWQSxTQUFTQSxFQUFFQSxJQUFJQTtnQkFDZkEsUUFBUUEsRUFBRUEsS0FBS0E7YUFDZkEsQ0FBQ0E7bUJBV0RBO1FBQURBLGFBQUNBO0lBQURBLENBZEEsQUFjQ0EsRUFWb0IsYUFBYSxFQVVqQyIsImZpbGUiOiJjb21wb25lbnRzL2ltcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiaG9yY3J1eC1jb3JlXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG5hbWVzcGFjZTogXCJob1wiLFxyXG5cdHRlbXBsYXRlOiBmYWxzZVxyXG59KVxyXG5jbGFzcyBJbXBvcnQgZXh0ZW5kcyBDdXN0b21FbGVtZW50IHtcclxuXHRcclxuXHRjcmVhdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRsZXQgc3JjID0gc3VwZXIuZ2V0QXR0cmlidXRlKFwiZnJvbVwiKSB8fCBzdXBlci5pbm5lckhUTUw7XHJcblx0XHRTeXN0ZW0uaW1wb3J0KHNyYyk7XHJcblx0fVxyXG5cdFxyXG5cdGF0dGFjaGVkQ2FsbGJhY2soKSB7XHJcblx0XHRzdXBlci5yZW1vdmUoKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=