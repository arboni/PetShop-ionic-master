import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoServicoPage } from './tipoServico';

@NgModule({
  declarations: [
    TipoServicoPage,
  ],
  imports: [
    IonicPageModule.forChild(TipoServicoPage),
  ],
})
export class TipoServicoPageModule {}
