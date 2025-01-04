'use client';
import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(5, 'Minimum 5 characters length')
        .required('Password is required'),
    username: yup
        .string('Enter your username')
        .required('username is required'),
});



const Register = () => {

    const router = useRouter()

    //register user
    const registerUser = async (user) => {
        try {
            const res = await fetch("/api/user", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(user),
            });
            // Throw error with status code in case Fetch API req failed
            if (!res.ok) {
                throw new Error('req failed');
            }

            const response = await res.json();
            // console.log('response', response)
            if (response?.success === true) toast.success('register successfully!');

            router.push("/login");

        } catch (error) {
            console.log(error);
        }
    }

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
            username: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            //alert(JSON.stringify(values, null, 2));
            registerUser(values);
        }

    });

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
                            id="username"
                            label="Username"
                            name='username'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder='User name'
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.username && Boolean(errors.username)}
                            helperText={touched.username && errors.username}
                        />

                        <Button fullWidth variant="contained" type='submit' sx={{ bgcolor: "#212121", '&:hover': { bgcolor: 'black' } }} >register</Button>

                    </Box>

                </Box>

            </Box>
            <Footer />
        </>
    )
}

export default Register
