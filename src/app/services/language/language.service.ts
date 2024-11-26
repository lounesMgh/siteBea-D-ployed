import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: string;
  private readonly defaultLanguage = 'Français';
  // Textes traduits
  private translations: { [key: string]: { [key: string]: string } } = {
    'Français': {},
    'العربية': {
      'Pré-domiciliation': 'التوطين المسبق',
      'E-Banking': 'البنك الإلكتروني',
      'Menu': 'قائمة',
      'Finance standard': 'التمويل طبيعي',
      'Finance Islamique': 'التمويل الإسلامي',
      'Accueil': 'الصفحة الرئيسية',
      'Financements': 'تمويلات',
      'entreprises': 'الشركات',
      'Nos': 'بيانات',
      'conditions': 'الشروط',
      'contacts': 'الاتصال',
      'particuliers': 'خاصة',
      'comptes': 'الحسابات',
      'Commerce': 'تجارة',
      'international': 'دولية',
      'actualités': 'الأخبار',
      'Solutions': 'حلول',
      'monétique': 'النقدية',
      'Financements entreprises': 'تمويلات الشركات',
      'Financements particuliers': 'تمويلات خاصة',
      'Solutions monétique': 'حلول النقدية',
      'Commerce international': 'تجارة دولية',
      'Nos contacts': 'بيانات الاتصال',
      'Nos actualités': 'بيانات الأخبار',
      'Navigations': 'التصفحات',
      'Ouvrir un compte bancaire': 'فتح حساب بنكي',
      'Epargner': 'التوفير',
      'Convertisseur de devises': 'محول العملات',
      'Simulateur de crédit en ligne': 'محاكي التمويل عبر الإنترنت',
      "Appels d'offres": 'طلبات تقديم العروض',
      'Nos tarif bancaires': 'أسعارنا البنكية',
      'Nos services': 'خدماتنا',
      'Nous contacter': 'الاتصال بنا',
      "L'application E-Banking": 'تطبيق البنك الإلكتروني',
      'Mourabaha de biens à la consommation': 'مرابحة السلع الاستهلاكية',
      'Signature d’une convention entre La Banque Extérieure d’Algérie et Algerien Cyber Market (ACM)': "توقيع اتفاقية بين البنك الخارجي الجزائري والسوق الجزائري للإنترنت (ACM)",
      'Lire': 'قراءة',
      'Présentation': 'عرض',
      'Profitez de nos services conçus pour vous simplifier la vie au quotidien.': 'استفد من خدماتنا المصممة لتسهيل حياتك اليومية',
      "Découvrez notre gamme : ouverture de compte facile, épargne avantageuse, conversion de devises, simulation de crédit en ligne, accès aux appels d'offres et tarifs transparents. Faites confiance à notre expertise pour une gestion financière efficace.": "اكتشف مجموعتنا: فتح حساب بسهولة، توفير مجزٍ، تحويل العملات، محاكاة الائتمان عبر الإنترنت، الوصول إلى دعوات العطاءات، وأسعار شفافة. ثق بخبرتنا لإدارة مالية فعّالة.",
      'Découvrez nos offres pour ouvrir un compte bancaire.': 'اكتشف عروضنا لفتح حساب بنكي',
      'Des solutions de placement adaptées à vos besoins.': 'حلول استثمارية متناسبة مع احتياجاتكم',
      'Cours des principales monnaies':'أسعار العملات الرئيسية',
      'Cotation commerciale, Cotation billets de banque et Cotation chèques de voyage.': 'تسعير تجاري، تسعير الأوراق النقدية، تسعير الشيكات السياحية',
      'Trouvez le financement parfait pour vous.': 'ابحث عن التمويل المثالي لكم',
      "Nos appels d'offres.": 'دعوات العروض الخاصة بنا',
      "Pour vous simplifier la vie au quotidien.": "لتسهيل حياتكم اليومية",
      "Optimisez votre avenir financier avec nos solutions bancaires": "حقق أقصى استفادة من مستقبلك المالي مع حلولنا البنكية",
      "Découvrez nos solutions bancaires complètes adaptées à votre entreprise, de la gestion quotidienne des liquidités aux stratégies d'investissement à long terme. Nous sommes là pour vous aider à atteindre vos objectifs financiers avec confiance et efficacité.": "اكتشف حلولنا البنكية الشاملة المصممة خصيصًا لشركتك، من إدارة السيولة اليومية إلى استراتيجيات الاستثمار طويلة الأجل. نحن هنا لمساعدتك على تحقيق أهدافك المالية بثقة وكفاءة.",
      "Epargne placements": "الادخار والاستثمارات",
      "Placer une somme d'argent sur un horizon de temps limité avec un rendement garanti sur toute la durée du placement.": 'استثمار مبلغ من المال لفترة زمنية محدودة مع عائد مضمون طوال مدة الاستثمار',
      "En savoir plus": 'لمعرفة المزيد',
      "Crédits aux entreprises": "قروض الشركات",
      "Nous offrons des solutions de financement pour optimiser votre trésorerie et soutenir vos projets.": 'نحن نقدم حلول تمويل لتحسين سيولتكم ودعم مشاريعكم',
      "Crédit immobilier": "قرض عقاري",
      "Pour un crédit immobilier chez notre banque.": "لقرض عقاري في مصرفنا",
      "Nos cartes bancaires": "بطاقاتنا البنكية",
      "Une palette de cartes monétiques et divers solutions sont mises à votre disposition.": "توفر لكم مجموعة من البطاقات النقدية وحلول متنوعة",
      "Simplifiez votre gestion bancaire avec l'application mobile BEA": " بسط إدارة حساباتك البنكي على الهاتف المحمول ",
      "Découvrez l'application mobile BEA, votre compagnon financier personnel qui vous permet de gérer vos comptes où que vous soyez, directement depuis votre smartphone.": "اكتشف التطبيق المحمول مباشرةً من هواتفكم الذكية رفيقكم الشخصي في التمويل، الذي يسمح لكم بإدارة حساباتكم أينما كنتم ",
      "Consulter les soldes de vos comptes et vos dernières transactions.": "اطّلع على أرصدة حساباتك وآخر عملياتك",
      "Échanger avec votre banque via la messagerie.": "التواصل مع بنككم عبر الرسائل",
      "Rechercher vos opérations dans votre relevé de compte.": "البحث عن عملياتك في كشف حسابك",
      "Effectuez facilement vos virements en ligne.": "قم بتنفيذ تحويلاتك بسهولة عبر الإنترنت",
      "Aides et conseils": "المساعدة والاستشارة",
      "Je réponds à vos questions": "أجيب على أسئلتك",
      "Bienvenue, je suis là pour répondre à vos questions.": "مرحبًا، أنا هنا للإجابة على أسئلتك",
    }
  };


  constructor() {
    this.currentLanguage = localStorage.getItem('language') || this.defaultLanguage;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  setCurrentLanguage(lang: string): void {
    this.currentLanguage = lang;
    localStorage.setItem('language', lang);
  }

  getTranslation(key: string): string {
    return this.translations[this.currentLanguage][key] || key;
  }
}