import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'new-message',
    template: `
        <mat-card class="card">
            <form>
                <mat-card-content> 
                    <mat-form-field>
                        <input [(ngModel)]="message.owner" matInput name="Name"/>
                    </mat-form-field>
                    <mat-form-field>
                        <textarea [(ngModel)]="message.text" matInput name="Message"></textarea>
                    </mat-form-field>
                    <mat-card-actions>
                        <button (click)="post()" mat-button color="primary">POST</button>
                    </mat-card-actions>
                </mat-card-content>
            </form>
         </mat-card>`
})
export class NewMessageComponent{

    constructor(private webService : WebService){}
    message={
         owner: "test",
         test: "dfgdfgdfgdfg"
    }   
    
    post(){
        this.webService.postMessage(this.message);
        
    }
   
}
