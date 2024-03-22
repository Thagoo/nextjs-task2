"use client";
import Spinner from "@/ui/Spinner";
import Profile from "@/components/profile/Profile";

import React, { useEffect } from "react";
import { useData } from "@/context/UserContext";
import { redirect } from "next/navigation";

export default function Page({ params }) {
  const { currentUser, loading } = useData();

  useEffect(() => {
    if (!currentUser) {
      redirect("/");
      return;
    }
    return;
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Profile userData={currentUser} />
    </div>
  );
}
