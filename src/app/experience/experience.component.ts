import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

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
