import { Component, OnInit } from '@angular/core';
import { ExpLaboral } from 'src/app/model/exp-laboral';
import { ExpLaboralServiceService } from 'src/app/service/exp-laboral-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaLaboral: ExpLaboral[] = [];


constructor(private expLaboralService: ExpLaboralServiceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.expLaboralService.lista().subscribe(data => { this.experienciaLaboral = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.expLaboralService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}