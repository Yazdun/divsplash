import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { Card } from '@/components/ui'
import { IconType } from 'react-icons'

export const UserItemStatusServer = ({
  title,
  desc,
  href,
  icon: Icon,
}: {
  title: string
  desc: string
  href: string
  icon?: IconType
}) => {
  return (
    <Card className="flex flex-col items-center w-full gap-5 py-10 text-center">
      {Icon && <Icon className="text-5xl" />}
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="max-w-md">{desc}</p>
      <Button highContrast color="gray" size="3">
        <Link href={href}>Go to Doodles</Link>
      </Button>
    </Card>
  )
}
