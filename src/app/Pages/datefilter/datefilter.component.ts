import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datefilter',
  templateUrl: './datefilter.component.html',
  styleUrls: ['./datefilter.component.css']
})
export class DatefilterComponent implements OnInit {

  objsData : Date[] = []
  objsDataFilter : Date[] = []
  filtro: string = "";
  formulario: FormGroup = new FormGroup({
    dataInicial: new FormControl(''),
    dataFinal: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {

    this.objsData = [
      new Date(2021,1,8,0,0,0,0),
      new Date(2021,1,9,0,0,0,0),
      new Date(2021,1,10,0,0,0,0),
      new Date(2021,1,11,0,0,0,0),
      new Date(2021,1,12,0,0,0,0),

    ]

    this.objsDataFilter = this.objsData;
  }

  filtrar() {
    if(!this.formulario.value.dataInicial && !this.formulario.value.dataFinal) {
      this.objsDataFilter = this.objsData;
      console.log(this.objsDataFilter)
    }

    else if (this.formulario.value.dataInicial && !this.formulario.value.dataFinal) {
      let aux : any[] = [];
      this.objsData.forEach(obj => {
        if (obj >= this.formulario.value.dataInicial) {
          aux.push(obj)
        }
      });
      this.objsDataFilter = aux;
      console.log(this.objsDataFilter)
    }

    else if (!this.formulario.value.dataInicial && this.formulario.value.dataFinal) {
      let aux : any[] = [];
      this.objsData.forEach(obj => {
        if (obj <= this.formulario.value.dataFinal) {
          aux.push(obj)
        }
      });
      this.objsDataFilter = aux;
      console.log(this.objsDataFilter)
    }

    else if (this.formulario.value.dataInicial && this.formulario.value.dataFinal) {
      let aux : any[] = [];
      this.objsData.forEach(obj => {
        if (obj >= this.formulario.value.dataInicial && obj <= this.formulario.value.dataFinal) {
          aux.push(obj)
        }
      });
      this.objsDataFilter = aux;
      console.log(this.objsDataFilter)
    }
 }

}
