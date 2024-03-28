/** @format */

import {
  Accordion,
  AccordionSummary,
  Box,
  List,
  styled,
  Typography,
} from "@mui/material";

export const LeftMenu = styled(Box)({
  displa: "flex",
  flexDirection: "column",
  width: 250,
  height: "100vh",
  borderRight: "1px dashed rgba(0, 0, 0, 0.2)",
  overflow: "auto",
  padding: "1rem",
  boxSizing: "border-box",
});

export const Title = styled(Typography)({
  textTransform: "uppercase",
  color: "rgb(145, 158, 171)",
  fontWeight: "bold",
  fontSize: "0.75rem",
  cursor: "pointer",

  "&:hover": {
    color: "rgb(33, 43, 54)",
  },
});

export const MemuSelectd = styled(Accordion)({
  border: "nome",
  boxShadow: "none",
  margin: 0,
  padding: 0,
  height: "max-content",

  "&::before": {
    height: 0,
  },
});

export const MenuTitle = styled(AccordionSummary)({
  height: 45,
  paddingLeft: 20,
  fontWeight: "bold",
  color: "#555",
  cursor: "pointer",
  transition: "0.5s ease-in-out",
  borderRadius: "10px",
});

export const MenuItem = styled(List)({
  padding: 0,
  margin: 0,
  height: "max-content",
  borderRadius: "10px",
});
