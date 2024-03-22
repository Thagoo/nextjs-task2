import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Grid, Paper } from "@mui/material";
import { UserProvider } from "@/context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Banao Task 2",
  description: "Internship task round 2",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <UserProvider>
              <Navbar />
              <Paper
                variant="outlined"
                sx={{
                  backgroundColor: "#f8f9fb",
                  height: "90vh",
                  overflow: "hidden",
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    md={5}
                    lg={5}
                    sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                  >
                    <Sidebar />
                  </Grid>
                  <Grid item xs={12} md={7} lg={7}>
                    {children}
                  </Grid>
                </Grid>
              </Paper>
            </UserProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
