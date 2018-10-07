import { TipoServicoDTO } from './../../models/TipoServico';
import { TipoServicoService } from './../../services/domain/TipoServico.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public TipoServicoService : TipoServicoService) {

  }
petshops(){
  this.navCtrl.push('PetshopsPage');
}

ionViewDidLoad(){
  this.TipoServicoService.findAll()
  .subscribe(
    response => {
      console.log(response);
},
error => {
  console.log(error);
});
}

}
