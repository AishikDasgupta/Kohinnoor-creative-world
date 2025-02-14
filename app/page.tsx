import { NavBar } from "../components/nav-bar"
import { Hero } from "@/components/hero"
import { ImageSection } from "@/components/image-section"
import { GridLayout } from "../components/grid-layout"
import { Footer } from "../components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <ImageSection
        heading="Our Mission"
        subheading="Preserving and Promoting Haryanvi Culture"
        content="At Kala Haryana, our mission is to preserve, promote, and celebrate the rich cultural heritage of Haryana. We strive to create a vibrant platform that connects artists, performers, and cultural enthusiasts, fostering an environment where traditional art forms can flourish alongside contemporary expressions. Through events, workshops, and digital initiatives, we aim to make Haryanvi art and culture accessible to both local communities and global audiences."
        imageUrl="https://images.unsplash.com/photo-1551479460-5e76c686816a?q=80&w=2070"
        imageLeft={true}
      />
      <ImageSection
        heading="Our Vision"
        subheading="Building a Cultural Renaissance"
        content="We envision a future where Haryanvi art and culture thrives in the modern world, reaching new audiences while maintaining its authentic roots. Our goal is to create a sustainable ecosystem that supports artists, preserves traditional art forms, and inspires the next generation to embrace their cultural heritage. Through innovation and collaboration, we aim to position Haryana as a leading center for cultural excellence and artistic expression."
        imageUrl="https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?q=80&w=2080"
        imageLeft={false}
      />
      <GridLayout />
      <Footer />
    </div>
  )
}