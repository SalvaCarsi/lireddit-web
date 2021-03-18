import React, { InputHTMLAttributes } from 'react'
import { useField } from 'formik'
import { FormControl, FormLabel, Input, FormErrorMessage, FormHelperText } from '@chakra-ui/react'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & { name: string; label: string }

export const InputField: React.FC<InputFieldProps> = ({ label, size: _, ...props }) => {
  const [field, { error }] = useField(props)
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
      <Input {...field} {...props} id={field.name} />
      {error ? <FormErrorMessage>{form.errors.name}</FormErrorMessage> : null}
    </FormControl>
  )
}