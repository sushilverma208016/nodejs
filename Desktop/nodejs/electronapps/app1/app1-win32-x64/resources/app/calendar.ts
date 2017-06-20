import {Component, Input, NgModule, OnInit, OnChanges } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@Component( { 
    selector : "monthcalendar",
    template : `
        <div style="width:210px;display:inline-block;margin:10px;">
            
            <div style="text-align:center;color:red">{{year}} - {{month}}</div>
            <div style="width:30px;height:30px;float:left;color:green"  *ngFor="let dn of daynames">
                {{dn}}
            </div>
            <div style="width:30px;height:30px;float:left;color:blue"  *ngFor="let day of days">
                {{day}}
            </div>

        </div>
    `
}) 
class MonthCalendar implements OnInit, OnChanges { 

    daynames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    @Input()
    year : number = 2017 ; 

    @Input()
    month : number  = 6; 

    days : Array<number> ;

    ngOnInit() { 
        this.createCalendar() ; 
    }

    ngOnChanges() {
        this.createCalendar() ; 
    }

    createCalendar() {
        this.days = new Array(42) ; 
        let daysInMonth = new Date ( this.year, this.month, 0).getDate() ; // 30 
        let firstOfDayOfMonth = new Date ( this.year, this.month - 1, 1 ).getDay() ; // 4: Thu
        for ( let i = firstOfDayOfMonth, day = 1 ; day <= daysInMonth ; i++ , day++ ) {
            this.days[i] = day ;
        }
    }
}

@Component({
    selector : "app",
    template : `
        <monthcalendar *ngFor="let m of months" 
                      [year]="year" 
                      [month]="m">
        </monthcalendar>
        <div>
            <button (click)="previous()" margin="10px" >Previous Year</button>
            <button (click)="next()" margin="10px" >Next Year</button>            
        </div>
    `
})
class AppComponent {

    year : number;
    months : Array<number> = [] ;

    constructor() {
        this.year = new Date().getFullYear();
        
        for ( let i = 1 ; i <= 12 ; i++) {
            this.months.push(i);
        }
    }
    previous() {
        this.year--;
    }
    next() {
        this.year++;
    }

}

@NgModule({
    imports : [ BrowserModule ],
    declarations : [ MonthCalendar, AppComponent ],
    bootstrap : [ AppComponent ]
})
class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);