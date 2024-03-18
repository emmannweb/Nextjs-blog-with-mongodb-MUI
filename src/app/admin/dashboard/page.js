'use client';
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, IconButton } from '@mui/material';
import Loader from '@/components/Loader';
import useAllPosts from '@/hooks/useAllPosts';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { mutate } from "swr";



const Dashboard = () => {

    const router = useRouter()
    const { data, isError, isLoading } = useAllPosts();
    if (isLoading) return <Loader />

    //delete post
    const deletePost = async (postId) => {
        try {
            if (window.confirm(`You really want to delete post ID: "${postId}"`)) {
                const res = await fetch(`/api/post/${postId}`, {
                    method: "DELETE",
                    headers: {
                        Accept: 'application/json',
                        "Content-Type": 'application/json',
                    },
                });
                // Throw error with status code in case Fetch API req failed
                if (!res.ok) {
                    throw new Error('req failed');
                }

                const response = await res.json();
               // console.log('response', response)
                if (response?.success === true) toast.success('post deleted');
                //mutate(`/api/post/${postId}`, data, false); // Update the local data without a revalidation
                router.push("/admin/dashboard");
            }

        } catch (error) {
            console.log(error);
        }
    }

    const columns = [

        {
            field: '_id',
            headerName: 'Post ID',
            width: 150,
            editable: true,
        },
        {
            field: 'title',
            headerName: 'Post name',
            width: 150,
        },
        {
            field: 'url',
            headerName: 'Image',
            width: 150,
            renderCell: (values => (
                <img style={{ width: '80px', }} src={values.row.url} alt="" />
            ))
        },
        {
            field: "Actions",
            width: 100,
            renderCell: (value) => (
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "170px" }}>
                    <a href={`/admin/post/${value.row._id}`}>
                        <IconButton aria-label="edit" >
                            <EditIcon sx={{ color: '#1976d2' }} />
                        </IconButton>
                    </a>
                    <IconButton aria-label="delete" onClick={() => deletePost(value.row._id)} >
                        <DeleteIcon sx={{ color: 'red' }} />
                    </IconButton>

                </Box>
            )
        }
    ];

    const allPosts = data?.posts?.length > 0 ? data?.posts : [];


    return (
        <>
            <AdminLayout>
                <h1>Posts</h1>
                <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
                    <Button variant='contained' color="success" startIcon={<AddIcon />}><Link style={{ color: 'white', textDecoration: 'none' }} href='/admin/post/create'>Create Post</Link> </Button>
                </Box>
                <Box sx={{ height: 450, width: '100%' }}>
                    <DataGrid
                        getRowId={(row) => row._id}
                        rows={allPosts}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
                </Box>

            </AdminLayout>
        </>
    )
}

export default Dashboard