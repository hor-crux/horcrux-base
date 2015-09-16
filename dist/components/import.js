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
            var src = _super.prototype.getAttribute.call(this, "from") || _super.prototype.innerHTML;
            System.import(src);
        };
        Import.prototype.attachedCallback = function () {
            _super.prototype.remove.call(this);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW1wb3J0LnRzIl0sIm5hbWVzIjpbIkltcG9ydCIsIkltcG9ydC5jb25zdHJ1Y3RvciIsIkltcG9ydC5jcmVhdGVkIiwiSW1wb3J0LmF0dGFjaGVkQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSUE7UUFJb0NBLDBCQUFhQTtRQUpqREE7WUFJb0NDLDhCQUFhQTtRQVVqREEsQ0FBQ0E7UUFSU0Qsd0JBQU9BLEdBQWhCQTtZQUNDRSxJQUFJQSxHQUFHQSxHQUFHQSxnQkFBS0EsQ0FBQ0EsWUFBWUEsWUFBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsZ0JBQUtBLENBQUNBLFNBQVNBLENBQUNBO1lBQ3hEQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNwQkEsQ0FBQ0E7UUFFREYsaUNBQWdCQSxHQUFoQkE7WUFDQ0csZ0JBQUtBLENBQUNBLE1BQU1BLFdBQUVBLENBQUNBO1FBQ2hCQSxDQUFDQTtRQVBESCxzQkFBU0EsMkJBQU9BOztnQkFBZkEsc0JBQU9BO2VBQUNBLDJCQUFPQSxrQ0FBUEEsMkJBQU9BLElBR2ZBO1FBVEZBO1lBQUNBLHdCQUFTQSxDQUFDQTtnQkFDVkEsU0FBU0EsRUFBRUEsSUFBSUE7Z0JBQ2ZBLFFBQVFBLEVBQUVBLEtBQUtBO2FBQ2ZBLENBQUNBO21CQVdEQTtRQUFEQSxhQUFDQTtJQUFEQSxDQWRBLEFBY0NBLEVBVm1DLDRCQUFhLEVBVWhEO0lBZEQ7NEJBY0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2ltcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDdXN0b21FbGVtZW50LCBjcmVhdGVkfSBmcm9tIFwiaG9yY3J1eC1jb3JlXCJcclxuXHJcbmRlY2xhcmUgdmFyIFN5c3RlbTphbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRuYW1lc3BhY2U6IFwiaG9cIixcclxuXHR0ZW1wbGF0ZTogZmFsc2VcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wb3J0IGV4dGVuZHMgQ3VzdG9tRWxlbWVudCB7XHJcblx0XHJcblx0QGNyZWF0ZWQgY3JlYXRlZCgpIHtcclxuXHRcdGxldCBzcmMgPSBzdXBlci5nZXRBdHRyaWJ1dGUoXCJmcm9tXCIpIHx8IHN1cGVyLmlubmVySFRNTDtcclxuXHRcdFN5c3RlbS5pbXBvcnQoc3JjKTtcclxuXHR9XHJcblx0XHJcblx0YXR0YWNoZWRDYWxsYmFjaygpIHtcclxuXHRcdHN1cGVyLnJlbW92ZSgpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==