/** @format */

import { Box, InputBase, Modal, styled } from "@mui/material";

export const SearchElement = styled(Box)({
  display: "flex",
});

export const styleSearchModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 5,
  border: "none",
  boxShadow: "none",
  p: 4,
  height: 400,
};

export const SearchModal = styled(Modal)({
  borderRadius: 20,
  border: "none",
  boxShadow: "none",
});

export const SearchHeader = styled(Box)({
  borderBottom: "1px gray solid",
  display: "flex",
  alignItems: "center",
  gap: 5,
});

export const SearchInput = styled(InputBase)({
  border: "none",
  boxShadow: "none",
  outline: "none",
  fontWeight: "bold",
});

export const SearchItem = styled(Box)({
  
})