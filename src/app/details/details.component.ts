import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gotoresume() {
    console.log("Inside on Go to Page2"); 
  window.location.href='https://drive.google.com/file/d/13qBYhaBQ_0i009C1mkTLFoeWx5_BZX3Z/view?usp=sharing'; //use the external url here   

}


}
