import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import ShopMegaMenu from './components/MegaMenus/ShopMegaMenu';
import CollectionsMegaMenu from './components/MegaMenus/CollectionsMegaMenu';
import SearchOverlay from './components/MegaMenus/SearchOverlay';
import HeroSlider from './components/HeroSlider';
import NewSignaturesSection from './components/NewSignaturesSection';
import EditorialSplitBanner from './components/EditorialSplitBanner';
import SpringEssentialsSection from './components/SpringEssentialsSection';
import CuratedShowcaseSection from './components/CuratedShowcaseSection';
import VerticalLookbookSection from './components/VerticalLookbookSection';
import PhilosophySection from './components/PhilosophySection';
import JournalSection from './components/JournalSection';
import ProductGrid from './components/ProductGrid';
import ProductQuickView from './components/ProductQuickView';
import CartDrawer from './components/CartDrawer';
import StorySection from './components/StorySection';
import FeaturesSection from './components/FeaturesSection';
import AccountModal from './components/AccountModal';
import Footer from './components/Footer';

function MainApp() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedCollection(null);
    setActiveMenu(null);
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCollection = (collectionName) => {
    setSelectedCollection(collectionName);
    setSelectedCategory('All');
    setActiveMenu(null);
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroCTA = (slide) => {
    if (slide.tag) {
      setSelectedCollection(slide.tag);
    }
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateSection = (sectionKey) => {
    setActiveMenu(null);
    if (sectionKey === 'lookbook') {
      document.getElementById('lookbook-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionKey === 'story') {
      document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionKey === 'features' || sectionKey === 'craftsmanship') {
      document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionKey === 'catalog') {
      document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionKey === 'journal') {
      document.getElementById('journal-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#faf9f5] dark:bg-[#121413] text-[#1a1c1a] dark:text-[#f4f2eb] transition-colors duration-300">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Adaptive Header */}
      <div className="relative z-40">
        <Navbar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          onNavigateSection={handleNavigateSection}
          onOpenAccount={() => setIsAccountOpen(true)}
          isScrolled={isScrolled}
        />

        {/* Mega Menus & Search Overlays */}
        <ShopMegaMenu
          isOpen={activeMenu === 'shop'}
          onClose={() => setActiveMenu(null)}
          onSelectCategory={handleSelectCategory}
          onSelectCollection={handleSelectCollection}
        />

        <CollectionsMegaMenu
          isOpen={activeMenu === 'collections'}
          onClose={() => setActiveMenu(null)}
          onSelectCategory={handleSelectCategory}
        />

        <SearchOverlay
          isOpen={activeMenu === 'search'}
          onClose={() => setActiveMenu(null)}
          onSelectProduct={(prod) => {
            setQuickViewProduct(prod);
            setActiveMenu(null);
          }}
          onSelectCategory={handleSelectCategory}
        />
      </div>

      {/* Hero Section */}
      <HeroSlider onSelectHeroCTA={handleHeroCTA} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* New Signatures Carousel Section */}
        <NewSignaturesSection
          onOpenQuickView={(prod) => setQuickViewProduct(prod)}
          onSelectCollection={handleSelectCollection}
        />

        {/* 50/50 Split Editorial Feature Banner */}
        <EditorialSplitBanner
          onSelectCategory={handleSelectCategory}
        />

        {/* Spring Essentials Carousel Section */}
        <SpringEssentialsSection
          onOpenQuickView={(prod) => setQuickViewProduct(prod)}
          onSelectCollection={handleSelectCollection}
        />

        {/* Curated Showcase Section ("The pieces people return to" + Floating Product Card + 4 Tabs) */}
        <CuratedShowcaseSection
          onOpenQuickView={(prod) => setQuickViewProduct(prod)}
          onSelectCategory={handleSelectCategory}
        />

        {/* Vertical Lookbook Carousel with Up/Down Arrow Buttons */}
        <VerticalLookbookSection
          onOpenQuickView={(prod) => setQuickViewProduct(prod)}
          onSelectCategory={handleSelectCategory}
        />

        {/* Philosophy & Craftsmanship Tri-Column Section */}
        <PhilosophySection />

        {/* Our Journal Section (4 Story Cards + Modal Reader) */}
        <JournalSection />

        {/* Product Catalog Grid */}
        <ProductGrid
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
          onOpenQuickView={(prod) => setQuickViewProduct(prod)}
        />

        {/* Brand Heritage Story */}
        <StorySection />

        {/* Hallmarks & Features */}
        <FeaturesSection />
      </main>

      {/* Minimalist White Footer ("Dressed, Informed.") */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onSelectCollection={handleSelectCollection}
        onNavigateSection={handleNavigateSection}
      />

      {/* Slide-out Shopping Bag Drawer */}
      <CartDrawer />

      {/* Product Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* VIP Client Account Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <MainApp />
      </CartProvider>
    </ThemeProvider>
  );
}
