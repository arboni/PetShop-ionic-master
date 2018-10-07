import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaFuncionarioPage } from './agendaFuncionario';

@NgModule({
  declarations: [
    AgendaFuncionarioPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaFuncionarioPage),
  ],
})
export class AgendaFuncionarioPageModule {}
