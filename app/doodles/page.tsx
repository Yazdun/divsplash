import { DoodleDialog } from '@/components'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'

export default async function Doodles() {
  const supabase = createServerComponentClient({ cookies })
  const { data: doodles } = await supabase.from('doodles').select()

  return (
    <div className="container">
      <pre>{JSON.stringify(doodles, null, 2)}</pre>
    </div>
  )
}

// <div className="container">
//     <div className="text-center my-14">
//       <h1 className="text-3xl font-bold">Download a Free Doodle</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
//         aspernatur!
//       </p>
//     </div>
//     <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {Array.from(Array(12).keys()).map(i => {
//         return <DoodleDialog key={i} />
//       })}
//     </ul>
//   </div>
