import React, { useEffect, useState } from 'react'

import { UserType } from '../../shared/types/UserType'
import { searchFilter } from '../../shared/utils'

import { Row, SearchBox } from './components'
import {
  TableContainer,
  TableWrapper,
  TableInnerWrapper,
  Loading
} from './styles'


interface Props {
  data: UserType[],
  rawData?: UserType[],
  searchBox?: boolean
}

const TableBody: React.FC<Props> = ({ rawData, data }) => {
  if (!data?.length) {
    const text = rawData?.length ? 'No result found!' : 'Loading...'
    return <Loading>{text}</Loading>
  }

  return (
    <TableInnerWrapper>
      {data.map(item => <Row key={item.id} user={item} />)}
    </TableInnerWrapper>
  )
}

const Table: React.FC<Props> = ({ data, searchBox = true }) => {
  const [filterData, setFilterData] = useState<UserType[]>(data)

  useEffect(() => {
    setFilterData(data)
  }, [data])

  const searchHandler = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterData(() => searchFilter(data, e.target.value))
  }, [data])

  return (
    <TableContainer>
      <SearchBox disabled={!data.length} {...{ searchBox, searchHandler }} />
      <TableWrapper>
        <TableBody rawData={data} data={filterData} />
      </TableWrapper>
    </TableContainer>
  )
}

export default Table
