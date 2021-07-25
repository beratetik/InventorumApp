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

const getValue = (data: any, field: any) => {
  const defaultValue = data[field.property]
  return Array.isArray(defaultValue) ? defaultValue[0] : defaultValue
}

const MultipleField: React.FC<MultipleFieldProps> = ({ field, data, onChange }) => (
  <MultipleInputWrapper>
    {field.map((item: any) => (
      <FormInput
        {...{ onChange, ...item }}
        key={item.property}
        name={item.property}
        value={getValue(data, item)}
      />
    )
    )}
  </MultipleInputWrapper>
)

const fieldMap = (field: any, data: any, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) => {
  if (field?.length > 1) {
    return <MultipleField key={field[0].property} {...{ field, data, onChange }} />
  }

  return (
    <FormInput
      {...{ onChange, ...field[0] }}
      key={field[0].property}
      name={field[0].property}
      value={getValue(data, field[0])}
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

  const submitHandler = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    updateUser(formData).then(() => cancel())
  }, [formData, cancel])

  return (
    <FormWrapper onSubmit={submitHandler}>
      {fields.map(field => fieldMap(field, formData, onChange))}
      <ButtonWrapper>
        <Button onClick={cancelHandler} >Cancel</Button>
        <Button submit={true} type="submit">Save</Button>
      </ButtonWrapper>
    </FormWrapper>
  )
}

export default Form
