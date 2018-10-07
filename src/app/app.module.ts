import { TipoAnimalPage } from './../pages/tipoAnimal/tipoAnimal';
import { TipoAnimalService } from './../services/domain/TipoAnimal.service';
import { FuncionarioPage } from './../pages/funcionario/funcionario';
import { TipoServicoPage } from './../pages/tipoServico/tipoServico';
import { AgendaFuncionarioService } from '../services/domain/AgendaFuncionario.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PetshopService } from "../services/domain/petshop.service";
import { TipoServicoService } from '../services/domain/TipoServico.service';
import { AgendaFuncionarioPage } from '../pages/agenda/agendaFuncionario';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TipoAnimalPage,
    AgendaFuncionarioPage,
    TipoServicoPage,
    FuncionarioPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TipoAnimalPage,
    AgendaFuncionarioPage,
    TipoServicoPage,
    FuncionarioPage,




  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PetshopService ,
    TipoServicoService,
    AgendaFuncionarioService
    // importar o servico que consome api
  ]
})
export class AppModule {}
