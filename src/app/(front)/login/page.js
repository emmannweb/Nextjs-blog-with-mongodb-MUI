'use client';
import React, { useEffect } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Avatar, Box, Button, TextField } from '@mui/material';
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { signIn, useSession } from 'next-auth/react';
import { useSearchParams, useRouter } from 'next/navigation';


const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(5, 'Minimum 5 characters length')
        .required('Password is required'),
});



const Login = () => {

    const { data: session } = useSession();


    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
            error: null
        },
        validationSchema: validationSchema,
        onSubmit: async (values, actions) => {
            // alert(JSON.stringify(values, null, 2));
            const signInValue = await signIn('credentials',
                {
                    email: values.email,
                    password: values.password,
                    redirect: false,
                })
            setFieldValue('error', JSON.stringify(signInValue?.error))
        }

    });

    const params = useSearchParams()
    let callbackUrl = params.get('callbackUrl') || '/'
    const router = useRouter();

    useEffect(() => {
        if (session && session.user) {
            router.push(callbackUrl)
        }
    }, [callbackUrl, params, router, session])



    return (
        <>
            <Header />
            <Box
                sx={{
                    bgcolor: '#28282a',
                    minHeight: 'calc(100vh - 59px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                }}
            >
                <Box onSubmit={handleSubmit} component="form">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: 'center',
                            bgcolor: '#ffffff10',
                            backdropFilter: 'blur(12px)',
                            p: '36px',
                            borderRadius: '10px'
                        }}
                    >
                        <Avatar sx={{ mb: 3, bgcolor: '#212121' }}>
                            <LockClockOutlined />
                        </Avatar>

                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'rgb(231, 235, 240)',
                                },
                                "& .MuiInputLabel-root": {
                                    color: 'rgb(231, 235, 240)'
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="email"
                            label="E-mail"
                            name='email'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder='E-mail'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}

                        />

                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'rgb(231, 235, 240)',
                                },
                                "& .MuiInputLabel-root": {
                                    color: 'rgb(231, 235, 240)'
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="password"
                            label="Password"
                            name='password'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder='Password'
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />

                        <Button fullWidth variant="contained" type='submit' sx={{ bgcolor: "#212121", '&:hover': { bgcolor: 'black' } }} >Log In</Button>

                        {
                            JSON.parse(values.error) === "CredentialsSignin" &&
                            <div className="error-wrapper">
                                <p style={{ color: '#ccc' }}> *Invalid email or password</p>
                            </div>
                        }

                    </Box>

                </Box>

            </Box>
            <Footer />
        </>
    )
}

export default Login