import React from 'react'

import { SearchBoxWrapper, SearchInput } from './styles'

interface Props {
  disabled: boolean,
  searchBox: boolean,
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBox: React.FC<Props> = ({ disabled, searchBox, searchHandler }) => {
  if (!searchBox) return null

  return (
    <SearchBoxWrapper>
      <SearchInput
        {...{ disabled }}
        type="text"
        placeholder="Search User"
        onChange={searchHandler}
      />
    </SearchBoxWrapper>
  )
}

export default React.memo(SearchBox)
