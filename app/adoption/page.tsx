import AdoptionApp from "../components/adoption/AdoptionApp";
import AdoptionBenefits from "../components/adoption/AdoptionBenefits";
import AdoptionCommitment from "../components/adoption/AdoptionCommitment";
import AdoptionHero from "../components/adoption/AdoptionHero";
import AdoptionPricing from "../components/adoption/AdoptionPricing";
import AdoptionTestimonials from "../components/adoption/AdoptionTestimonials";
import Footer from "../components/Footer";


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