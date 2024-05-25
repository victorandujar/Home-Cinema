"use client";

import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import repositories from "../../utils/repositories/repositories";
import { getUserSession } from "@/modules/user/application/user";

const Layout = () => {
  const dispatch = useAppDispatch();

  const { userSession } = useAppSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      await getUserSession(repositories.user, dispatch);
    })();
  }, [dispatch]);

  return <Header />;
};

export default Layout;
