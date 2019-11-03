import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'app-child',
    template:`
     <p>Child Component:
     <input [(ngModel)] = "msg2" type="text" />
     <button (click)="onClick($event)">click Me!</button>
     </p>
    `
})

export class ChildComponent{
    @Output() msg = new EventEmitter();
    msg2:string;

    onClick(){
        this.msg.emit(this.msg2);
    }
    
}