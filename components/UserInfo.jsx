// "use client";

// // import { signOut } from "next-auth/react";
// // import { useSession } from "next-auth/react";

// // export default function UserInfo() {
// //   const { data: session } = useSession();

// //   return (
// //     <div className="grid place-items-center h-screen">
// //       <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
// //         <div>
// //           Name: <span className="font-bold">{session?.user?.name}</span>
// //         </div>
// //         <div>
// //           Email: <span className="font-bold">{session?.user?.email}</span>
// //         </div>
// //         <button
// //           onClick={() => signOut()}
// //           className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
// //         >
// //           Log Out
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   MenuItem,
//   IconButton,
//   InputAdornment,
//   CircularProgress,
//   Alert,
// } from '@mui/material';
// import {
//   AddPhotoAlternate,
//   Event as EventIcon,
//   AccessTime as TimeIcon,
//   LocationOn as LocationIcon,
//   People as PeopleIcon,
//   Category as CategoryIcon,
// } from '@mui/icons-material';
// import { styled } from '@mui/material/styles';
// import AdminSidebar from './Navbar';

// import { signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";


// const CATEGORIES = [
//   'Health Screening',
//   'Vaccination',
//   'Medical Mission',
//   'Health Education',
//   'Blood Donation',
//   'Dental Service',
//   'Eye Care',
//   'Mental Health',
// ];

// // Styled components
// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   borderRadius: theme.spacing(2),
//   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// }));

// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   whiteSpace: 'nowrap',
//   width: 1,
// });

