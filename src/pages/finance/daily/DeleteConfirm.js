import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { ContainedButton } from "../../../components/atomic";
import "./DeleteConfirm.css";
import Axios from "axios";

function DeleteConfirm() {
    return (
        <>
            <center>
                <h4>Are you sure want to delete this record?</h4>
                <br />
                <div>
                    <Grid container>
                        <Grid item xs={6}>
                            <ContainedButton
                                className="dlt"
                                variant="contained"
                                size="large"
                                color="default"
                                text="No"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <ContainedButton
                                className="dlt"
                                variant="contained"
                                size="large"
                                color="secondary"
                                text="Yes"
                            />
                        </Grid>
                    </Grid>
                </div>
            </center>
        </>
    );
}

export default DeleteConfirm;
