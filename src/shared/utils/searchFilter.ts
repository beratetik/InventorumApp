const lower = (str: string) => str.toLowerCase()

const searchFilter = (data: any[], searchValue: string) => {
  const filteredData = data.filter(item => (
    lower(item.first_name).includes(lower(searchValue)) ||
    lower(item.last_name).includes(lower(searchValue)) ||
    lower(item.phoneNo).includes(lower(searchValue)))
  )
  return filteredData
}

export default searchFilter
