import * as React from "react";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";

export default function SidbarSkeleton() {
  const keys = [...Array(10).keys()];
  return (
    <>
      {keys.map((i) => (
        <Grid container key={i}>
          <Grid
            item
            xs={2}
            md={2}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Avatar>
              {" "}
              <Skeleton />
            </Avatar>
          </Grid>
          <Grid item xs={10} md={10}>
            <Typography component="div" variant={"h3"}>
              <Skeleton />
            </Typography>
            <Typography component="div" variant={"body"}>
              <Skeleton />
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
