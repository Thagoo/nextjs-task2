import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";

export default function Profile({ userData }) {
  return (
    <div>
      <Container sx={{ pt: 8 }}>
        <Grid container>
          <Grid
            item
            xs={6}
            md={5}
            display={"flex"}
            justifyContent={"end"}
            sx={{ px: { xs: 1, md: 4 } }}
          >
            {" "}
            <Avatar
              alt={userData.profile.firstName}
              src={userData.avatar}
              sx={{ width: 140, height: 140 }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={7}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            {" "}
            <Typography sx={{ typography: { xs: "h6", md: "h3" } }}>
              {userData.profile.firstName} {userData.profile.lastName}
            </Typography>{" "}
            <Typography
              sx={{
                textTransform: "uppercase",
                typography: { xs: "caption", md: "body1-" },
              }}
            >
              {userData.jobTitle}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />
        <Grid container>
          <Grid
            item
            xs={2}
            md={4}
            display={"flex"}
            justifyContent={"end"}
            pr={4}
          >
            {" "}
            <InfoIcon />
          </Grid>

          <Grid item xs={10} md={7} display={"flex"} flexDirection={"column"}>
            <Typography variant="p" component={"p"}>
              @{userData.profile.username}
            </Typography>
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
      </Container>
    </div>
  );
}
