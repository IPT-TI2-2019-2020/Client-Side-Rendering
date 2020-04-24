import React from "react";

const AuthContext = React.createContext({
  user: undefined,
  login: () => {},
  logout: () => {},
});

export default AuthContext;

export const roles = {
  Boss: 1,
  Servent: 2,
};
