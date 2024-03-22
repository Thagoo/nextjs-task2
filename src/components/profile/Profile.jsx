import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";

export default function Profile({ userData }) {
  return (
    <div>
      <Box display="flex" flexDirection={"column"} py={4} pl={14}>
        <Box display="flex" alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src={userData.avatar}
            sx={{ width: 140, height: 140 }}
          />
          <Box>
            <Typography variant="h4" ml={4}>
              {userData.profile.firstName} {userData.profile.lastName}
            </Typography>{" "}
            <Typography
              variant="p"
              ml={4}
              mt={8}
              sx={{ textTransform: "uppercase" }}
            >
              {userData.jobTitle}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Grid container px={4}>
          <Grid item xs={2}>
            {" "}
            <InfoIcon />
          </Grid>

          <Grid item xs={10} display={"flex"} flexDirection={"column"}>
            <Typography variant="p">@{userData.profile.username}</Typography>
            <Typography variant="p" sx={{ color: "text.secondary" }}>
              username
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle1" mt={2}>
              {userData.Bio}
            </Typography>
            <Typography variant="p" sx={{ color: "text.secondary" }}>
              Bio
            </Typography>
            <Divider sx={{ my: 1 }} />

            <Typography variant="subtitle2" mt={2}>
              {userData.profile.email}
            </Typography>
            <Typography variant="p" sx={{ color: "text.secondary" }}>
              Email
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
