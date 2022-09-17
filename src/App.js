import React from "react";
import { CssBaseline, Grid, Switch } from "@material-ui/core";
import Header from "./Components/Header/Header";
import Lists from "./Components/Lists/Lists";
import Maps from "./Components/Maps/Maps";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid item xs={12} md={4}>
                  <Lists />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Maps />
                </Grid>
              </Grid>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
