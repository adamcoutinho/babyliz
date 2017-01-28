import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BackandService} from '../../providers/backand-service'
/*
  Generated class for the Usuario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html'
})
export class UsuarioPage {
  private usuario:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public backandService:BackandService) {
    this.usuario ={};
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }
salvar(){
  this.backandService.create('usuario',this.usuario )
        .subscribe(
                data => {
                  alert("Anuncio Salvo!");
                },
                err => this.backandService.logError(err),
                () => console.log('OK')
            );
}
}
