import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { EBankingComponent } from './pages/e-banking/e-banking.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatbotTogglerComponent } from './components/chatbot/chatbot-toggler/chatbot-toggler.component';
import { PreDomiciliationComponent } from './pages/pre-domiciliation/pre-domiciliation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EbankingService } from './services/ebanking/ebanking.service';
import { PreDomiciliationService } from './services/pre-domiciliation/pre-domiciliation.service';
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
import { NosContactIslamiqueComponent } from './components/finance-islamique/nos-contact-islamique/nos-contact-islamique.component';
import { EventComponent } from './components/event/event.component';
import { FooterIslamiqueComponent } from './components/finance-islamique/footer-islamique/footer-islamique.component';
import { FooterComponent } from './components/finance-standard/footer/footer.component';
import { NewNewsComponent } from './components/finance-standard/accueil/new-news/new-news.component';
import { NewsComponent } from './components/news/news.component';
import { NgbAccordionModule, NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EBankingComponentComponent } from './components/e-banking-component/e-banking-component.component';
import { EBankingViewComponent } from './components/e-banking-component/e-banking-view/e-banking-view.component';
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
import { ArticlesComponent } from './components/news/articles/articles.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    EBankingComponent,
    ChatbotComponent,
    ChatbotTogglerComponent,
    PreDomiciliationComponent,
    DashboardComponent,
    ChangePasswordComponent,
    AccueilComponent,
    FinancementsEntreprisesComponent,
    FinancementsParticuliersComponent,
    SolutionsMonetiqueComponent,
    CommerceInternationalComponent,
    NosContactsComponent,
    NosComptesComponent,
    NosConditionsComponent,
    AccueilIslamiqueComponent,
    FinancementParticuliersIslamiqueComponent,
    FinancementEnterprisesIslamiqueComponent,
    NosContactIslamiqueComponent,
    EventComponent,
    FooterIslamiqueComponent,
    NewNewsComponent,
    NewsComponent,
    EBankingComponentComponent,
    OuvrireCompteComponent,
    EpargnerComponent,
    ConvertisseurDevisesComponent,
    SimulateurCreditComponent,
    AppelOffresComponent,
    TrifBancairesComponent,
    EBankingViewComponent,
    EpargnePlacementsComponent,
    CreditEntrepriseComponent,
    CreditImmobilierComponent,
    CarteBancaireComponent,
    ConditionsOuvertureCompteComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbAccordionModule,
    NgbCollapseModule,
  ],
  providers: [EbankingService,
    PreDomiciliationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
