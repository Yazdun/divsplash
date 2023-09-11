import { Table } from '@radix-ui/themes'
import React from 'react'
import { DoodleDeleteDialog } from './doodle-delete-dialog'
import dayjs from 'dayjs'

type TDoodleWithStats = TDoodle & {
  downloads?: number
  likes?: number
}

export const DoodlesTableServer = ({
  doodles,
}: {
  doodles: TDoodleWithStats[]
}) => {
  return (
    <div className="w-full">
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell width={300}>
              Created At
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Downloads</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Likes</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>
              <span className="sr-only">actions</span>
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {doodles.map(doodle => {
            return (
              <Table.Row key={doodle.id}>
                <Table.RowHeaderCell>
                  <strong>{doodle.title}</strong>
                </Table.RowHeaderCell>
                <Table.Cell>
                  {dayjs(doodle.created_at).format('DD MMMM YYYY')}
                </Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell align="right">
                  <DoodleDeleteDialog doodle={doodle} />
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
