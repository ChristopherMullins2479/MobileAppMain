import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-team-theam',
  templateUrl: './set-team-theam.page.html',
  styleUrls: ['./set-team-theam.page.scss'],
})
export class SetTeamTheamPage implements OnInit {
//string to store selected team
favTeam:string = undefined;

  constructor() { }

  
  ngOnInit() {
  }

}
