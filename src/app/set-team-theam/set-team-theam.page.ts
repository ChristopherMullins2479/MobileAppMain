import { Component, OnInit } from '@angular/core';
import{Storage} from '@ionic/storage'
import{NavController}from '@ionic/angular'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-set-team-theam',
  templateUrl: './set-team-theam.page.html',
  styleUrls: ['./set-team-theam.page.scss'],
})
export class SetTeamTheamPage implements OnInit {

//string to store selected team
favTeam:string = undefined;

//alows you to use imports by declaring them in the constructor
  constructor(private teamTheme:Storage,
              private navCtrl:NavController,
              public toastController: ToastController) { }

  //runs when set_Fave_Team method is called from Html button
  set_Fave_Team()
  {
    this.teamTheme.set("selected_Team",this.favTeam)
    .then(()=>{this.navCtrl.navigateBack('/home')})
    .catch()
  }
  
  ngOnInit()
  {
    this.teamTheme.get("selected_Team")
    .then((data)=>{this.favTeam=data; })
    .catch()
  }

  async save_Message(){
    const toast = await this.toastController.create({
      message: 'Team has been Saved.',
      duration: 2000
    }); 
    toast.present();
  }

}
