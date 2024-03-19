import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false; // Indique si l'utilisateur est authentifié

  constructor() {}

  // Méthode pour vérifier si l'utilisateur est authentifié
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Méthode pour connecter l'utilisateur
  login(): void {
    // Implémentez la logique de connexion ici (par exemple, appel à un service d'authentification backend)
    this.isAuthenticated = true;
  }

  // Méthode pour déconnecter l'utilisateur
  logout(): void {
    // Implémentez la logique de déconnexion ici
    this.isAuthenticated = false;
  }
}
