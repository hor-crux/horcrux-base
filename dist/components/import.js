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
            return System.import(src)
                .then(function (_) {
                element.style.display = 'none';
            })
                .catch(function (err) {
                element.style.display = 'none';
                window.alert(err);
            });
        };
        HcImport.prototype.created = function () {
            var src = this.getAttribute("from") || this.innerHTML;
            var promise = HcImport.import(this, src);
            if (this.hasAttribute("wait")) {
                this.parentComponent.beforeBinding.push(promise);
            }
        };
        HcImport.pending = {};
        HcImport = __decorate([
            horcrux_core_1.Component
        ], HcImport);
        return HcImport;
    })(horcrux_core_1.CustomElement);
    exports.HcImport = HcImport;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW1wb3J0LnRzIl0sIm5hbWVzIjpbIkhjSW1wb3J0IiwiSGNJbXBvcnQuY29uc3RydWN0b3IiLCJIY0ltcG9ydC5pbXBvcnQiLCJIY0ltcG9ydC5jcmVhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUlBO1FBQ3VCQSw0QkFBYUE7UUFEcENBO1lBQ3VCQyw4QkFBYUE7UUF1QnBDQSxDQUFDQTtRQXBCT0QsZUFBTUEsR0FBYkEsVUFBY0EsT0FBaUJBLEVBQUVBLEdBQVVBO1lBQzFDRSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtpQkFDeEJBLElBQUlBLENBQUNBLFVBQUFBLENBQUNBO2dCQUNOQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQTtZQUNoQ0EsQ0FBQ0EsQ0FBQ0E7aUJBQ0RBLEtBQUtBLENBQUNBLFVBQUFBLEdBQUdBO2dCQUNUQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQTtnQkFDL0JBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ25CQSxDQUFDQSxDQUFDQSxDQUFBQTtRQUNIQSxDQUFDQTtRQUVERiwwQkFBT0EsR0FBUEE7WUFDQ0csSUFBSUEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7WUFDdERBLElBQUlBLE9BQU9BLEdBQUdBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1lBRXpDQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDOUJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBQ2xEQSxDQUFDQTtRQUNGQSxDQUFDQTtRQW5CTUgsZ0JBQU9BLEdBQUdBLEVBQUVBLENBQUNBO1FBSHJCQTtZQUFDQSx3QkFBU0E7cUJBd0JUQTtRQUFEQSxlQUFDQTtJQUFEQSxDQXhCQSxBQXdCQ0EsRUF2QnNCLDRCQUFhLEVBdUJuQztJQUVRLGdCQUFRLFlBRmhCO0lBRWlCIiwiZmlsZSI6ImNvbXBvbmVudHMvaW1wb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEN1c3RvbUVsZW1lbnR9IGZyb20gXCJob3JjcnV4LWNvcmVcIlxyXG5cclxuZGVjbGFyZSB2YXIgU3lzdGVtOmFueTtcclxuXHJcbkBDb21wb25lbnRcclxuY2xhc3MgSGNJbXBvcnQgZXh0ZW5kcyBDdXN0b21FbGVtZW50IHtcclxuXHRcclxuXHRzdGF0aWMgcGVuZGluZyA9IHt9O1xyXG5cdHN0YXRpYyBpbXBvcnQoZWxlbWVudDogSGNJbXBvcnQsIHNyYzpzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIFN5c3RlbS5pbXBvcnQoc3JjKVxyXG5cdFx0LnRoZW4oXz0+IHtcclxuXHRcdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdHdpbmRvdy5hbGVydChlcnIpO1xyXG5cdFx0fSlcclxuXHR9XHJcblx0XHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdGxldCBzcmMgPSB0aGlzLmdldEF0dHJpYnV0ZShcImZyb21cIikgfHwgdGhpcy5pbm5lckhUTUw7XHJcblx0XHRsZXQgcHJvbWlzZSA9IEhjSW1wb3J0LmltcG9ydCh0aGlzLCBzcmMpO1xyXG5cdFx0XHJcblx0XHRpZih0aGlzLmhhc0F0dHJpYnV0ZShcIndhaXRcIikpIHtcclxuXHRcdFx0dGhpcy5wYXJlbnRDb21wb25lbnQuYmVmb3JlQmluZGluZy5wdXNoKHByb21pc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxufVxyXG5cclxuIGV4cG9ydCB7SGNJbXBvcnR9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9