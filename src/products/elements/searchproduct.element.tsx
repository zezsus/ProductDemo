/** @format */

import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { SearchProductElement } from "../common/assets/searchproduct.style";

const stock = ["In stock", "Low stock", "Out of stock"];

const SearchProduct = () => {
  return (
    <SearchProductElement>
      <TextField select label='Stock' defaultValue='' sx={{ width: 200 }}>
        {stock.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        sx={{ m: 1, width: 300 }}
        placeholder='Search...'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </SearchProductElement>
  );
};
export default SearchProduct;
