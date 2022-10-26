import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {
  habilidad: Habilidades = null;

  constructor(
    private habilidadesService: HabilidadesService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadesService.detail(id).subscribe(
      data=>{
        this.habilidad = data;
      }, err =>{
        alert("Error al modificar la habilidad.");
        this.router.navigate(['']);
      }
    ) 
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadesService.update(id, this.habilidad).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar la habilidad.");
        this.router.navigate(['']);
      }
    )

  }
}
