"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export function GridLayout() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: false })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const cards = [
    {
      title: "Music",
      content: "Haryanvi music is a blend of traditional and contemporary styles. It includes folk songs, classical music, and modern tunes that reflect the vibrant culture of Haryana.",
      image: "https://img.freepik.com/free-vector/colorful-maracas-musical-notes_1308-177271.jpg?ga=GA1.1.622402169.1739605743&semt=ais_hybrid"
    },
    {
      title: "Dance",
      content: "Haryanvi folk dances like Dhamal, Khoria, and Gugga are known for their rhythmic patterns and vibrant energy. These dances are the identity of our culture.",
      image: "https://img.freepik.com/premium-vector/elegant-illustration-indian-classical-dancer-vibrant-costume-gracefully-capturing-tra_1151527-11748.jpg?ga=GA1.1.622402169.1739605743&semt=ais_hybrid"
    },
    {
      title: "Art",
      content: "Ghagra-Choli, Kurta-Pajama, and Phulkari embroidery are distinctive features of Haryanvi attire. They reflect the richness of our art and craftsmanship.",
      image: "https://img.freepik.com/premium-photo/painting-woman-sitting-tree-with-flock-birds-background_792070-869.jpg?ga=GA1.1.622402169.1739605743&semt=ais_hybrid"
    },
    {
      title: "Theatre",
      content: "Swang, Nautanki, and Rasleela are popular forms of Haryanvi theatre. These performances entertain the audience about social issues and cultural values.",
      image: "https://img.freepik.com/free-photo/young-kids-performing-play-theatre-stage-celebrate-world-theatre-day_23-2151163714.jpg?ga=GA1.1.622402169.1739605743&semt=ais_hybrid"
    },
    {
      title: "Cultural events",
      content: "Fairs, festivals, and melas are an integral part of Haryanvi culture. These events bring people together to celebrate their traditions and heritage.",
      image: "https://img.freepik.com/premium-photo/indian-cwopea-farming-farmer-holding-cwopea-hands-happy-farmer_898049-1024.jpg?ga=GA1.1.622402169.1739605743&semt=ais_hybrid"
    },
    {
      title: "Crafts",
      content: "Pottery, weaving, and metalwork are some of the traditional crafts of Haryana. These crafts showcase the creativity and skills of our artisans.",
      image: "https://img.freepik.com/free-photo/woman-making-crafts-with-help-glue_114579-11503.jpg?ga=GA1.1.622402169.1739605743&semt=ais_hybrid"
    },
  ]

  return (
    <div id="programs" ref={ref} className="bg-gradient-to-b from-[#faf455] to-[#fff5b5] px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-3 md:mb-4"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -20 }
            }}
            transition={{ duration: 0.5 }}
          >
            Glimpses of Haryanvi Art
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-[#767676]"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A showcase of our rich cultural heritage
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div 
                    className="h-48 w-full bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: '400px 220px',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div className="p-4 md:p-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[#1e1e1e]">{card.title}</h2>
                    <p className="text-[#767676] leading-relaxed text-sm md:text-base">{card.content}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}