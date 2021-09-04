import {
    // FormControl,
    // InputLabel,
    // MenuItem,
    // Select,
    Grid,
    TextField,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./AddForm.css";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { ContainedButton } from "../../../components/atomic";
import Axios from "axios";

function AddForm() {
    const [department, setDepartment] = useState("");
    const [date, setDate] = useState(new Date());
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    // const [profit, setProfit] = useState(0);
    // const [loss, setLoss] = useState(0);

    const addDailyRecord = () => {
        Axios.post("http://localhost:3001/api/adddaily", {
            department: department,
            date: date,
            expenses: expenses,
            income: income,
        }).then(() => {
            console.log("Success");
            // showDailyRecords();
        });
    };

    return (
        <>
            <center>
                <h2>Add New Record</h2>
                <form className="add-from-div">
                    <Grid container>
                        <TextField
                            autoComplete="off"
                            className="input"
                            id="standard-basic"
                            label="Department"
                            name="department"
                            // value={this.state.department}
                            onChange={(event) => {
                                setDepartment(event.target.value);
                            }}
                        />
                        {/* <p>{this.state.departmentError}</p> */}
                        {/* <FormControl className="select">
                            <InputLabel id="demo-simple-select-label">
                                Department
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                // onChange={handleChange}
                                label="Age"
                            >
                                <MenuItem value={10}>Room Services</MenuItem>
                                <MenuItem value={20}>
                                    Food and Beverage
                                </MenuItem>
                                <MenuItem value={20}>
                                    Vehicle Management
                                </MenuItem>
                                <MenuItem value={20}>Deliveries</MenuItem>
                            </Select>
                        </FormControl> */}
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                className="date-picker"
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                name="date"
                                value={date}
                                // selected={startDate}
                                onChange={(date) => setDate(date)}
                                KeyboardButtonProps={{
                                    "aria-label": "change date",
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <TextField
                            autoComplete="off"
                            className="input"
                            id="standard-basic"
                            label="Income"
                            name="income"
                            // value={this.state.income}
                            onChange={(event) => {
                                setIncome(event.target.value);
                            }}
                        />
                        <TextField
                            autoComplete="off"
                            className="input"
                            id="standard-basic"
                            label="Expenses"
                            name="expenses"
                            // value={this.state.expenses}
                            onChange={(event) => {
                                setExpenses(event.target.value);
                            }}
                        />

                        <ContainedButton
                            className="add-record-btn"
                            variant="contained"
                            size="large"
                            color="primary"
                            text="Add Record"
                            onClick={addDailyRecord}
                        />
                    </Grid>
                </form>
            </center>
        </>
    );
}

export default AddForm;
