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
        content="At Kohinoor Creative World, our mission is to preserve, promote, and celebrate the rich cultural heritage of Haryana. We strive to create a vibrant platform that connects artists, performers, and cultural enthusiasts, fostering an environment where traditional art forms can flourish alongside contemporary expressions. Through events, workshops, and digital initiatives, we aim to make Haryanvi art and culture accessible to both local communities and global audiences."
        imageUrl="https://thumbs.dreamstime.com/b/haryanvi-dance-8738687.jpg?w=768"
        imageclassName="custom-image-height"
        id="mission"
      />
      <ImageSection
        imageUrl="https://thumbs.dreamstime.com/b/folk-music-dance-snake-charmers-haryana-india-was-shot-th-chandigarh-national-crafts-mela-kakagram-chandigarh-88681223.jpg?w=1400"
        imageclassName="custom-image-height"
        id="vision"
      />
      <GridLayout />
      <Footer />
    </div>
  )
}