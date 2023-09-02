import { Button, Table } from '@radix-ui/themes'
import React from 'react'

export const DoodlesTable = () => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Created At</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Downloads</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Details</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Lorem, ipsum dolor.</Table.RowHeaderCell>
          <Table.Cell>Time</Table.Cell>
          <Table.Cell>10</Table.Cell>
          <Table.Cell>View</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Lorem, ipsum dolor.</Table.RowHeaderCell>
          <Table.Cell>Time</Table.Cell>
          <Table.Cell>10</Table.Cell>
          <Table.Cell>View</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Lorem, ipsum dolor.</Table.RowHeaderCell>
          <Table.Cell>Time</Table.Cell>
          <Table.Cell>10</Table.Cell>
          <Table.Cell>View</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}
