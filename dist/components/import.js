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
    var HcImport = (function (_super) {
        __extends(HcImport, _super);
        function HcImport() {
            _super.apply(this, arguments);
        }
        HcImport.prototype.created = function () {
            var src = this.getAttribute("from") || this.innerHTML;
            System.import(src);
        };
        HcImport.prototype.attachedCallback = function () {
            this.remove();
        };
        Object.defineProperty(HcImport.prototype, "created",
            __decorate([
                horcrux_core_1.created
            ], HcImport.prototype, "created", Object.getOwnPropertyDescriptor(HcImport.prototype, "created")));
        HcImport = __decorate([
            horcrux_core_1.Component
        ], HcImport);
        return HcImport;
    })(horcrux_core_1.CustomElement);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = HcImport;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW1wb3J0LnRzIl0sIm5hbWVzIjpbIkhjSW1wb3J0IiwiSGNJbXBvcnQuY29uc3RydWN0b3IiLCJIY0ltcG9ydC5jcmVhdGVkIiwiSGNJbXBvcnQuYXR0YWNoZWRDYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFJQTtRQUNzQ0EsNEJBQWFBO1FBRG5EQTtZQUNzQ0MsOEJBQWFBO1FBVW5EQSxDQUFDQTtRQVJTRCwwQkFBT0EsR0FBaEJBO1lBQ0NFLElBQUlBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBO1lBQ3REQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNwQkEsQ0FBQ0E7UUFFREYsbUNBQWdCQSxHQUFoQkE7WUFDQ0csSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7UUFDZkEsQ0FBQ0E7UUFQREgsc0JBQVNBLDZCQUFPQTs7Z0JBQWZBLHNCQUFPQTtlQUFDQSw2QkFBT0Esa0NBQVBBLDZCQUFPQSxJQUdmQTtRQU5GQTtZQUFDQSx3QkFBU0E7cUJBV1RBO1FBQURBLGVBQUNBO0lBQURBLENBWEEsQUFXQ0EsRUFWcUMsNEJBQWEsRUFVbEQ7SUFYRDs4QkFXQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaW1wb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEN1c3RvbUVsZW1lbnQsIGNyZWF0ZWR9IGZyb20gXCJob3JjcnV4LWNvcmVcIlxyXG5cclxuZGVjbGFyZSB2YXIgU3lzdGVtOmFueTtcclxuXHJcbkBDb21wb25lbnRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGNJbXBvcnQgZXh0ZW5kcyBDdXN0b21FbGVtZW50IHtcclxuXHRcclxuXHRAY3JlYXRlZCBjcmVhdGVkKCkge1xyXG5cdFx0bGV0IHNyYyA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZnJvbVwiKSB8fCB0aGlzLmlubmVySFRNTDtcclxuXHRcdFN5c3RlbS5pbXBvcnQoc3JjKTtcclxuXHR9XHJcblx0XHJcblx0YXR0YWNoZWRDYWxsYmFjaygpIHtcclxuXHRcdHRoaXMucmVtb3ZlKCk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9