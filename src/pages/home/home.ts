import { Component } from '@angular/core';
import {BackandService} from '../../providers/backand-service'
import { NavController,LoadingController } from 'ionic-angular';
import {AnunciosPage} from '../anuncios/anuncios'
import {UsuarioPage} from '../usuario/usuario'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private anuncio:any;
  constructor(public navCtrl: NavController,public loadingController:LoadingController,public backandService:BackandService) {
    this.anuncio ={};
    let loader = this.loadingController.create({
      content: "Carregando...",
      duration: 3000
    });
    loader.present();
  }
  

  salvar(){
    this.backandService.create('anuncio',this.anuncio )
        .subscribe(
                data => {
                  alert("Anuncio Salvo!");
                },
                err => this.backandService.logError(err),
                () => console.log('OK')
            );
          this.anuncio = {};
  }
  
  buscarAnuncios(){
    this.navCtrl.push(AnunciosPage);
  }

  cadastroUsuario(){
    this.navCtrl.push(UsuarioPage);
  }


}
