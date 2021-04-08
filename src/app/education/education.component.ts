import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  resdata: any;
  headline : String;
  company: String;
  constructor(public resume : ResumeService) { }

  ngOnInit(): void {
    this.resume.getresume().subscribe(data =>{
      console.log("Data Work");
     // console.log(data.education[0].institution);
      this.resdata= data;
      
        })
  }


}
