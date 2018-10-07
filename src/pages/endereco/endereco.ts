import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoService } from '../../services/domain/Endereco.service';
import { EnderecoDTO } from '../../models/Endereco';

/**
 * Generated class for the EnderecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-endereco',
  templateUrl: 'endereco.html',
})
export class EnderecoPage {

  items: EnderecoDTO[];

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public enderecoService : EnderecoService // importação do serviço
     ) {
  }


  // função chamando o serviço que consome api
  ionViewDidLoad() {
    this.enderecoService.findAll()
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
       return (item.id.toString().indexOf(val.toLowerCase()) > -1 ,
       item.logradouro.toString().indexOf(val.toLowerCase()) > -1 ,
       item.numero.toString().indexOf(val.toLowerCase()) > -1 ,
       item.complemento.toString().indexOf(val.toLowerCase()) > -1 ,
       item.cep.toString().indexOf(val.toLowerCase()) > -1 )
        ;
      })
    }
    else{this.ionViewDidLoad();}
  }
}


