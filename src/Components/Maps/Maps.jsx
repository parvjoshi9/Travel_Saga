import React from "react";
import { GoogleMap } from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";
import {Paper , Typography , useMediaQuery} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab"
import useStyles from "./Styles3";

const Maps   = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates = { lon:0 ,lat:0};
  return (
    <div
      className={classes.mapContainer}
      style={{ height: "10vh", width: "100%" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBLAjpuIGe64aS-9o6KdAH0MXTUUkrbN_w" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      ></GoogleMapReact>
      <h1>MAps</h1>
    </div>
  );
};

export default Maps  ;
