import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MeusPedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meus-pedidos',
  templateUrl: 'meus-pedidos.html',
})
export class MeusPedidosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeusPedidosPage');
  }
  

}


export class Carrinho
{
  public itens= new Array<string>();

  constructor()
  {

  }
  public adicionarNoCarrinho(prod?:string)
  {
    this.itens.push(prod);
  }
  public mostrarCarrinho()
  {
    console.log("Carrinho atual:")
    for (let i=0;i<this.itens.length;i++)
    {
      console.log(this.itens);
    }
  }

}