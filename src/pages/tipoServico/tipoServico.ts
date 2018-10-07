import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoServicoDTO } from '../../models/TipoServico';
import { TipoServicoService } from '../../services/domain/TipoServico.service';



@IonicPage()
@Component({
  selector: 'page-tipo-servico',
  templateUrl: 'tipo-servico.html',
})
export class TipoServicoPage {

  items: TipoServicoDTO[];

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public tipoServicoService : TipoServicoService // importação do serviço
     ) {
  }


  // função chamando o serviço que consome api
  ionViewDidLoad() {
    this.tipoServicoService.findAll()
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
       return (item.id.toLowerCase().indexOf(val.toLowerCase()) > -1 ,
       item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 ,
       item.cnpj.toLowerCase().indexOf(val.toLowerCase()) > -1 ,
       item.endereco.toLowerCase().indexOf(val.toLowerCase()) > -1 ,
       item.funcionario.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      })
    }
    else{this.ionViewDidLoad();}
  }
}

