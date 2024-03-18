import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import LockIcon from '@mui/icons-material/Lock';


const drawerWidth = 240;
const navItems = [
    { page: 'Home', link: '/' },
    { page: 'Blog', link: '/blog' },
    { page: 'Register', link: '/register' },
    { page: 'Login', link: '/login' }
];

function Header(props) {
    const { data: session } = useSession();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    //mobile drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Coding Academy
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, id) => (
                    <ListItem key={id} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: 'center' }}
                            button='true'
                            component={Link}
                            to={`${item.link}`}
                        >
                            <ListItemText primary={item.page} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    //logout
    const logoutHandler = () => {
        signOut({ callbackUrl: '/login' })
    }



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                component="nav"
                elevation={0}
                position='absolute'
                sx={{
                    backgroundColor: '#ffffff10',
                    backdropFilter: 'blur(12px)'
                }}

            >
                <Container>
                    <Toolbar sx={{ pl: "0!important" }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textTransform: 'uppercase' }}
                        >
                            Coding Academy
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item, id) => (
                                <Button key={id} sx={{ color: '#fff' }} startIcon={<LockIcon sx={{ mr: 0, display: item.link === '/login' ? 'block' : 'none' }} />}>
                                    <Link style={{ textDecoration: 'none', color: '#fff' }} href={item.link}>{item.page}</Link>
                                </Button>
                            ))}

                            {
                                session && session?.user ?
                                    <>
                                        <Button sx={{ color: '#fff' }}>
                                            <Link style={{ textDecoration: 'none', color: '#fff' }} href='/admin/dashboard'>Dashboard</Link>
                                        </Button>
                                        <Button sx={{ color: '#fff' }} onClick={logoutHandler}>
                                            Log Out
                                        </Button>
                                    </>
                                    : ''
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* mobile nav */}
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;
