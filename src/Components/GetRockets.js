import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_ROCKETS } from "../Graphql/Queries";
import './GetRockets.css';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import noImage from '../images/noImage.jpg';

function GetRockets() {
  const { data } = useQuery(LOAD_ROCKETS);
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    if (data) {
      setRockets(data.ships)
    }

  }, [data])

  return (
    <div>
      <Grid container spacing={1}>
        {rockets.map((val) => {
          return <div className="frame">
            <Grid item xs={12}>
              <Paper><h1>{val.name}</h1></Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper> <img src={val.image ? val.image : noImage} className="image" alt="img" /></Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <span className="heading-title">Type:</span> <Paper><p>{val.type}</p></Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <span className="heading-title">Year Built:</span> <Paper><p>{val.year_built}</p></Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <span className="heading-title">Weight in kg:</span> <Paper><p>{val.weight_kg}</p></Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <span className="heading-title">URL:</span> <Paper><p><a href={val.url} className="url" target="_blank" rel="noreferrer">View more</a></p></Paper>
            </Grid>
          </div>
        })}
      </Grid >

    </div >
  )
}

export default GetRockets;
