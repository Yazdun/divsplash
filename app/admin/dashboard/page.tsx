import { Card } from '@/components'
import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function Dashboard() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const { data: doodles } = await supabase.from('doodles').select('*')
  const { data: profiles } = await supabase.from('profiles').select('*')
  const { data: downloads } = await supabase.from('downloads').select('*')

  return (
    <div className="grid w-full gap-2 lg:grid-cols-3">
      <Card className="flex flex-col items-center justify-center gap-5 text-xl font-bold text-center">
        <p>{doodles?.length}</p>
        <h2>Total doodles</h2>
      </Card>
      <Card className="flex flex-col items-center justify-center gap-5 text-xl font-bold text-center">
        <p>{profiles?.length}</p>
        <h2>Total users</h2>
      </Card>
      <Card className="flex flex-col items-center justify-center gap-5 text-xl font-bold text-center">
        <p>{downloads?.length}</p>
        <h2>Total Download</h2>
      </Card>
    </div>
  )
}
