import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpLaboral } from 'src/app/model/exp-laboral';
import { ExpLaboralServiceService } from 'src/app/service/exp-laboral-service.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  nombreExpLaboral: string = '';
  descripcionExpLaboral: string = '';

  constructor(private expLaboral: ExpLaboralServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new ExpLaboral (this.nombreExpLaboral, this.descripcionExpLaboral);
    this.expLaboral.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló al añadir la experiencia laboral.");
        this.router.navigate(['']);
      }
    )
  }

}