'use client';

import { 
    AppBar, 
    Toolbar, 
    Button, 
    Typography, 
    IconButton, 
    Drawer, 
    List, 
    ListItem, 
    ListItemText,
    ListItemIcon, 
    Box,
    useScrollTrigger,
    Container,
    useTheme,
    useMediaQuery,
    Fade
} from '@mui/material';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ContactsIcon from '@mui/icons-material/Contacts';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [titleSize, setTitleSize] = useState('1rem');
    const theme = useTheme();
    const pathname = usePathname();
    
    const isXSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));
    const isMedium = useMediaQuery(theme.breakpoints.down('lg'));

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    // Dynamic title size adjustment
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 360) {
                setTitleSize('0.7rem');
            } else if (width < 600) {
                setTitleSize('0.8rem');
            } else if (width < 900) {
                setTitleSize('0.9rem');
            } else {
                setTitleSize('1rem');
            }
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavClick = (e, path) => {
        e.preventDefault();
        
        if (path === '/') {
            if (pathname !== '/') {
                window.location.href = '/';
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            if (pathname !== '/') {
                // Navigate to home page with hash
                window.location.href = `/#${path.replace('/', '')}`;
            } else {
                const element = document.getElementById(path.replace('/', ''));
                if (element) {
                    const headerOffset = isXSmall ? 56 : isSmall ? 64 : 72;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }
        
        if (drawerOpen) setDrawerOpen(false);
    };

    const menuItems = [
        { text: 'Home', link: '/', icon: <HomeIcon /> },
        { text: 'About Us', link: '/about', icon: <InfoIcon /> },
        { text: 'Services', link: '/services', icon: <MedicalServicesIcon /> },
        { text: 'Contact', link: '/contact', icon: <ContactsIcon /> }
    ];

    return (
        <>
            <AppBar
                position="fixed"
                elevation={trigger ? 4 : 0}
                sx={{
                    backgroundColor: trigger ? 'white' : 'transparent',
                    transition: theme.transitions.create(['background-color', 'box-shadow'], {
                        duration: theme.transitions.duration.standard,
                    }),
                }}
            >
                <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
                    <Toolbar
                        sx={{
                            justifyContent: 'space-between',
                            minHeight: { xs: '56px', sm: '64px', md: '72px' },
                            padding: { xs: '0.5rem', sm: '0.75rem', md: '1rem' },
                            gap: { xs: 1, sm: 2 },
                        }}
                    >
                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            flex: 1,
                            gap: { xs: 1, sm: 2 }
                        }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={() => setDrawerOpen(true)}
                                sx={{
                                    display: { md: 'none' },
                                    color: 'black',
                                    p: { xs: 0.5, sm: 1 },
                                }}
                            >
                                <MenuIcon />
                            </IconButton>

                            <Box
                                component="img"
                                src="/home_imgs/rhulogo.svg"
                                alt="RHU Logo"
                                sx={{
                                    height: { xs: '35px', sm: '40px', md: '50px' },
                                    width: 'auto',
                                    flexShrink: 0,
                                }}
                            />

                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    color: 'black',
                                    fontSize: titleSize,
                                    fontWeight: 600,
                                    flexShrink: 1,
                                }}
                            >
                                Gubat Rural Health Unit
                            </Typography>

                            {!isSmall && (
                                <Box sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: { md: '15px', lg: '30px' },
                                    ml: { md: 2, lg: 4 },
                                    flexWrap: 'nowrap',
                                }}>
                                    {menuItems.map((item) => (
                                        <Button
                                            key={item.text}
                                            onClick={(e) => handleNavClick(e, item.link)}
                                            sx={{
                                                color: 'black',
                                                px: { md: 1, lg: 2 },
                                                py: 1,
                                                minWidth: 'auto',
                                                fontSize: { md: '0.875rem', lg: '1rem' },
                                                whiteSpace: 'nowrap',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                                },
                                            }}
                                        >
                                            {item.text}
                                        </Button>
                                    ))}
                                </Box>
                            )}
                        </Box>

                        <Box sx={{ flexShrink: 0 }}>
                            <Fade in={true}>
                                <IconButton
                                    component={Link}
                                    href="/login"
                                    sx={{
                                        color: 'black',
                                        p: { xs: 0.5, sm: 1 },
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                        },
                                    }}
                                >
                                    <AdminPanelSettingsIcon />
                                </IconButton>
                            </Fade>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                variant="temporary"
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        width: { xs: '240px', sm: '280px' },
                        backgroundColor: 'white',
                    },
                }}
            >
                <Box sx={{ 
                    p: { xs: 1.5, sm: 2 }, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="h6" sx={{ 
                        color: 'black',
                        fontSize: { xs: '1rem', sm: '1.25rem' }
                    }}>
                        Menu
                    </Typography>
                    <IconButton 
                        onClick={() => setDrawerOpen(false)}
                        sx={{ p: { xs: 0.5, sm: 1 } }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                
                <List sx={{ p: 0 }}>
                    {menuItems.map((item) => (
                        <ListItem 
                            key={item.text} 
                            component="button"
                            onClick={(e) => handleNavClick(e, item.link)}
                            sx={{
                                py: { xs: 1.5, sm: 2 },
                                px: { xs: 2, sm: 3 },
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                },
                            }}
                        >
                            <ListItemIcon sx={{ 
                                color: 'black',
                                minWidth: { xs: '40px', sm: '48px' }
                            }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText 
                                primary={item.text}
                                primaryTypographyProps={{
                                    sx: {
                                        color: 'black',
                                        fontSize: { xs: '0.875rem', sm: '1rem' }
                                    }
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Toolbar sx={{ 
                minHeight: { 
                    xs: '56px !important', 
                    sm: '64px !important', 
                    md: '72px !important' 
                } 
            }} />
        </>
    );
}