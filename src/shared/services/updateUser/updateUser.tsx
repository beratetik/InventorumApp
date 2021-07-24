import { UserType } from "../../types/UserType"

const updateUser = async (data: UserType) => {
  const response = await fetch(`https://reqres.in/api/users/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data)
  })
  const result = await response?.json()
  return result

}

export default updateUser
