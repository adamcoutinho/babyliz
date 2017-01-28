import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BackandService} from '../providers/backand-service'
import {AnunciosPage} from '../pages/anuncios/anuncios'
import {UsuarioPage} from '../pages/usuario/usuario'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnunciosPage,
    UsuarioPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnunciosPage,
    UsuarioPage
  ],
  providers: [BackandService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
