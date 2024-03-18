'use client';
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';




const validationSchema = yup.object({
    title: yup
        .string('Enter your title')
        .required('title is required'),
    description: yup
        .string('Enter your description')
        .required('description is required'),
    url: yup
        .string('Enter post url')
        .required('url is required'),
});


const AdmCreatePost = () => {

    const router = useRouter();


    // create post
    const createPost = async (post) => {
        try {
            const res = await fetch("/api/post", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(post),
            });
            // Throw error with status code in case Fetch API req failed
            if (!res.ok) {
                throw new Error('req failed');
            }

            const response = await res.json();
            // console.log('response', response)
            if (response?.success === true) toast.success('post created succcessfully!');

            router.push("/admin/dashboard");

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
            title: '',
            description: '',
            url: ''
        },
        validationSchema: validationSchema,
        // enableReinitialize: true,
        onSubmit: (values, actions) => {
            // alert(JSON.stringify(values, null, 2));
            createPost(values);
        }

    });


    return (
        <>
            <AdminLayout>
                <h1>Create Post</h1>
                <Box sx={{ margin: 'auto', width: '80%' }} >
                    <Box onSubmit={handleSubmit} component="form" sx={{ width: '100%' }} >
                        <Box sx={{
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
                                }}
                                fullWidth
                                id="title"
                                label="Post title"
                                name='title'
                                InputLabelProps={{
                                    shrink: true,
                                }}

                                placeholder="Post title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.title && Boolean(errors.title)}
                                helperText={touched.title && errors.title}
                            />

                            <TextField
                                sx={{
                                    mb: 3,
                                }}
                                fullWidth
                                id="description"
                                label="Post description"
                                name='description'
                                InputLabelProps={{
                                    shrink: true,
                                }}

                                placeholder="Post description"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.description && Boolean(errors.description)}
                                helperText={touched.description && errors.description}
                            />

                            <TextField
                                sx={{
                                    mb: 3,
                                }}
                                fullWidth
                                id="url"
                                label="Post url"
                                name='url'
                                InputLabelProps={{
                                    shrink: true,
                                }}

                                placeholder="Post url"
                                value={values.url}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.url && Boolean(errors.url)}
                                helperText={touched.url && errors.url}
                            />
                            <Button fullWidth variant="contained" type='submit' sx={{ bgcolor: "#212121", '&:hover': { bgcolor: 'black' } }} >Create post</Button>

                        </Box>

                    </Box>
                </Box>
            </AdminLayout>
        </>
    )
}

export default AdmCreatePost