import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
    return (
        <>
            <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress color="inherit" />
            </Box>
        </>
    )
}

export default Loader