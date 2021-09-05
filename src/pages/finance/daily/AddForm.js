/* eslint-disable no-const-assign */
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
import { useForm } from "../../../components/items/UseForm";

function AddForm(props) {
    const { title, btn } = props;

    const [date, setDate] = useState(new Date());

    const initialValues = {
        id: 0,
        department: "",
        income: "",
        expenses: "",
        date: new Date(),
    };

    const validate = (fieldValues = values) => {
        console.log(fieldValues);
        let temp = { ...errors };
        let numbers = /^[0-9]+$/;
        if ("department" in fieldValues) {
            temp.department = fieldValues.department
                ? ""
                : "This field is required.";
        }
        if ("income" in fieldValues) {
            temp.income = numbers.test(fieldValues.income)
                ? ""
                : "Please input numeric characters only";
        }
        if ("expenses" in fieldValues) {
            temp.expenses = numbers.test(fieldValues.expenses)
                ? ""
                : "Please input numeric characters only";
        }
        setErrors({
            ...temp,
        });

        if (fieldValues === values)
            return Object.values(temp).every((x) => x === "");
    };

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialValues, true, validate);

    const addDailyRecord = (e) => {
        e.preventDefault();
        console.log("value", values.department);
        if (validate()) {
            Axios.post("http://localhost:3001/api/adddaily", {
                department: values.department,
                date: date,
                expenses: values.expenses,
                income: values.income,
            }).then(() => {
                console.log("Success");
            });
        }
    };

    return (
        <>
            <center>
                <h2>{title}</h2>
                <form className="add-from-div" onSubmit={addDailyRecord}>
                    <Grid container>
                        <TextField
                            autoComplete="off"
                            className="input"
                            id="standard-basic"
                            label="Department"
                            name="department"
                            value={values.department}
                            // onChange={(event) => {
                            //     setDepartment(event.target.value);
                            // }}
                            onChange={handleInputChange}
                        />
                        <span className="errorMsg">{errors.department}</span>
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
                                // onChange={handleInputChange}
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
                            value={values.income}
                            // onChange={(event) => {
                            //     setIncome(event.target.value);
                            // }}
                            onChange={handleInputChange}
                            required
                        />
                        <span className="errorMsg">{errors.income}</span>
                        <TextField
                            autoComplete="off"
                            className="input"
                            id="standard-basic"
                            label="Expenses"
                            name="expenses"
                            value={values.expenses}
                            // onChange={(event) => {
                            //     setExpenses(event.target.value);
                            // }}
                            onChange={handleInputChange}
                            required
                        />
                        <span className="errorMsg">{errors.expenses}</span>
                        <ContainedButton
                            type="submit"
                            className="add-record-btn"
                            variant="contained"
                            size="large"
                            color="primary"
                            text={btn}
                            // onClick={addDailyRecord}
                        />
                        <ContainedButton
                            className="add-record-btn"
                            variant="contained"
                            size="large"
                            color="secondary"
                            text="Reset"
                            onClick={resetForm}
                        />
                    </Grid>
                </form>
            </center>
        </>
    );
}

export default AddForm;
