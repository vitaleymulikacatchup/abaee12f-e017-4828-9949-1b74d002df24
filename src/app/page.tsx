"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterBase from '@/components/footer/FooterBase';
import { Star, DollarSign, Users } from 'lucide-react';

const navbarProps = {
  navItems: [
    { name: 'Hero', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'FAQ', id: 'faq' },
    { name: 'How To Buy', id: 'how-to-buy' },
    { name: 'Tokenomics', id: 'tokenomics' },
    { name: 'Footer', id: 'footer' },
  ],
  logoSrc: '/images/logo.svg',
  logoWidth: 120,
  logoHeight: 40,
  buttonText: 'Get Started',
  onButtonClick: () => {},
  className: 'navbar',
  buttonClassName: 'cta-button',
};

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'futuristicAndOutOfBox',
      colorTemplate: 2,
      textAnimation: 'slide'
    }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline {...navbarProps} />
      </div>
      <div id="hero" data-section="hero">
        <SplitHero title="Welcome to Nova SaaS" subtitle="Your futuristic platform for success" primaryButtonText="Get Started" secondaryButtonText="Learn More" onPrimaryButtonClick={() => {}} onSecondaryButtonClick={() => {}} />
      </div>
      <div id="about" data-section="about">
        <SplitAbout description="We empower businesses to embrace the future through innovative SaaS solutions." />
      </div>
      <div id="faq" data-section="faq">
        <CentralFAQ items={[{ title: 'What is Nova SaaS?', content: 'It is a platform for SaaS solutions.' }, { title: 'How can I get started?', content: 'Visit our website for more information.' }, { title: 'Is there a free trial?', content: 'Yes, you can try us for free.' }, { title: 'Who can I contact for support?', content: 'You can email support@novasasa.com.' }]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics title="Tokenomics" description="Learn about our token distribution and features." kpiItems={[{ value: '1B', description: 'Total Supply', longDescription: 'The total supply of tokens available.', icon: Star }, { value: '20%', description: 'Liquidity', longDescription: 'Liquidity available for trading.', icon: DollarSign }, { value: '10%', description: 'Team', longDescription: 'Tokens allocated to the team.', icon: Users }]} />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase logoSrc='/images/logo.svg' logoWidth={120} logoHeight={40} columns={[
          { title: 'Quick Links', items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] },
          { title: 'Legal', items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }] },
          { title: 'Social', items: [{ label: 'Twitter', onClick: () => {} }, { label: 'Facebook', onClick: () => {} }] },
        ]} copyrightText='© 2023 Nova SaaS' onPrivacyClick={() => {}} className='footer' containerClassName='footer-container' />
      </div>
    </SiteThemeProvider>
  );
}