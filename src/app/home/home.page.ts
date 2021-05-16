import { Component, OnInit  } from '@angular/core';
import{Flashlight} from '@ionic-native/flashlight/ngx'
import{Storage} from '@ionic/storage'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private flashlight:Flashlight,private selected_Team:Storage) {}
  favTeam:undefined

  Tourch(){
    this.flashlight.toggle();
    console.log
  }

  ngOnInit()
  {
    this.selected_Team.get("selected_Team")
    .then((data)=>{this.favTeam=data; })
    .catch()
  }

}
