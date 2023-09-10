import { Avatar, Table } from '@radix-ui/themes'
import dayjs from 'dayjs'
import React from 'react'

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
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Liked At</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Liked By</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Details</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {likes.map(like => {
            return (
              <Table.Row key={like.id}>
                <Table.RowHeaderCell>
                  <strong>{like.likedDoodle.title}</strong>
                </Table.RowHeaderCell>
                <Table.Cell>
                  {dayjs(like.created_at).format('DD MMMM YYYY')}
                </Table.Cell>
                <Table.Cell className="flex items-center gap-2">
                  <Avatar
                    size="1"
                    src={like.userProfile.avatar_url.replaceAll('"', '')}
                    fallback={like.userProfile.name.split('')[1]}
                  />

                  <span>{like.userProfile.name.replaceAll('"', '')}</span>
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
