/** @format */

import { Box, MenuItem, styled } from "@mui/material";

export const UserMenuHeader = styled(Box)({
  transition: "0.5s ease-in-out",
  borderBottom: "1px dashed rgba(0, 0, 0, 0.2)",
  backgroundColor: "transparent",
  paddingLeft: 15,
  paddingBottom: 15,
});

export const UserMenuBody = styled(Box)({
  transition: "0.5s ease-in-out",
  borderTop: "1px dashed rgba(0, 0, 0, 0.2)",
  backgroundColor: "transparent",
  padding: 5,
});

export const UserMenuFooter = styled(Box)({
  transition: "0.5s ease-in-out",
  borderTop: "1px dashed rgba(0, 0, 0, 0.2)",
  backgroundColor: "transparent",
  padding: "5px 5px 0 5px",
});

export const ButtonLogout = styled(MenuItem)({
  color: "rgb(255, 86, 48)",
  borderRadius: 5,
});

export const Arow = styled(Box)({
  position: "absolute",
  top: "32px",
  right: "26px",
});
