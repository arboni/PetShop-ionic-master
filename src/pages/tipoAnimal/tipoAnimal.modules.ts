import { HomePage } from './../home/home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoAnimalPage } from './tipoAnimal';

@NgModule({
  declarations: [
    HomePage,
    TipoAnimalPage
  ],
  imports: [
    IonicPageModule.forChild(TipoAnimalPage),
  ],
})
export class TipoAnimalPageModule {}
