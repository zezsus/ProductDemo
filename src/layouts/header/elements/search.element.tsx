/** @format */

import { Box, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import {
  SearchHeader,
  SearchInput,
  SearchItem,
  SearchModal,
  styleSearchModal,
} from "../common/assets/search.style";

const Search = () => {
  const [isSearch, setIsSearch] = useState(false);

  const handleOpenSearch = () => {
    setIsSearch(true);
  };

  const handleClose = () => setIsSearch(false);

  return (
    <Box>
      <SearchIcon
        sx={{ cursor: "pointer", color: "rgb(145, 158, 171)" }}
        onClick={handleOpenSearch}
      />
      {isSearch && (
        <SearchModal open={isSearch} onClose={handleClose}>
          <Box sx={styleSearchModal}>
            <SearchHeader py={2}>
              <SearchIcon
                fontSize='medium'
                sx={{ color: "rgb(145, 158, 171)" }}
              />
              <SearchInput placeholder='Search' fullWidth />
            </SearchHeader>
            <SearchItem>
              
            </SearchItem>
          </Box>
        </SearchModal>
      )}
    </Box>
  );
};

export default Search;
