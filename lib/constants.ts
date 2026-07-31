export const SITE = {
  name: "Super Cargo Service",
  shortName: "SCS",
  tagline: "Votre partenaire de confiance entre la Chine et le Cameroun.",
  url: "https://supercargoservice.com",
  whatsappNumber: "237670661916",
  phonePrimary: "+237670661916",
};

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nos services", href: "#services" },
  { label: "Comment ça marche", href: "#comment-ca-marche" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Pourquoi nous", href: "#pourquoi-nous" },
  { label: "Contact", href: "#contact" },
];

export const TRUST_STATS = [
  { value: "2015", label: "Depuis 2015" },
  { value: "CN → CM", label: "Chine → Cameroun" },
  { value: "Mer & Air", label: "Transport maritime & aérien" },
  { value: "100%", label: "Accompagnement de A à Z" },
];

export type Service = {
  id: string;
  icon: "ShoppingCart" | "Handshake" | "CreditCard" | "ShieldCheck" | "ShipPlane" | "Truck";
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    id: "achat",
    icon: "ShoppingCart",
    title: "Achat en Chine",
    description: "Nous achetons vos produits directement auprès de vos fournisseurs.",
  },
  {
    id: "negociation",
    icon: "Handshake",
    title: "Négociation fournisseurs",
    description: "Nous négocions les meilleurs prix et conditions auprès de vos fournisseurs.",
  },
  {
    id: "paiement",
    icon: "CreditCard",
    title: "Paiement fournisseur",
    description: "Nous facilitons le règlement de vos fournisseurs en Chine.",
  },
  {
    id: "qualite",
    icon: "ShieldCheck",
    title: "Contrôle qualité",
    description: "Nous vérifions vos marchandises avant leur expédition.",
  },
  {
    id: "transport",
    icon: "ShipPlane",
    title: "Transport maritime & aérien",
    description: "Choisissez la solution adaptée à votre budget et vos délais.",
  },
  {
    id: "livraison",
    icon: "Truck",
    title: "Dédouanement & livraison",
    description: "Nous nous occupons du dédouanement et de la livraison jusqu'à destination.",
  },
];

export const HOW_IT_WORKS = [
  { step: "01", title: "Vous envoyez votre demande" },
  { step: "02", title: "Nous trouvons / achetons vos produits" },
  { step: "03", title: "Contrôle qualité en Chine" },
  { step: "04", title: "Expédition vers le Cameroun" },
  { step: "05", title: "Livraison à Yaoundé ou Douala" },
];

export const PRICING = [
  {
    id: "cbm",
    label: "Transport par CBM",
    price: "300 000 FCFA",
    unit: "/ CBM",
  },
  {
    id: "billbag",
    label: "Transport / Billbag",
    price: "370 000 FCFA",
    unit: "",
  },
];

export const WHY_US = [
  "5 nuits d'hébergement offertes à Guangzhou*",
  "Assistance personnalisée en français et anglais",
  "Meilleurs prix grâce à la négociation",
  "Contrôle qualité avant expédition",
  "Transport maritime et aérien rapide et sécurisé",
  "Livraison à Yaoundé, Douala et partout au Cameroun",
];

export const NETWORK_COUNTRIES = [
  { country: "Mali", city: "Bamako" },
  { country: "Togo", city: "Lomé" },
  { country: "Gabon", city: "Libreville" },
  { country: "Guinée équatoriale", city: "Malabo" },
];

export type Office = {
  country: string;
  city: string;
  address: string;
  phones: string[];
};

export const OFFICES: Office[] = [
  {
    country: "Cameroun",
    city: "Yaoundé",
    address: "Entrée PMI Tsinga",
    phones: ["+237 670 661 916", "+237 695 102 218"],
  },
  {
    country: "Cameroun",
    city: "Douala",
    address: "Face Hôpital Bali",
    phones: ["+237 659 144 262", "+237 657 536 692", "+237 690 871 282"],
  },
  {
    country: "Chine",
    city: "Foshan",
    address: "Bureau de représentation Foshan",
    phones: [],
  },
];

export const FAQ_ITEMS = [
  {
    question: "Pouvez-vous acheter le produit à ma place ?",
    answer:
      "Oui. Notre équipe en Chine achète directement auprès de vos fournisseurs, selon vos indications précises (produit, quantité, budget).",
  },
  {
    question: "Pouvez-vous négocier avec mon fournisseur ?",
    answer:
      "Oui, la négociation fait partie de notre accompagnement standard. Nous obtenons les meilleurs prix et conditions possibles pour votre commande.",
  },
  {
    question: "Comment fonctionne le paiement fournisseur ?",
    answer:
      "Nous réglons votre fournisseur en Chine pour votre compte, en toute sécurité, puis nous intégrons ce montant dans votre facturation globale.",
  },
  {
    question: "Quel est le délai de livraison Chine → Cameroun ?",
    answer:
      "Le délai dépend du mode de transport choisi : le fret maritime est plus économique, le fret aérien est plus rapide. Nous vous conseillons selon vos priorités.",
  },
  {
    question: "Faites-vous le contrôle qualité ?",
    answer:
      "Oui, chaque commande est vérifiée en Chine avant expédition afin de confirmer la conformité avec ce qui a été commandé.",
  },
  {
    question: "Livrez-vous à Douala et Yaoundé ?",
    answer: "Oui, nous livrons à Yaoundé, Douala et partout au Cameroun.",
  },
  {
    question: "Quel est le prix du CBM ?",
    answer:
      "Le transport par CBM est facturé à 300 000 FCFA. Le tarif exact dépend du volume, du produit et du mode de transport choisi.",
  },
  {
    question: "Puis-je venir acheter moi-même en Chine ?",
    answer:
      "Oui, et dans ce cas, vous pouvez bénéficier de notre offre de 5 nuits d'hébergement offertes à Guangzhou, sous conditions.",
  },
];
