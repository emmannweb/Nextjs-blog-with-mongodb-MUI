"use client";
import React from 'react'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import { Box, Container, Grid } from '@mui/material';
//import data from '@/lib/data';
import PostCard from '@/components/PostCard';
import useAllPosts from '@/hooks/useAllPosts';
import Loader from '@/components/Loader';

const Blog = () => {

    // const { posts } = data;
    const { data, isError, isLoading } = useAllPosts();
    if (isError) return <><h3>Failed to load!</h3></>
    if (isLoading) return <Loader />
    return (
        <>
            <Header />
            <Box
                sx={{
                    pt: 18,
                    bgcolor: '#28282a',
                    minHeight: 'calc(100vh - 62px)'
                }}
            >
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            data?.posts?.length > 0 ? data?.posts.map((post, id) => (
                                <PostCard post={post} key={id} />
                            )) :
                                <> <h3>No post found!</h3></>
                        }
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Blog
