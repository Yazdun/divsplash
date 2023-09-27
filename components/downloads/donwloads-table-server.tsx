import { Avatar, Button } from '@radix-ui/themes'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import dayjs from 'dayjs'
import Link from 'next/link'
import React from 'react'

type DownloadWithInformation = TDownload & {
  userProfile: TProfile
  downloadedDoddle: TDoodle
}

export const DownloadsTableServer = ({
  downloads,
}: {
  downloads: DownloadWithInformation[]
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
          {downloads.map(download => {
            return (
              <TableRow key={download.id}>
                <TableCell className="font-medium">
                  {download.downloadedDoddle.title}
                </TableCell>
                <TableCell>
                  {dayjs(download.created_at).format('DD MMMM YYYY')}
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <Avatar
                    size="1"
                    src={download.userProfile.avatar_url.replaceAll('"', '')}
                    fallback={download.userProfile.name.split('')[1]}
                  />

                  <span>{download.userProfile.name.replaceAll('"', '')}</span>
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
