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
        HcImport.import = function (element, src) {
            System.import(src)
                .then(function (_) {
                element.style.display = 'none';
            })
                .catch(function (err) {
                element.style.display = 'none';
                window.alert(err);
            });
        };
        HcImport.prototype.attached = function () {
            var src = this.getAttribute("from") || this.innerHTML;
            HcImport.import(this, src);
        };
        HcImport.pending = {};
        HcImport = __decorate([
            horcrux_core_1.Component
        ], HcImport);
        return HcImport;
    })(horcrux_core_1.CustomElement);
    exports.HcImport = HcImport;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW1wb3J0LnRzIl0sIm5hbWVzIjpbIkhjSW1wb3J0IiwiSGNJbXBvcnQuY29uc3RydWN0b3IiLCJIY0ltcG9ydC5pbXBvcnQiLCJIY0ltcG9ydC5hdHRhY2hlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFJQTtRQUN1QkEsNEJBQWFBO1FBRHBDQTtZQUN1QkMsOEJBQWFBO1FBbUJwQ0EsQ0FBQ0E7UUFoQk9ELGVBQU1BLEdBQWJBLFVBQWNBLE9BQWlCQSxFQUFFQSxHQUFVQTtZQUMxQ0UsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7aUJBQ2pCQSxJQUFJQSxDQUFDQSxVQUFBQSxDQUFDQTtnQkFDTkEsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsR0FBR0EsTUFBTUEsQ0FBQ0E7WUFDaENBLENBQUNBLENBQUNBO2lCQUNEQSxLQUFLQSxDQUFDQSxVQUFBQSxHQUFHQTtnQkFDVEEsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsR0FBR0EsTUFBTUEsQ0FBQ0E7Z0JBQy9CQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNuQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFDSEEsQ0FBQ0E7UUFFREYsMkJBQVFBLEdBQVJBO1lBQ0NHLElBQUlBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBO1lBQ3REQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUM1QkEsQ0FBQ0E7UUFmTUgsZ0JBQU9BLEdBQUdBLEVBQUVBLENBQUNBO1FBSHJCQTtZQUFDQSx3QkFBU0E7cUJBb0JUQTtRQUFEQSxlQUFDQTtJQUFEQSxDQXBCQSxBQW9CQ0EsRUFuQnNCLDRCQUFhLEVBbUJuQztJQUVRLGdCQUFRLFlBRmhCO0lBRWlCIiwiZmlsZSI6ImNvbXBvbmVudHMvaW1wb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEN1c3RvbUVsZW1lbnR9IGZyb20gXCJob3JjcnV4LWNvcmVcIlxyXG5cclxuZGVjbGFyZSB2YXIgU3lzdGVtOmFueTtcclxuXHJcbkBDb21wb25lbnRcclxuY2xhc3MgSGNJbXBvcnQgZXh0ZW5kcyBDdXN0b21FbGVtZW50IHtcclxuXHRcclxuXHRzdGF0aWMgcGVuZGluZyA9IHt9O1xyXG5cdHN0YXRpYyBpbXBvcnQoZWxlbWVudDogSGNJbXBvcnQsIHNyYzpzdHJpbmcpOiB2b2lkIHtcclxuXHRcdFN5c3RlbS5pbXBvcnQoc3JjKVxyXG5cdFx0LnRoZW4oXz0+IHtcclxuXHRcdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdHdpbmRvdy5hbGVydChlcnIpO1xyXG5cdFx0fSlcclxuXHR9XHJcblx0XHJcblx0YXR0YWNoZWQoKSB7XHJcblx0XHRsZXQgc3JjID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJmcm9tXCIpIHx8IHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0SGNJbXBvcnQuaW1wb3J0KHRoaXMsIHNyYyk7XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG4gZXhwb3J0IHtIY0ltcG9ydH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=