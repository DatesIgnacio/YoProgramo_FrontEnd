import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {
  habilidad: string;
  porcentaje: number;

  constructor(private habilidadesService: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const habilidad = new Habilidades(this.habilidad, this.porcentaje);
    this.habilidadesService.save(habilidad).subscribe(
      data =>{
        alert("Habilidad creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló al añadir la habilidad");
        this.router.navigate(['']);
      }
    )
  
  }

}
