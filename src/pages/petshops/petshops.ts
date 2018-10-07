import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetshopService } from "../../services/domain/petshop.service";
import { PetshopDTO } from "../../models/Petshop";


@IonicPage()
@Component({
  selector: 'page-petshops',
  templateUrl: 'petshops.html',
})
export class PetshopsPage {

items: PetshopDTO[];

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public petshopService : PetshopService // importação do serviço
     ) {
  }


  // função chamando o serviço que consome api
  ionViewDidLoad() {
    this.petshopService.findAll()
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
       return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 )
        ;
      })
    }
    else{this.ionViewDidLoad();}
  }
}
