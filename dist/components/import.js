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
        Import.prototype.created = function () {
            var src = this.getAttribute("from") || this.innerHTML;
            System.import(src);
        };
        Import.prototype.attachedCallback = function () {
            this.remove();
        };
        Object.defineProperty(Import.prototype, "created",
            __decorate([
                horcrux_core_1.created
            ], Import.prototype, "created", Object.getOwnPropertyDescriptor(Import.prototype, "created")));
        Import = __decorate([
            horcrux_core_1.Component({
                namespace: "ho",
                template: false
            })
        ], Import);
        return Import;
    })(horcrux_core_1.CustomElement);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Import;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW1wb3J0LnRzIl0sIm5hbWVzIjpbIkltcG9ydCIsIkltcG9ydC5jb25zdHJ1Y3RvciIsIkltcG9ydC5jcmVhdGVkIiwiSW1wb3J0LmF0dGFjaGVkQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSUE7UUFJb0NBLDBCQUFhQTtRQUpqREE7WUFJb0NDLDhCQUFhQTtRQVVqREEsQ0FBQ0E7UUFSU0Qsd0JBQU9BLEdBQWhCQTtZQUNDRSxJQUFJQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUN0REEsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDcEJBLENBQUNBO1FBRURGLGlDQUFnQkEsR0FBaEJBO1lBQ0NHLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO1FBQ2ZBLENBQUNBO1FBUERILHNCQUFTQSwyQkFBT0E7O2dCQUFmQSxzQkFBT0E7ZUFBQ0EsMkJBQU9BLGtDQUFQQSwyQkFBT0EsSUFHZkE7UUFURkE7WUFBQ0Esd0JBQVNBLENBQUNBO2dCQUNWQSxTQUFTQSxFQUFFQSxJQUFJQTtnQkFDZkEsUUFBUUEsRUFBRUEsS0FBS0E7YUFDZkEsQ0FBQ0E7bUJBV0RBO1FBQURBLGFBQUNBO0lBQURBLENBZEEsQUFjQ0EsRUFWbUMsNEJBQWEsRUFVaEQ7SUFkRDs0QkFjQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaW1wb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEN1c3RvbUVsZW1lbnQsIGNyZWF0ZWR9IGZyb20gXCJob3JjcnV4LWNvcmVcIlxyXG5cclxuZGVjbGFyZSB2YXIgU3lzdGVtOmFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG5hbWVzcGFjZTogXCJob1wiLFxyXG5cdHRlbXBsYXRlOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbXBvcnQgZXh0ZW5kcyBDdXN0b21FbGVtZW50IHtcclxuXHRcclxuXHRAY3JlYXRlZCBjcmVhdGVkKCkge1xyXG5cdFx0bGV0IHNyYyA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZnJvbVwiKSB8fCB0aGlzLmlubmVySFRNTDtcclxuXHRcdFN5c3RlbS5pbXBvcnQoc3JjKTtcclxuXHR9XHJcblx0XHJcblx0YXR0YWNoZWRDYWxsYmFjaygpIHtcclxuXHRcdHRoaXMucmVtb3ZlKCk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9