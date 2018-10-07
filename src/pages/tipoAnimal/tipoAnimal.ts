import { TipoAnimalService } from '../../services/domain/TipoAnimal.service';
import { TipoAnimalDTO } from '../../models/TipoAnimal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tipoAanimal',
  templateUrl: 'tipo-animal.html',
})

export class TipoAnimalPage {

items: TipoAnimalDTO[];

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public tipoAnimalService : TipoAnimalService // importação do serviço
     ) {
  }


  // função chamando o serviço que consome api
  ionViewDidLoad() {
    this.tipoAnimalService.findAll()
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
       return (item.id.toString().indexOf(val.toLowerCase()) > -1, item.tipo.toString().indexOf(val.toLowerCase()) > -1 );
      })
    }
    else{this.ionViewDidLoad();}
  }
}

