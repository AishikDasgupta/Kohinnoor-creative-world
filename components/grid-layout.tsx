"use client"

import { Card, CardContent } from "@/components/ui/card"

export function GridLayout() {
  const cards = [
    {
      title: "Festival of Phagan",
      content: "Holi festival in Haryana is celebrated with great enthusiasm. The festival of colors and folk songs symbolizes social unity and cultural harmony.",
      image: "https://images.unsplash.com/photo-1615630799526-77e2d86399a9?q=80&w=2070"
    },
    {
      title: "Folk Dance",
      content: "Haryanvi folk dances like Dhamal, Khoria, and Gugga are known for their rhythmic patterns and vibrant energy. These dances are the identity of our culture.",
      image: "https://images.unsplash.com/photo-1583097090817-5fc7f8564030?q=80&w=2070"
    },
    {
      title: "Traditional Attire",
      content: "Ghagra-Choli, Kurta-Pajama, and Phulkari embroidery are distinctive features of Haryanvi attire. They reflect the richness of our art and craftsmanship.",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2070"
    },
    {
      title: "Folk Music",
      content: "Ragini, Saang, and Bhajan are integral parts of Haryanvi folk music. These songs reflect various aspects of society and cultural values.",
      image: "https://images.unsplash.com/photo-1516307018167-f4e465d5f93f?q=80&w=2069"
    },
    {
      title: "Traditional Cuisine",
      content: "Churma, Kadhi, Bajre ki Roti, and Matthe ki Chutney are specialties of Haryanvi cuisine. These dishes are a treasure of taste and nutrition.",
      image: "https://images.unsplash.com/photo-1605197584281-ef57c21e46d3?q=80&w=2070"
    },
    {
      title: "Rural Sports",
      content: "Traditional sports like Kabaddi, Wrestling, and Gilli-Danda are an important part of Haryana's sporting culture and heritage.",
      image: "https://images.unsplash.com/photo-1574230951624-b6c0de2166e9?q=80&w=2070"
    },
  ]

  return (
    <div className="bg-gradient-to-b from-[#faf455] to-[#fff5b5] px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-3 md:mb-4">Glimpses of Haryanvi Art</h1>
          <p className="text-lg md:text-xl text-[#767676]">A showcase of our rich cultural heritage</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div 
                  className="h-48 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[#1e1e1e]">{card.title}</h2>
                  <p className="text-[#767676] leading-relaxed text-sm md:text-base">{card.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}