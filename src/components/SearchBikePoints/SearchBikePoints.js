import React, { Fragment } from "react";
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";

const SearchBikePoints = ({ searchValue, handleChangeSearch, handleSubmitSearch }) => {
  return (
    <Fragment>
      <TextField
        label="Search Bike Points"
        value={searchValue}
        onChange={handleChangeSearch}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          )
        }}
      />
      <Button onClick={handleSubmitSearch}>Search</Button>
    </Fragment>
  );
};

export default SearchBikePoints;