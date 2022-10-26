import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidad: Habilidades [] = [];

  constructor(private habilidadesService: HabilidadesService, private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarHabilidad();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void{
    this.habilidadesService.lista().subscribe(
      data=>{
        this.habilidad = data;
      }
    )
  }

  delete(id: number) {
    if(id != undefined){
      this.habilidadesService.delete(id).subscribe(
        data=>{
          this.cargarHabilidad();
        }, err => {
          alert("No se puedo borrar la habilidad.");
        }
      )
    }
  }



}
