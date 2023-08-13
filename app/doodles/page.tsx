import { DoodleDialog } from '@/components'
import React from 'react'

export default function Doodles() {
  return (
    <div className="container">
      <div className="text-center my-14">
        <h1 className="text-3xl font-bold">Download a Free Doodle</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          aspernatur!
        </p>
      </div>
      <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from(Array(12).keys()).map(i => {
          return <DoodleDialog key={i} />
        })}
      </ul>
    </div>
  )
}
