import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EBankingComponent } from './pages/e-banking/e-banking.component';
import { PreDomiciliationComponent } from './pages/pre-domiciliation/pre-domiciliation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { FinancementsEntreprisesComponent } from './components/finance-standard/financements-entreprises/financements-entreprises.component';
import { FinancementsParticuliersComponent } from './components/finance-standard/financements-particuliers/financements-particuliers.component';
import { SolutionsMonetiqueComponent } from './components/finance-standard/solutions-monetique/solutions-monetique.component';
import { CommerceInternationalComponent } from './components/finance-standard/commerce-international/commerce-international.component';
import { NosContactsComponent } from './components/finance-standard/nos-contacts/nos-contacts.component';
import { NosComptesComponent } from './components/finance-islamique/nos-comptes/nos-comptes.component';
import { NosConditionsComponent } from './components/finance-islamique/nos-conditions/nos-conditions.component';
import { AccueilComponent } from './components/finance-standard/accueil/accueil.component';
import { AccueilIslamiqueComponent } from './components/finance-islamique/accueil-islamique/accueil-islamique.component';
import { FinancementParticuliersIslamiqueComponent } from './components/finance-islamique/financement-particuliers-islamique/financement-particuliers-islamique.component';
import { FinancementEnterprisesIslamiqueComponent } from './components/finance-islamique/financement-enterprises-islamique/financement-enterprises-islamique.component';
import { EventComponent } from './components/event/event.component';
import { NewsComponent } from './components/news/news.component';
import { NosContactIslamiqueComponent } from './components/finance-islamique/nos-contact-islamique/nos-contact-islamique.component';
import { OuvrireCompteComponent } from './components/finance-standard/accueil/serviceBEA/ouvrire-compte/ouvrire-compte.component';
import { EpargnerComponent } from './components/finance-standard/accueil/serviceBEA/epargner/epargner.component';
import { ConvertisseurDevisesComponent } from './components/finance-standard/accueil/serviceBEA/convertisseur-devises/convertisseur-devises.component';
import { SimulateurCreditComponent } from './components/finance-standard/accueil/serviceBEA/simulateur-credit/simulateur-credit.component';
import { AppelOffresComponent } from './components/finance-standard/accueil/serviceBEA/appel-offres/appel-offres.component';
import { TrifBancairesComponent } from './components/finance-standard/accueil/serviceBEA/trif-bancaires/trif-bancaires.component';
import { EpargnePlacementsComponent } from './components/finance-standard/accueil/solutionBancaires/epargne-placements/epargne-placements.component';
import { CreditEntrepriseComponent } from './components/finance-standard/accueil/solutionBancaires/credit-entreprise/credit-entreprise.component';
import { CreditImmobilierComponent } from './components/finance-standard/accueil/solutionBancaires/credit-immobilier/credit-immobilier.component';
import { CarteBancaireComponent } from './components/finance-standard/accueil/solutionBancaires/carte-bancaire/carte-bancaire.component';
import { ConditionsOuvertureCompteComponent } from './components/finance-standard/financements-entreprises/conditions-ouverture-compte/conditions-ouverture-compte.component';
import { EBankingViewComponent } from './components/e-banking-component/e-banking-view/e-banking-view.component';
import { ArticlesComponent } from './components/news/articles/articles.component';



const routes: Routes = [
  {
    path: 'Evenément',
    component: EventComponent
  },
  {
    path: 'E-Banking',
    component: EBankingComponent
  },
  {
    path: 'Pré-domiciliation',
    component: PreDomiciliationComponent
  },
  {
    path: 'Change-password',
    component: ChangePasswordComponent
  },
  {
    path: '',
    component: DashboardComponent,
    children: [

      //finance standard
      { path: '', component: AccueilComponent },
      { path: 'financements-entreprises', component: FinancementsEntreprisesComponent },
      { path: 'financements-particuliers', component: FinancementsParticuliersComponent },
      { path: 'solutions-monetique', component: SolutionsMonetiqueComponent },
      { path: 'commerce-international', component: CommerceInternationalComponent },
      { path: 'nos-comptes', component: NosComptesComponent },
      { path: 'nos-contacts', component: NosContactsComponent },
      { path: 'nos-actualités', component: NewsComponent },
      { path: 'EbankingDetails', component: EBankingViewComponent },
      { path: 'articleDetails', component: ArticlesComponent },

      //finance islamique
      { path: 'finance-islamique', component: AccueilIslamiqueComponent },
      { path: 'finance-islamique/nos-comptes', component: NosComptesComponent },
      { path: 'finance-islamique/financement-particuliers', component: FinancementParticuliersIslamiqueComponent },
      { path: 'finance-islamique/financement-entreprises', component: FinancementEnterprisesIslamiqueComponent },
      { path: 'finance-islamique/nos-conditions', component: NosConditionsComponent },
      { path: 'finance-islamique/nos-contacts', component: NosContactIslamiqueComponent },
      { path: 'finance-islamique/nos-actualités', component: NewsComponent },
      //nos services 
      { path: 'finance-standard/services/conditionOuvertureCompte', component: OuvrireCompteComponent },
      { path: 'finance-standard/services/epargner', component: EpargnerComponent },
      { path: 'finance-standard/services/CoursPrincipalesMonnaies', component: ConvertisseurDevisesComponent },
      { path: 'finance-standard/services/simulateurDeCreditEnLigne', component: SimulateurCreditComponent },
      { path: 'finance-standard/services/appelsOffres', component: AppelOffresComponent },
      { path: 'finance-standard/services/TarifBancaires', component: TrifBancairesComponent },
      //solution bancaire 
      { path: 'finance-standard/solutionsBancaires/EpargnePlacement', component: EpargnePlacementsComponent },
      { path: 'finance-standard/solutionsBancaires/CreditEntreprise', component: CreditEntrepriseComponent },
      { path: 'finance-standard/solutionsBancaires/CreditImmobilier', component: CreditImmobilierComponent },
      { path: 'finance-standard/solutionsBancaires/CartesBancaires', component: CarteBancaireComponent },
      { path: 'finance-standard/financementEntreprises/conditionsOuvertureCompte', component: ConditionsOuvertureCompteComponent },
      { path: 'finance-standard/financementParticuliers/simulateurCredit', component: SimulateurCreditComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
