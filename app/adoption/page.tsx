
import Footer from "../components/Footer";
import AdoptionApp from "./components/AdoptionApp";
import AdoptionBenefits from "./components/AdoptionBenefits";
import AdoptionCommitment from "./components/AdoptionCommitment";
import AdoptionHero from "./components/AdoptionHero";
import AdoptionPricing from "./components/AdoptionPricing";
import AdoptionTestimonials from "./components/AdoptionTestimonials";


export default function AdoptionPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdoptionHero />
      <AdoptionCommitment />
      <AdoptionPricing />
      <AdoptionBenefits />
      <AdoptionTestimonials />
      <AdoptionApp />
      <Footer />
    </main>
  );
}