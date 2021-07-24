import { UserType } from '../../types/UserType'
import { pickRandom } from './utils'

import departments from './departments.json'
import genders from './genders.json'

const fillUserData = (user: UserType) => {
  user.department = pickRandom(departments)
  user.isActive = Math.random() < 0.5
  user.gender = pickRandom(genders)
  user.phoneNo = '0905469542894'
  user.contribution = Math.floor(Math.random() * 10000) + 1
  return user
}

const getUsers = async () => {
  const response = await fetch('https://reqres.in/api/users?page=1').catch(err => console.log('error', err))
  if (!response?.ok) return []
  const users: { data: UserType[] } = await response?.json()
  const fillUsersData: UserType[] = users.data.map(fillUserData)
  return fillUsersData
}

export default getUsers
