import React, { useReducer } from 'react'
import updateUser from '../../shared/services/updateUser'

import { FormInput } from './components'
import {
  FormWrapper,
  MultipleInputWrapper,
  ButtonWrapper,
  Button
} from './styles'

interface Props {
  fields: any[],
  data: any,
  cancel: () => void
}

type MultipleFieldProps = {
  field: any,
  data: any,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MultipleField: React.FC<MultipleFieldProps> = ({ field, data, onChange }) => (
  <MultipleInputWrapper>
    {field.map((item: any) => (
      <FormInput
        key={item.property}
        name={item.property}
        value={data[item.property]}
        {...{ onChange, ...item }}
      />
    ))}
  </MultipleInputWrapper>
)

const fieldMap = (field: any, data: any, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) => {
  if (field?.length > 1) {
    return <MultipleField key={field[0].property} {...{ field, data, onChange }} />
  }

  return (
    <FormInput
      key={field[0].property}
      {...field[0]}
      name={field[0].property}
      value={data[field[0].property]}
      {...{ onChange }}
    />
  )
}

const Form: React.FC<Props> = ({ fields, data, cancel }) => {
  const reducer = (prevState: any, newState: any) => ({ ...prevState, ...newState })
  const [formData, setFormData] = useReducer(reducer, data)

  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (e.target.type === 'checkbox') {
      setFormData({ [name]: !formData[name] })
      return
    }

    setFormData({ [name]: value })
  }, [formData])

  const cancelHandler = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    cancel();
  }, [cancel])

  const submitHandler = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    updateUser(formData).then(() => cancel())
  }, [formData, cancel])

  return (
    <FormWrapper>
      {fields.map(field => fieldMap(field, formData, onChange))}
      <ButtonWrapper>
        <Button onClick={cancelHandler} >Cancel</Button>
        <Button submit={true} onClick={submitHandler}>Save</Button>
      </ButtonWrapper>
    </FormWrapper>
  )
}

export default React.memo(Form,)
