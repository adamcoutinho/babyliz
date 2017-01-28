import { Component } from '@angular/core';
import { NavController, NavParams ,LoadingController,AlertController} from 'ionic-angular';
import {BackandService} from '../../providers/backand-service'
import {HomePage} from '../../pages/home/home'
/*
  Generated class for the Anuncios page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-anuncios',
  templateUrl: 'anuncios.html'
})
export class AnunciosPage {
  private anuncios:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public loadingCtrl:LoadingController,public backandService:BackandService) {

    this.anuncios = [];
    this.getItens();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnunciosPage');
  }
getItens(){
    let loader=this.loadingCtrl.create( // cria um objeto chamsdo loader, do tipo LoadingController
      {
        content:"Carregando dados..." // exibe a msg enquanto carrega as informações da tela
      }
    );
    loader.present(); // mostra o loader com a mensagem

    this.backandService.getList('anuncio').subscribe(  // usa o método getList da biblioteca do Backand
      data=>{
          this.anuncios=data;  
          console.log(data);
          loader.dismiss();
      },
      err=>{
        loader.dismiss();
        if(err.statusText=="Unauthorized"){
          this.showAlert("Ops! Deu erro",
          "Você precisa estar logado.");
        }
      }      
    );
  }
 showAlert(_titulo, _msg) {
    let alert = this.alertCtrl.create({
      title: _titulo,
      subTitle: _msg,
      buttons: ['OK']
    });
    alert.present();
  }
  acessarCadastro(){
    this.navCtrl.push(HomePage);
  }
}
