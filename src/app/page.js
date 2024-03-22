import Sidebar from "@/components/Sidebar/Sidebar";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"90vh"}
        sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
      >
        <Typography variant="h5">Select a user</Typography>
      </Box>
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
        <Sidebar />
      </Box>
    </main>
  );
}
