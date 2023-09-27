import React from 'react'

const data = [
  {
    title: 'Our Mission',
    emoji: '🚀',
    desc: "Our mission is clear: to arm you with the most awesome resources for your designs and websites. We know that a great design can make all the difference, whether you're crafting a stunning website, a cutting-edge app, or a captivating piece of digital art.",
  },
  {
    emoji: '🪴',
    title: 'Our Commitment',
    desc: "We're committed to deliver the highest standards of quality. Your satisfaction is our top priority, and that's why we offer lifetime support for all our resources. We want to be your creative partner, providing you with the tools you need to bring your vision to life.",
  },
  {
    emoji: '💻',
    title: 'Open Source Forever',
    desc: "We believe in the power of community and collaboration. That's why we're proud to be an open-source platform, dedicated to sharing creativity far and wide. We invite you to join us on this journey, to contribute, and to be part of something bigger than yourself.",
  },
]

export const LandingFeaturesServer = () => {
  return (
    <section className="py-10">
      <ul className="grid gap-5 lg:grid-cols-3">
        {data.map(({ title, desc, emoji }) => (
          <li
            key={title}
            className="w-full px-5 py-10 space-y-5 text-center lg:p-10 bg-gradient-to-br rounded-xl from-zinc-50 via-zinc-200 to-zinc-100"
          >
            <span className="text-6xl">{emoji}</span>
            <h2 className="text-xl font-bold text-zinc-600">{title}</h2>
            <p className="lg:text-sm text-zinc-500">{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
