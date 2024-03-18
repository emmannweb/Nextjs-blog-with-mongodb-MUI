import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function PostCard({ post }) {
    return (
        <>
            <Grid item xs={2} sm={4} md={4} >
                <Item>
                    <Image
                        src={post?.url}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        width={500}
                        height={400}
                        alt={post?.title}
                    />
                    <Box sx={{ p: 2 }}>
                        <Typography variant='h6' component='h2' fontSize={16} sx={{ fontWeight: 'bold' }}>
                            {post?.title}
                        </Typography>
                        <Box sx={{ pb: 3 }}>
                            {post?.description?.substring(0, 50) + '...'}
                        </Box>
                        <Button variant="outlined"><Link href={`/post/${post?._id}`} style={{ textDecoration: 'none' }}> Read more</Link></Button>
                    </Box>
                </Item>
            </Grid>
        </>
    );
}


