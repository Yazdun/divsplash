import { Avatar, Button } from '@radix-ui/themes'
import dayjs from 'dayjs'
import Link from 'next/link'
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type LikeWithInformation = TLike & {
  userProfile: TProfile
  likedDoodle: TDoodle
}

export const LikesTableServer = ({
  likes,
}: {
  likes: LikeWithInformation[]
}) => {
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-black">Title</TableHead>
            <TableHead className="text-black">Date</TableHead>
            <TableHead className="text-black">Profile</TableHead>
            <TableHead className="text-right text-black"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {likes.map(like => {
            return (
              <TableRow key={like.id}>
                <TableCell>
                  <strong>{like.likedDoodle.title}</strong>
                </TableCell>
                <TableCell>
                  {dayjs(like.created_at).format('DD MMM YYYY')}
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <Avatar
                    size="1"
                    src={like.userProfile.avatar_url.replaceAll('"', '')}
                    fallback={like.userProfile.name.split('')[1]}
                  />

                  <span>{like.userProfile.name.replaceAll('"', '')}</span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost">
                    <Link href="/doodles">View Doodle</Link>
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
