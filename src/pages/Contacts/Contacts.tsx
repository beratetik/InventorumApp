import React, { useEffect, useState } from 'react'

import { Table } from '../../components'
import { getUsers } from '../../shared/services'
import { UserType } from '../../shared/types/UserType'

import { ContactsContainer } from './styles'

const Contacts = () => {
  const [users, setUsers] = useState<UserType[]>([] as UserType[])

  useEffect(() => {
    getUsers().then(res => setUsers(res))
  }, [])

  return (
    <ContactsContainer>
      <Table data={users} />
    </ContactsContainer>
  )
}

export default Contacts
