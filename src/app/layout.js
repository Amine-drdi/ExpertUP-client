import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.expert-up.fr"), // ⚠️ remplace par ton vrai domaine

  title: {
    default: "Expert-UP | Cabinet d’Expertise Comptable & Conseil",
    template: "%s | Expert-UP",
  },

  description:
    "Expert-UP accompagne dirigeants et entrepreneurs en comptabilité, fiscalité et structuration financière. Un cabinet moderne, digital et stratégique au service de votre croissance.",

  keywords: [
    "expert comptable",
    "cabinet comptable",
    "fiscalité",
    "optimisation fiscale",
    "holding",
    "facturation électronique",
    "conseil financier",
  ],

  authors: [{ name: "Expert-UP" }],
  creator: "Expert-UP",
  publisher: "Expert-UP",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/Logo-EXPERT-UP-Carre.png", type: "image/png" },
    ],
    shortcut: "/Logo-EXPERT-UP-Carre.png",
    apple: "/Logo-EXPERT-UP-Carre.png",
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.expert-up.fr",
    siteName: "Expert-UP",
    title: "Expert-UP | Cabinet d’Expertise Comptable Moderne",
    description:
      "Un cabinet à taille humaine, expert en comptabilité, fiscalité et pilotage d’entreprise.",
    images: [
      {
        url: "/Logo-EXPERT-UP-Carre.png",
        width: 1200,
        height: 630,
        alt: "Expert-UP Cabinet Comptable",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Expert-UP | Cabinet Comptable & Conseil",
    description:
      "Accompagnement stratégique des entrepreneurs en comptabilité et fiscalité.",
    images: ["/Logo-EXPERT-UP-Carre.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}