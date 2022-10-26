import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/service/educacion-service.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {
  nombreEducacion : string;
  descripcionEducacion : string;

  constructor(private educacionService: EducacionServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreEducacion, this.descripcionEducacion);
    this.educacionService.save(educacion).subscribe(
      data =>{
        alert("Formación educativa añadida correctamente.");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló al añadir la formación educativa");
        this.router.navigate(['']);
      }
    )
  }

}
