import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Box component='footer' sx={{ bgcolor: "#212121" }}>
                <Container>
                    <Divider />
                    <Typography sx={{ color: "#fafafa", p: 2, fontWeight: 300, textAlign: "center", fontSize: 16 }} variant='h6' component='p'>@Blog App, All Right reserved</Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer