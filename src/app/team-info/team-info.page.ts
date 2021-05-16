import { Component, OnInit } from '@angular/core';
import{TeamsService} from '../Services/teams.service'

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.page.html',
  styleUrls: ['./team-info.page.scss'],
})
export class TeamInfoPage implements OnInit {

  constructor(private team_Info:TeamsService) { }
  //dataFromService : any = [];
  ngOnInit() {
    //this.team_Info.get_Info().subscribe(
      //(data)=>{
        //this.dataFromService = data.search;
        //console.log(this.dataFromService);
      //}
    //);
  }

}
