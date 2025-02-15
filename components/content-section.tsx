import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
  id: string;
}

export function ContentSection({ title, children, reverse = false, id }: ContentSectionProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: false })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <div id={id} ref={ref} className="relative py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className={'absolute inset-0 bg-gradient-to-br from-[#e7e73c] to-[#faf455]'} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.h2 
            className={'text-2xl md:text-3xl font-bold mb-8 text-center text-[#ff1c1c]'}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -20 }
            }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}