"use client";

import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import repositories from "../../utils/repositories/repositories";
import {
  getRequestTokenSession,
  createUserSession,
  validateRequestToken,
} from "@/modules/user/application/user";
import environments from "../../utils/environments/environments";

const Layout = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { requestToken } = useAppSelector((state) => state.user);

  const refToken = useRef(requestToken);

  useEffect(() => {
    const fetchAndValidateToken = async () => {
      if (!requestToken) {
        await getRequestTokenSession(repositories.user, dispatch);
      }
      if (refToken.current !== requestToken && requestToken) {
        refToken.current = requestToken;
        const validateResponse = await validateRequestToken(
          repositories.user,
          dispatch,
          {
            username: environments.username,
            password: environments.password,
            request_token: requestToken,
          },
        );

        validateResponse.success &&
          (await createUserSession(repositories.user, dispatch, requestToken));
      }
    };

    fetchAndValidateToken();
  }, [dispatch, requestToken]);

  return <Header />;
};

export default Layout;
