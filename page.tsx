import { NavBar } from "./components/nav-bar"
import { Hero } from "./components/hero"
import { ContentSection } from "./components/content-section"
import { GridLayout } from "./components/grid-layout"

export default function Page() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
    

      <ContentSection
        heading="Heading"
        subheading="Subheading"
        content="Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look: Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui International first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod iure. Exclusive izakaya charming"
        imageLeft={true}
      />

      <ContentSection
        heading="Heading"
        subheading="Subheading"
        content="Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look: Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui International first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod iure. Exclusive izakaya charming"
        imageLeft={false}
      />

      <GridLayout />
    </div>
  )
}

