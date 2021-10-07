import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import volData from "../Data/volume.json";

import { useState } from "react";

import annualData from "../Data/annualData.json";

import ClassLevelGraph from "../DashComponents/ClassLevelGraph";
import ProductCountTableData from "../DashComponents/ProductCountTable";
import VolumeChange from "../DashComponents/VolumeChange";
import ProductDropdown from "../DashComponents/ProductDropdown";
import ProductPage from "./ProductPage";

import DownloadButton from "../DashComponents/DownloadButton";

import { lightGrey, useStyles_ClassPage } from "../Design/MyTheme";
import { graphWidth } from "../Design/graphDimensions";

export const FirstClass = () => {
  const classes = useStyles_ClassPage();

  const [selectedProductId, setSelectedProductId] = useState(0);

  function changeProductSelected(e) {
    setSelectedProductId(e.target.id);
  }

  const fcAnnualData = annualData.filter(
    (row) => row.class === "First Class Mail"
  );

  let volDataFC = volData.filter((row) => row.mailClass === "FC");

  return (
    <div className={classes.root} id="allMdContainer">
      <Grid container spacing={1} justifyContent="flex-start">
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.root}>
              <Typography variant="h4" component="h4" gutterBottom>
                First Class Data
              </Typography>
            </div>
          </Grid>
          <Grid item md={9} xs={12} style={{ maxWidth: 950 }}>
            <Paper
              // className={classes.graphDiv}
              className={classes.graphDivFirstClass}
              elevation={3}
              width={graphWidth}
            >
              <ClassLevelGraph
                propData={fcAnnualData}
                mailClass={"First Class"}
              />
            </Paper>
          </Grid>

          <Grid item xs={3} float="left">
            <Grid container direction="column" spacing={3}>
              <Grid item lg={7} md={12}>
                <Paper className={classes.paper}>
                  <div>
                    {" "}
                    <ProductCountTableData propData={fcAnnualData} />{" "}
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper
                  className={classes.paper}
                  style={{ backgroundColor: lightGrey }}
                >
                  <VolumeChange propData={volDataFC} />
                </Paper>
                <div style={{ marginTop: "30%" }}></div>
                <Paper>
                  <DownloadButton
                    propData={fcAnnualData}
                    dataName={"Class-Level Data"}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Paper item xs={12} className={classes.paperDropdown}>
          <ProductDropdown
            propData={fcAnnualData}
            selectedProductId={selectedProductId}
            changeProductSelected={changeProductSelected}
            mailClass="First Class"
          />
        </Paper>
      </Grid>

      <ProductPage selectedProductId={selectedProductId} />
    </div>
  );
};

export default FirstClass;
