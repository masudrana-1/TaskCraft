"use client";
import { useSearchParams, redirect } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("redirect_url");

  useEffect(() => {
    if (search) {
      redirect(search);
    }
  }, [search]);

  return <div>hello</div>;
};

export default page;
