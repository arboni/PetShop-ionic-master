import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FuncionarioService } from '../../services/domain/Funcionario.service';
import { FuncionarioDTO } from '../../models/Funcionario';

/**
 * Generated class for the FuncionarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-funcionario',
  templateUrl: 'funcionario.html',
})
export class FuncionarioPage {

  items: FuncionarioDTO[];

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public funcionarioService : FuncionarioService // importação do serviço
     ) {
  }


  // função chamando o serviço que consome api
  ionViewDidLoad() {
    this.funcionarioService.findAll()
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
       return (item.id.toString().indexOf(val.toLowerCase()) > -1, item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 )
        ;
      })
    }
    else{this.ionViewDidLoad();}
  }
}

