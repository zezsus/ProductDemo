/** @format */

import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const HomePage = styled(Box)({
  display: "flex",
});

export const HomeContent = styled(Box)({
  width: "100%",
});

export const ContentBody = styled(Box)({
  maxHeight: "90vh",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
    borderRadius: "4px",
  },
});
