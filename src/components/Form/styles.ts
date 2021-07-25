import React from 'react'
import styled, { css } from 'styled-components'
import { palette } from '../../shared/config/styles'

type ButtonProps = {
  submit?: boolean
}

export const MultipleInputWrapper = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between;
  column-gap: 20px;
`

export const FormWrapper = styled.form<{ onSubmit: React.FormEventHandler }>`
  padding: 20px 30px;
  border-bottom: 1px solid ${palette.innerBorder};
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const submitButtonStyles = css`
  background: ${palette.green};
  color: ${palette.white};
  border: 1px solid ${palette.green};
`

const defaultButtonStyles = css`
  background: transparent;
  color: ${palette.gray2};
  border: 1px solid ${palette.gray};
`

export const Button = styled.button<ButtonProps>`
  ${({ submit }) => submit ? submitButtonStyles : defaultButtonStyles}
  cursor: pointer;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-family: Roboto;

  &:first-of-type {
    margin-right: 10px;
  }
`
