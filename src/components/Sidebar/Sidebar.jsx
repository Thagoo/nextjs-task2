"use client";
import { useData } from "@/context/UserContext";
import { useEffect } from "react";
import Spinner from "@/ui/Spinner";
import {
  Avatar,
  Box,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import SidbarSkeleton from "@/ui/Skeleton";

export default function Sidebar() {
  const { data, loading, error, currentUser, setCurrentUser, fetchData } =
    useData();

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <Box height={"90vh"} width={"100%"} sx={{ px: { sm: 4, md: 10 } }}>
        <SidbarSkeleton />
      </Box>
    );
  }
  return (
    <div>
      <Paper sx={{ height: { xs: "90vh", md: "90vh" }, overflow: "auto" }}>
        {" "}
        <List sx={{ width: "100%" }}>
          {data.map((user, i) => (
            <ListItemButton
              alignItems="flex-start"
              as={Link}
              onClick={() => setCurrentUser(user)}
              href={`/user/${user.id}`}
              sx={{ px: { sm: 4, md: 10 }, color: "inherit" }}
              selected={currentUser == user ? "true" : null}
              key={i}
            >
              <ListItemAvatar>
                <Avatar alt={user.profile.firstName} src={user.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={user?.profile.firstName}
                secondary={user?.jobTitle}
              />
            </ListItemButton>
          ))}
        </List>
      </Paper>
    </div>
  );
}
