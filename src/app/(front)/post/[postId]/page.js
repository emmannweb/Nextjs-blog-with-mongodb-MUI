'use client';
import React from 'react'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import useSinglePost from '@/hooks/useSinglePost';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';




const SinglePost = ({ params }) => {
    const { postId } = params;

    const { singlePost, isLoading, isError } = useSinglePost(postId);
    if (isLoading) return <Loader />


    return (
        <>
            <Header />
            <Box sx={{ minHeight: 'calc(100vh - 59px)' }}>
                <Image
                    src={singlePost?.post?.url}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: '36vh',
                    }}
                    width={1280}
                    height={500}
                    alt={singlePost?.post?.title}
                />

                <Typography variant='h4' sx={{ textAlign: 'center', pt: 3, pb: 2 }}> {singlePost?.post?.title}</Typography>
                <Box sx={{ textAlign: 'justify', maxWidth: '50%', margin: 'auto', fontSize: '18px' }}>
                    {singlePost?.post?.description}
                </Box>

            </Box>

            <Footer />
        </>
    )
}

export default SinglePost