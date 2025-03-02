
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [FormsModule, CommonModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  usuario: string = '';
  password: string = '';
  error: boolean = false;
  horaActual: string = '';
  mensajeError: string = '';

  constructor(private router: Router) {
    this.actualizarHora();
  }

  actualizarHora() {
    setInterval(() => {
      const ahora = new Date();
      this.horaActual = ahora.toLocaleTimeString();
    }, 1000);
  }

  usuariosPermitidos = [
    { usuario: 'Jaimes', password: 'ClashOfClans' },
    { usuario: 'Alex', password: 'FarCry' },
    { usuario: 'Payolita', password: 'AmorDeMiVida'}
  ];

  validarLogin() {
    const usuarioValido = this.usuariosPermitidos.find(
      (user) => user.usuario === this.usuario && user.password === this.password
    );

    if (usuarioValido) {
      this.router.navigate(['/home'], { queryParams: { usuario: usuarioValido.usuario } });
    } else {
      this.error = true;
      this.mensajeError = 'Datos Erróneos. Por favor, verifica tu usuario y contraseña.';
    }
  }

  limpiarError() {
    this.error = false;
  }

}
