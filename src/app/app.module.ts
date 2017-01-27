import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BackandService} from '../providers/backand-service'
import {AnunciosPage} from '../pages/anuncios/anuncios'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnunciosPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnunciosPage
  ],
  providers: [BackandService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
