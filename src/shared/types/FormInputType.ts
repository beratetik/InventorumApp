export type InputTypes = "text" | "checkbox" | "radio" | "select" | "number"

export type Options = {
  [key: string]: string;
}

export type FormInputType = {
  id?: string,
  type: InputTypes | string,
  label?: string,
  property?: string,
  name?: string,
  value?: string | undefined,
  placeholder?: string,
  checked?: boolean,
  required?: boolean,
  options?: Options,
  onChange?: (e: React.ChangeEvent<any>) => void,
  color?: string,
  size?: number,
  defaultValue?: string,
  defaultChecked?: boolean,
  pattern?: string,
  min?: number,
  max?: number,
  step?: number
}

export interface IFormInput {
  id?: string;
  type: InputTypes | string;
  label?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
}

export interface IFormInputRadio extends IFormInput {
  checked?: boolean;
  name?: string;
  options?: Options
}
