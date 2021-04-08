import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { resumeModel } from './resume-model.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  
 url="https://gitconnected.com/v1/portfolio/simrin051";

 constructor(private http: HttpClient) {
   const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })

  }
}
getresume(): Observable<resumeModel>
{
return this.http.get<resumeModel>(this.url)
.pipe(
 retry(1),
 catchError(error => {
   return throwError( 'Did not resume details' );
  }))

}
}
