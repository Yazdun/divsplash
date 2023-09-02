import { Table } from '@radix-ui/themes'
import React from 'react'

export const UsersTableServer = ({ profiles }: { profiles: TProfile[] }) => {
  return (
    <div className="w-full">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Username</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Downloads</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Details</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {profiles.map(profile => {
            return (
              <Table.Row key={profile.id}>
                <Table.RowHeaderCell className="font-bold">
                  {profile.name}
                </Table.RowHeaderCell>
                <Table.Cell>{profile.role}</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
