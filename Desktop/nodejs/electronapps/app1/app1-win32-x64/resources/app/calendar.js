"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var MonthCalendar = (function () {
    function MonthCalendar() {
        this.daynames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        this.year = 2017;
        this.month = 6;
    }
    MonthCalendar.prototype.ngOnInit = function () {
        this.createCalendar();
    };
    MonthCalendar.prototype.ngOnChanges = function () {
        this.createCalendar();
    };
    MonthCalendar.prototype.createCalendar = function () {
        this.days = new Array(42);
        var daysInMonth = new Date(this.year, this.month, 0).getDate(); // 30 
        var firstOfDayOfMonth = new Date(this.year, this.month - 1, 1).getDay(); // 4: Thu
        for (var i = firstOfDayOfMonth, day = 1; day <= daysInMonth; i++, day++) {
            this.days[i] = day;
        }
    };
    return MonthCalendar;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MonthCalendar.prototype, "year", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MonthCalendar.prototype, "month", void 0);
MonthCalendar = __decorate([
    core_1.Component({
        selector: "monthcalendar",
        template: "\n        <div style=\"width:210px;display:inline-block;margin:10px;\">\n            \n            <div style=\"text-align:center;color:red\">{{year}} - {{month}}</div>\n            <div style=\"width:30px;height:30px;float:left;color:green\"  *ngFor=\"let dn of daynames\">\n                {{dn}}\n            </div>\n            <div style=\"width:30px;height:30px;float:left;color:blue\"  *ngFor=\"let day of days\">\n                {{day}}\n            </div>\n\n        </div>\n    "
    })
], MonthCalendar);
var AppComponent = (function () {
    function AppComponent() {
        this.months = [];
        this.year = new Date().getFullYear();
        for (var i = 1; i <= 12; i++) {
            this.months.push(i);
        }
    }
    AppComponent.prototype.previous = function () {
        this.year--;
    };
    AppComponent.prototype.next = function () {
        this.year++;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "app",
        template: "\n        <monthcalendar *ngFor=\"let m of months\" \n                      [year]=\"year\" \n                      [month]=\"m\">\n        </monthcalendar>\n        <div>\n            <button (click)=\"previous()\" margin=\"10px\" >Previous Year</button>\n            <button (click)=\"next()\" margin=\"10px\" >Next Year</button>            \n        </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [MonthCalendar, AppComponent],
        bootstrap: [AppComponent]
    })
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=calendar.js.map