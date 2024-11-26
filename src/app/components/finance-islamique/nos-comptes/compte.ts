export interface Caracteristique {
    titre: string;
    description: string;
    icon: string;
    detail: string[];
  }
  
  export interface Compte {
    titre: string;
    description: string;
    caracteristiques: Caracteristique[];
  }