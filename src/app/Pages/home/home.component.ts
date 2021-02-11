import { Component, OnInit } from '@angular/core';
import { Dicionario } from 'src/app/Models/Dicionario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value = 0;
  teste=0;

  traduz(num: HTMLInputElement)
  { 
    //let vogaisDict = new Map();
    //vogaisDict.set(0, 'A')
    //vogaisDict.set(1, 'E')
    
    let vogaisDict = new Dicionario
    let valor = Number(num.value)

    var condicao = vogaisDict.vogais.has(valor)

    if (num.value && condicao) {
      return vogaisDict.vogais.get(valor)
    }

    console.log(condicao)

    return;
  }

}
