import React from 'react'
import { useMutation } from 'urql'
import { Formik, Form } from 'formik'
import { FormControl, FormLabel, Input, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import { Wrapper } from '../components/Wrapper'
import { InputField } from '../components/InputField'
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

interface registerProps {}

const REGISTER_MUTATION = `mutation Register($username: String!, $password: String!) {
  register(options:{username: $username, password: $password} ) {
    errors{
      field,
      message,
    },
    user {
      id,
      username,
    }
  }
}`

export const Register: React.FC<registerProps> = ({}) => {
  const [_, register] = useMutation(REGISTER_MUTATION)

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          return register(values)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="username" placeholder="username" label="Username" />
            <Box mt={4}>
              <InputField name="password" placeholder="password" label="Password" type="password" />
            </Box>
            <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">
              register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default Register