// export default function UserInfo(){
//   const { data: session } = useSession();
//   const [formData, setFormData] = useState({
//     title: '',
//     date: '',
//     startTime: '',
//     endTime: '',
//     location: '',
//     category: '',
//     participants: '',
//     description: '',
//   });
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   const formatTime = (time) => {
//     const [hours, minutes] = time.split(':');
//     const date = new Date();
//     date.setHours(hours, minutes);
  
//     return date.toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true,
//     });
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
  
//     // Check if startTime and endTime are populated before formatting
//     if (!formData.startTime || !formData.endTime) {
//       setError('Start Time and End Time are required.');
//       setIsLoading(false);
//       return;
//     }
  
//     try {
//       // Format start and end times only if they are provided
//       const formattedStartTime = formatTime(formData.startTime);
//       const formattedEndTime = formatTime(formData.endTime);
  
//       const formDataToSubmit = {
//         title: formData.title,
//         date: formData.date,
//         startTime: formattedStartTime,  // Formatted start time
//         endTime: formattedEndTime,      // Formatted end time
//         location: formData.location,
//         category: formData.category,
//         participants: formData.participants,
//         description: formData.description,
//         image: imagePreview, // Storing base64 image or image URL here
//       };
  
//       const response = await fetch('/api/createEvent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formDataToSubmit),
//       });
  
//       const result = await response.json();
  
//       if (response.ok) {
//         // Reset form state after successful submission
//         setFormData({
//           title: '',
//           date: '',
//           startTime: '',
//           endTime: '',
//           location: '',
//           category: '',
//           participants: '',
//           description: '',
//         });
//         setImage(null);
//         setImagePreview('');
//       } else {
//         setError(result.error || 'Failed to submit event');
//       }
//     } catch (err) {
//       setError('Failed to submit event');
//     } finally {
//       setIsLoading(false);
//     }
//   };
  
  
  
//   return (
//     <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50', py: 4 }}>
//              <div className="grid place-items-center h-screen">
//        <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
//         <div>
//           Name: <span className="font-bold">{session?.user?.name}</span>
//          </div>
//          <div>
//            Email: <span className="font-bold">{session?.user?.email}</span>
//          </div>
//          <button
//            onClick={() => signOut()}
//            className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
//          >
//            Log Out
//          </button>
//        </div>
//      </div>
//       <Container maxWidth="lg">
//         <Box sx={{ textAlign: 'center', mb: 4 }}>
//           <Typography variant="h4" component="h1" fontWeight="bold" color="primary" gutterBottom>
//             Create Health Event
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary">
//             Fill in the details to publish a new health event
//           </Typography>
//         </Box>

//         {error && (
//           <Alert severity="error" sx={{ mb: 3 }}>
//             {error}
//           </Alert>
//         )}

//         <StyledPaper>
//           <Box component="form" onSubmit={handleSubmit}>
//             <Grid container spacing={4}>
//               {/* Left Column */}
//               <Grid item xs={12} md={6}>
//                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
//                   <TextField
//                     fullWidth
//                     label="Event Title"
//                     name="title"
//                     value={formData.title}
//                     onChange={handleInputChange}
//                     required
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <EventIcon color="action" />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />

//                   <TextField
//                     fullWidth
//                     select
//                     label="Category"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleInputChange}
//                     required
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <CategoryIcon color="action" />
//                         </InputAdornment>
//                       ),
//                     }}
//                   >
//                     {CATEGORIES.map((option) => (
//                       <MenuItem key={option} value={option}>
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </TextField>

//                   <TextField
//                     fullWidth
//                     label="Location"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleInputChange}
//                     required
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <LocationIcon color="action" />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />

//                   <TextField
//                     fullWidth
//                     label="Number of Participants"
//                     name="participants"
//                     value={formData.participants}
//                     onChange={handleInputChange}
//                     placeholder="e.g., 150 slots"
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <PeopleIcon color="action" />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                 </Box>
//               </Grid>

//               {/* Right Column */}
//               <Grid item xs={12} md={6}>
//                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
//                   <TextField
//                     fullWidth
//                     label="Date"
//                     name="date"
//                     type="date"
//                     value={formData.date}
//                     onChange={handleInputChange}
//                     required
//                     InputLabelProps={{ shrink: true }}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <EventIcon color="action" />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />

//                   <Grid container spacing={2}>
//                     <Grid item xs={6}>
//                       <TextField
//                         fullWidth
//                         label="Start Time"
//                         name="startTime"
//                         type="time"
//                         value={formData.startTime}
//                         onChange={handleInputChange}
//                         required
//                         InputLabelProps={{ shrink: true }}
//                         InputProps={{
//                           startAdornment: (
//                             <InputAdornment position="start">
//                               <TimeIcon color="action" />
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={6}>
//                       <TextField
//                         fullWidth
//                         label="End Time"
//                         name="endTime"
//                         type="time"
//                         value={formData.endTime}
//                         onChange={handleInputChange}
//                         required
//                         InputLabelProps={{ shrink: true }}
//                         InputProps={{
//                           startAdornment: (
//                             <InputAdornment position="start">
//                               <TimeIcon color="action" />
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                     </Grid>
//                   </Grid>

//                   <TextField
//                     fullWidth
//                     label="Description"
//                     name="description"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                     multiline
//                     rows={4}
//                     required
//                   />
//                 </Box>
//               </Grid>
//             </Grid>

//             {/* Image Upload Section */}
//             <Box sx={{ mt: 4, mb: 3 }}>
//               <Typography variant="subtitle2" gutterBottom>
//                 Event Image
//               </Typography>
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <Button
//                   component="label"
//                   variant="outlined"
//                   startIcon={<AddPhotoAlternate />}
//                 >
//                   Upload Image
//                   <VisuallyHiddenInput
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                   />
//                 </Button>
//                 {imagePreview && (
//                   <Box
//                     component="img"
//                     src={imagePreview}
//                     alt="Preview"
//                     sx={{
//                       height: 80,
//                       width: 80,
//                       objectFit: 'cover',
//                       borderRadius: 1,
//                     }}
//                   />
//                 )}
//               </Box>
//             </Box>

//             {/* Submit Button */}
//             <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
//               <Button
//                 variant="contained"
//                 size="large"
//                 type="submit"
//                 disabled={isLoading}
//                 sx={{ minWidth: 200 }}
//               >
//                 {isLoading ? (
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                     <CircularProgress size={20} color="inherit" />
//                     <span>Saving...</span>
//                   </Box>
//                 ) : (
//                   'Publish Event'
//                 )}
//               </Button>
//             </Box>
//           </Box>
//         </StyledPaper>
//       </Container>
//     </Box>
//   );
// }

'use client'
import React from 'react';
import Layout from '../components/Layout';
import { Grid, Card, CardContent, Typography, Box, IconButton, Divider, Button } from '@mui/material';
import { Article, AddCircle, PendingActions } from '@mui/icons-material';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";


const UserInfo = () => {
  const { data: session } = useSession();
  return (
    <>
    
    <Layout>
       
      {/* Main Content Section */}
      <Grid container spacing={3}>
        {/* Total Blogs Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, bgcolor: '#00796b', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Total Blogs
                </Typography>
                <IconButton color="inherit">
                  <Article />
                </IconButton>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                25
              </Typography>
              <Typography variant="body2">Total blogs published</Typography>
            </CardContent>
          </Card>
        </Grid>

        
        {/* Blog Categories Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, bgcolor: '#9b59b6', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Blog Categories
                </Typography>
                <IconButton color="inherit">
                  <Article />
                </IconButton>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                8
              </Typography>
              <Typography variant="body2">Different blog categories available</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Add New Blog Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, bgcolor: '#2980b9', color: 'white' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Add New Blog
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: '#00796b', color: 'white' }}
                startIcon={<AddCircle />}
              >
                Add Blog
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Blogs Section */}
        <Grid item xs={12}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Recent Blogs
              </Typography>
              <Divider sx={{ my: 2 }} />
              
              {/* Blog 1 */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    How to Create a React App
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#7f8c8d' }}>
                    Published: 1 day ago
                  </Typography>
                </Box>
                <Button variant="outlined" size="small" sx={{ color: '#00796b' }}>
                  View
                </Button>
              </Box>

              {/* Blog 2 */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Top 10 JavaScript Libraries in 2025
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#7f8c8d' }}>
                    Published: 2 days ago
                  </Typography>
                </Box>
                <Button variant="outlined" size="small" sx={{ color: '#00796b' }}>
                  View
                </Button>
              </Box>

              {/* Blog 3 */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    CSS Grid vs Flexbox: A Comparison
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#7f8c8d' }}>
                    Published: 4 days ago
                  </Typography>
                </Box>
                <Button variant="outlined" size="small" sx={{ color: '#00796b' }}>
                  View
                </Button>
              </Box>
            </CardContent>
          </Card>
          <div className="grid place-items-center h-screen">
    <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
      <div>
        Name: <span className="font-bold">{session?.user?.name}</span>
       </div>
       <div>
        Email: <span className="font-bold">{session?.user?.email}</span>
      </div>
       <button
         onClick={() => signOut()}            className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
      >
        Log Out
      </button>       
      </div>
  </div>
        </Grid>
      </Grid>
    </Layout>
    </>
  );
};

export default UserInfo;
