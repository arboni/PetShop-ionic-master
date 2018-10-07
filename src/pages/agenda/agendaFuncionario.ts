import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendaFuncionarioService } from '../../services/domain/AgendaFuncionario.service';
import { AgendaFuncionarioDTO } from '../../models/AgendaFuncionario';

/**
 * Generated class for the AgendaFuncionarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agendaFuncionario',
  templateUrl: 'agendaFuncionario.html',
})
export class AgendaFuncionarioPage {
  items: AgendaFuncionarioDTO[];

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public agendaFuncionarioService : AgendaFuncionarioService // importação do serviço
     ) {
  }


  // função chamando o serviço que consome api
  ionViewDidLoad() {
    this.agendaFuncionarioService.findAll()
    .subscribe(response =>{
      this.items = response;
    },
    error =>{
      console.log(error);
    });
  }

  getItems(ev) {
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
       return (item.id.toString().indexOf(val.toLowerCase()) > -1 )
        ;
      })
    }
    else{this.ionViewDidLoad();}
  }
}

