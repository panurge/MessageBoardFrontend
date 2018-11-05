import { Http }  from '@angular/http';
import { Injectable } from '@angular/core'; 
import { MatSnackBar } from '@angular/material';
import { Observable, Subject } from 'rxjs'

@Injectable()
export class WebService {
    BASE_URL='http://localhost:63145/api';

    private messageStore = [];
    
    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable();

    constructor(private http: Http, private sb : MatSnackBar) {
    
        this.getMessages('');
    }

    getMessages(user) { 

            user = (user) ? '/' + user : '';
            this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
                this.messageStore = response.json();
                this.messageSubject.next(this.messageStore);
            }, error => {
                this.handleError("Unable to get messages");
            });   
    }
   
    async postMessage(message) {
        try {
            var response = await this.http.post(this.BASE_URL + '/message', message).toPromise();
            this.messageStore.push(response.json());
            this.messageSubject.next(this.messageStore);
        } catch (error) {
            this.handleError("Unable to post message");
        }
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', {duration: 2000});
    }
}

  