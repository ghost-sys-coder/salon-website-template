import { AboutSection } from "@/components/shared/AboutSection";
import { BookingSection } from "@/components/shared/ContactBookingSection";
import { Gallery } from "@/components/shared/GallerySection";
import { HeroSection } from "@/components/shared/HeroSection";
import { ServicesSection } from "@/components/shared/Services";
import { TestimonialsSection } from "@/components/shared/TestimonialSection";

// import { VariantContactBookingSection } from "@/components/variants/ContactBookingSection";
// import { VariantTestimonialsSection } from "@/components/variants/VariantTestimonialSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Gallery />
      <TestimonialsSection />

      {/* <VariantTestimonialsSection /> Optional: You can choose to include one or both testimonial sections based on your design preference */}
      
      <BookingSection /> {/* Original booking section */}

      {/* <VariantContactBookingSection /> */}
    </div>
  );
}
