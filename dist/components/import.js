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
        };
        HcImport.pending = {};
        HcImport = __decorate([
            horcrux_core_1.Component
        ], HcImport);
        return HcImport;
    })(horcrux_core_1.CustomElement);
    exports.HcImport = HcImport;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW1wb3J0LnRzIl0sIm5hbWVzIjpbIkhjSW1wb3J0IiwiSGNJbXBvcnQuY29uc3RydWN0b3IiLCJIY0ltcG9ydC5pbXBvcnQiLCJIY0ltcG9ydC5jcmVhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUlBO1FBQ3VCQSw0QkFBYUE7UUFEcENBO1lBQ3VCQyw4QkFBYUE7UUFtQnBDQSxDQUFDQTtRQWhCT0QsZUFBTUEsR0FBYkEsVUFBY0EsT0FBaUJBLEVBQUVBLEdBQVVBO1lBQzFDRSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtpQkFDeEJBLElBQUlBLENBQUNBLFVBQUFBLENBQUNBO2dCQUNOQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQTtZQUNoQ0EsQ0FBQ0EsQ0FBQ0E7aUJBQ0RBLEtBQUtBLENBQUNBLFVBQUFBLEdBQUdBO2dCQUNUQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQTtnQkFDL0JBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ25CQSxDQUFDQSxDQUFDQSxDQUFBQTtRQUNIQSxDQUFDQTtRQUVERiwwQkFBT0EsR0FBUEE7WUFDQ0csSUFBSUEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7WUFDdERBLElBQUlBLE9BQU9BLEdBQUdBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQzFDQSxDQUFDQTtRQWZNSCxnQkFBT0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFIckJBO1lBQUNBLHdCQUFTQTtxQkFvQlRBO1FBQURBLGVBQUNBO0lBQURBLENBcEJBLEFBb0JDQSxFQW5Cc0IsNEJBQWEsRUFtQm5DO0lBRVEsZ0JBQVEsWUFGaEI7SUFFaUIiLCJmaWxlIjoiY29tcG9uZW50cy9pbXBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ3VzdG9tRWxlbWVudH0gZnJvbSBcImhvcmNydXgtY29yZVwiXHJcblxyXG5kZWNsYXJlIHZhciBTeXN0ZW06YW55O1xyXG5cclxuQENvbXBvbmVudFxyXG5jbGFzcyBIY0ltcG9ydCBleHRlbmRzIEN1c3RvbUVsZW1lbnQge1xyXG5cdFxyXG5cdHN0YXRpYyBwZW5kaW5nID0ge307XHJcblx0c3RhdGljIGltcG9ydChlbGVtZW50OiBIY0ltcG9ydCwgc3JjOnN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gU3lzdGVtLmltcG9ydChzcmMpXHJcblx0XHQudGhlbihfPT4ge1xyXG5cdFx0XHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0d2luZG93LmFsZXJ0KGVycik7XHJcblx0XHR9KVxyXG5cdH1cclxuXHRcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0bGV0IHNyYyA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZnJvbVwiKSB8fCB0aGlzLmlubmVySFRNTDtcclxuXHRcdGxldCBwcm9taXNlID0gSGNJbXBvcnQuaW1wb3J0KHRoaXMsIHNyYyk7XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG4gZXhwb3J0IHtIY0ltcG9ydH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=