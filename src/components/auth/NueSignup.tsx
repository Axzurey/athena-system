import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Input, propNames, Spacer } from '@chakra-ui/react';
import axios from 'axios';
import {Field, Form, Formik} from 'formik';
import { credentials } from '../../auth/global';
import { userSignupSchema } from '../../auth/authSchemas';
import { attemptRegister } from '../../auth/account';

export default function NueSignup() {
    return (
    <Box>
        <Formik
            validationSchema={userSignupSchema}
            initialValues={{
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            onSubmit={ async (values, actions) => {
                if (values.password !== values.confirmPassword) {
                    actions.setFieldError('confirmPassword', 'passwords do not match')
                }
                let [isOk, msg, pointOfError] = await attemptRegister(values);
                
                if (isOk) {

                }
                else {
                    actions.setFieldError(pointOfError, msg)
                }

            }}
        >
            {(props: any) => (
                <Form>
                    <Field name='email'>
                        {
                            (x: {field: any, form: any}) => (
                                <FormControl isInvalid={x.form.errors.email}>
                                    <FormLabel>email</FormLabel>
                                    <Input {...x.field} placeholder='input email'></Input>
                                    <FormErrorMessage>{x.form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )
                        }
                    </Field>
                    <Spacer height={'5vh'}/>
                    <Field name='username'>
                        {
                            (x: {field: any, form: any}) => (
                                <FormControl isInvalid={x.form.errors.username}>
                                    <FormLabel>username</FormLabel>
                                    <Input {...x.field} placeholder='input username'></Input>
                                    <FormErrorMessage>{x.form.errors.username}</FormErrorMessage>
                                </FormControl>
                            )
                        }
                    </Field>
                    <Spacer height={'5vh'}/>
                    <Field name='password'>
                        {
                            (x: {field: any, form: any}) => (
                                <FormControl isInvalid={x.form.errors.password}>
                                    <FormLabel>password</FormLabel>
                                    <Input {...x.field} placeholder='input password'></Input>
                                    <FormErrorMessage>{x.form.errors.password}</FormErrorMessage>
                                </FormControl>
                            )
                        }
                    </Field>
                    <Spacer height={'5vh'}/>
                    <Field name='confirmPassword'>
                        {
                            (x: {field: any, form: any}) => (
                                <FormControl isInvalid={x.form.errors.confirmPassword}>
                                    <FormLabel>confirm password</FormLabel>
                                    <Input {...x.field} placeholder='confirm password'></Input>
                                    <FormErrorMessage>{x.form.errors.confirmPassword}</FormErrorMessage>
                                </FormControl>
                            )
                        }
                    </Field>
                    <Spacer height={'15vh'}/>
                    <Center>
                        <Button type='submit' isLoading={props.isSubmitting}>Register</Button>
                    </Center>
                </Form>
            )}
        </Formik>
    </Box>
    )
}