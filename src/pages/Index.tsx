import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import LoveLetterSection from "@/components/LoveLetterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Floating hearts background */}
      <FloatingHearts />

      {/* Main content */}
      <main>
        <HeroSection />
        <PhotoGallery />
        <LoveLetterSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
