import ScrollTop from "@/components/generated/ScrollTop";
import ChatWidget from "@/components/generated/ChatWidget";
import HeaderSection from "@/components/sections/HeaderSection";
import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturesIntroSection from "@/components/sections/FeaturesIntroSection";
import FeatureCardsPrimarySection from "@/components/sections/FeatureCardsPrimarySection";
import FeatureCardsAiSection from "@/components/sections/FeatureCardsAiSection";
import FeatureCardsOperationsSection from "@/components/sections/FeatureCardsOperationsSection";
import InlineHtmlSpacerSection from "@/components/sections/InlineHtmlSpacerSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import CasesIntroSection from "@/components/sections/CasesIntroSection";
import CaseHighlightSection from "@/components/sections/CaseHighlightSection";
import CaseCardsSection from "@/components/sections/CaseCardsSection";
import PricingIntroSection from "@/components/sections/PricingIntroSection";
import PricingPlansSection from "@/components/sections/PricingPlansSection";
import PricingTabsHiddenSection from "@/components/sections/PricingTabsHiddenSection";
import PaymentMethodsSection from "@/components/sections/PaymentMethodsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <main id="content" className="site-main">
        <article
          className="post-10 page type-page status-publish ast-article-single"
          id="post-10"
          itemType="https://schema.org/CreativeWork"
          itemScope
        >
          <div className="entry-content clear" itemProp="text">
            <div
              data-elementor-type="wp-page"
              data-elementor-id="10"
              className="elementor elementor-10"
              data-elementor-post-type="page"
            >
              <HeroSection />
              <PartnersSection />
              <StatsSection />
              <FeaturesIntroSection />
              <FeatureCardsPrimarySection />
              <FeatureCardsAiSection />
              <FeatureCardsOperationsSection />
              <InlineHtmlSpacerSection />
              <IntegrationsSection />
              <CasesIntroSection />
              <CaseHighlightSection />
              <CaseCardsSection />
              <PricingIntroSection />
              <PricingPlansSection />
              <PricingTabsHiddenSection />
              <PaymentMethodsSection />
              <FinalCtaSection />
            </div>
          </div>
        </article>
      </main>
      <FooterSection />
      <ScrollTop />
      <ChatWidget />
    </>
  );
}
