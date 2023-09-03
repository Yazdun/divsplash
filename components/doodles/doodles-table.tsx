import { Table } from '@radix-ui/themes'
import React from 'react'
import { DoodleDeleteDialog } from './doodle-delete-dialog'

export const DoodlesTable = ({ doodles }: { doodles: TDoodle[] }) => {
  return (
    <div className="w-full">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created At</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Downloads</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Details</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {doodles.map(doodle => {
            return (
              <Table.Row key={doodle.id}>
                <Table.RowHeaderCell className="font-bold">
                  {doodle.title}
                </Table.RowHeaderCell>
                <Table.Cell>{doodle.created_at}</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>-</Table.Cell>
                <Table.Cell>
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
