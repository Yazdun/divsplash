import { Avatar, Table } from '@radix-ui/themes'
import dayjs from 'dayjs'
import React from 'react'

type DownloadWithInformation = TDownload & {
  userProfile: TProfile
  downloadedDoddle: TDoodle
}

export const DownloadsTable = ({
  downloads,
}: {
  downloads: DownloadWithInformation[]
}) => {
  return (
    <div className="w-full">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Downloaded At</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Downloaded By</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Details</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {downloads.map(download => {
            return (
              <Table.Row key={download.id}>
                <Table.RowHeaderCell>
                  <strong>{download.downloadedDoddle.title}</strong>
                </Table.RowHeaderCell>
                <Table.Cell>
                  {dayjs(download.created_at).format('DD MMMM YYYY')}
                </Table.Cell>
                <Table.Cell className="flex items-center gap-2">
                  <Avatar
                    size="1"
                    src={download.userProfile.avatar_url.replaceAll('"', '')}
                    fallback={download.userProfile.name.split('')[1]}
                  />

                  <span>{download.userProfile.name.replaceAll('"', '')}</span>
                </Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
