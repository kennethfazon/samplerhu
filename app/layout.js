// app/layout.js
'use client';


import { AuthProvider } from "./Providers";
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../styles/theme'; // Import the custom theme
import '../styles/globals.css'; // Correct path if outside the app 
// In your _app.js or page.js, import slick styles:
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




export default function RootLayout({ children, session  }) {
  return (
    <html lang="en">
      <body>
    
        <ThemeProvider theme={theme}>
        <AuthProvider>
          {children}
        </AuthProvider>
          <CssBaseline /> {/* This provides a consistent baseline CSS reset */}
           {/* This will render the content of each page */}
        </ThemeProvider>
      </body>
    </html>
  );
}



// import { AuthProvider } from "./Providers";
// import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <AuthProvider>{children}</AuthProvider>
//       </body>
//     </html>
//   );
// }
