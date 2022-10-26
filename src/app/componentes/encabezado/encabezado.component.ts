import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  isLogged = false;

  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
  login(){
    this.router.navigate(['/login'])
  }

  wasap(){
    alert("Me podés mandar un mensaje de Whatsapp al 261-630-8100. ¡Número de la provincia de Mendoza, Argentina!");
  }
  correos(){
    alert("Me podés mandar un correo electrónico a idatesut@gmail.com, o una carta a Roque Sáenz Peña 1776, dpto. 2, Barrio Bombal, Godoy Cruz (C.P.:5501), Mendoza, Argentina.")
  }

 

}
