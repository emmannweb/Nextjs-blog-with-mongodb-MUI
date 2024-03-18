'use client';
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useSWR from 'swr';
import Loader from '@/components/Loader';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const AdmUsers = () => {

    const { data, error, isLoading } = useSWR('/api/user', fetcher);
    if (error) return <div>failed to load</div>
    if (isLoading) return <Loader />


    const columns = [

        {
            field: '_id',
            headerName: 'User ID',
            width: 150,
            editable: true,
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 150,
        },
        {
            field: 'email',
            headerName: 'E-mail',
            width: 150,
        },

        {
            field: "Actions",
            width: 100,
            renderCell: (value) => (
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "170px" }}>
                    <a href={`/admin/user/edit/${value.row._id}`}>
                        <IconButton aria-label="edit" >
                            <EditIcon sx={{ color: '#1976d2' }} />
                        </IconButton>
                    </a>
                    <IconButton aria-label="delete" >
                        <DeleteIcon sx={{ color: 'red' }} />
                    </IconButton>

                </Box>
            )
        }

    ];

    const allUsers = data?.users?.length > 0 ? data?.users : [];
    return (
        <>
            <AdminLayout>
                <h1> Users</h1>
                <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
                    <Button variant='contained' color="success" startIcon={<AddIcon />}><Link style={{ color: 'white', textDecoration: 'none' }} href='/admin/users/create'>Create User</Link> </Button>
                </Box>
                <Box sx={{ height: 450, width: '100%' }}>
                    <DataGrid
                        getRowId={(row) => row._id}
                        rows={allUsers}
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

export default AdmUsers
