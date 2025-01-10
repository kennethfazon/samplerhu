// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await signIn("credentials", {
//         email,
//         password,
//         redirect: false,
//       });

//       if (res.error) {
//         setError("Invalid Credentials");
//         return;
//       }

//       router.replace("dashboard");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="grid place-items-center h-screen">
//       <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
//         <h1 className="text-xl font-bold my-4">Login</h1>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="text"
//             placeholder="Email"
//           />
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//           />
//           <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
//             Login
//           </button>
//           {error && (
//             <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
//               {error}
//             </div>
//           )}

//           <Link className="text-sm mt-3 text-right" href={"/register"}>
//             Don't have an account? <span className="underline">Register</span>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client"

import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  useTheme,
  useMediaQuery,
  Alert,
  Fade,
  Avatar,
  Grid,
  CircularProgress,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  LockOutlined,
} from '@mui/icons-material';
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  


  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: '100%',
          background: 'white',
          borderBottom: '1px solid',
          borderColor: 'divider',
          py: { xs: 2, sm: 3 },
          px: { xs: 2, sm: 3 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          component="h1"
          fontWeight="700"
          color="primary"
          sx={{
            lineHeight: 1.2,
          }}
        >
          Gubat Rural Health Unit
        </Typography>
        <Typography
          variant={isMobile ? 'subtitle2' : 'subtitle1'}
          color="text.secondary"
          sx={{ mt: 0.5 }}
        >
          and Birthing Home
        </Typography>
      </Box>

      {/* Login Content */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          py: { xs: 3, sm: 4 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={3} 
            justifyContent="center" 
            alignItems="center"
          >
            {/* Login form */}
            <Grid 
              item 
              xs={12} 
              md={isTablet ? 12 : 6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Fade in timeout={800}>
                <Paper
                  elevation={isMobile ? 2 : 24}
                  sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '450px' },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar
                      sx={{
                        width: { xs: 48, sm: 56 },
                        height: { xs: 48, sm: 56 },
                        mb: 2,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                      }}
                    >
                      <LockOutlined />
                    </Avatar>

                    <Typography
                      variant={isMobile ? 'h5' : 'h4'}
                      component="h2"
                      fontWeight="700"
                      sx={{
                        mb: 1,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        textAlign: 'center',
                      }}
                    >
                      Admin Portal
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                      sx={{ mb: 4 }}
                    >
                      Enter your credentials to access the dashboard
                    </Typography>

                    {error && (
                      <Alert 
                        severity="error" 
                        sx={{ 
                          width: '100%', 
                          mb: 3,
                          borderRadius: 2,
                        }}
                      >
                        {error}
                      </Alert>
                    )}

<form onSubmit={handleSubmit}
                      sx={{ 
                        width: '100%',
                        '& .MuiTextField-root': {
                          mb: 2,
                        }
                      }}
                    >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Username"
                        autoComplete="username"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          },
                        }}
                      />

                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                                size="large"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          mb: 4,
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          },
                        }}
                      />

                      <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        type="submit"
                        disabled={isLoading}
                        sx={{
                          py: 1.8,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                          '&:hover': {
                            background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                          },
                          position: 'relative',
                        }}
                      >
                        {isLoading ? (
                          <CircularProgress
                            size={24}
                            sx={{
                              color: 'white',
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              marginTop: '-12px',
                              marginLeft: '-12px',
                            }}
                          />
                        ) : (
                          'Sign In'
                        )}
                      </Button>
                    </form>
                  </Box>
                </Paper>
              </Fade>
            </Grid>

            {/* Image - Only shown on desktop */}
            {!isTablet && (
              <Grid 
                item 
                md={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src="/graphics/admingrphic.svg"
                  alt="Healthcare services"
                  sx={{
                    width: '100%',
                    maxWidth: '600px',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
