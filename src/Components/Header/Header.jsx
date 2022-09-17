import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./Styles1.css";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Typography variant="h5" >
          TravelSage
        </Typography>
        <Box display="flex">
          <Typography variant="h6" >
            Explore new places
          </Typography>
          {/* <Autocomplete> */}   
            <div >
              <div >
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Here We Go....."
              />
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
