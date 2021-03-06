import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Dialog,
    DialogContent,
    DialogActions,
    Grid,
    TextField,
    // TablePagination,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { ContainedButton } from "../../../components/atomic";
import "./DailyTable.css";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import Axios from "axios";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { useForm } from "../../../components/items/UseForm";

const useStyles = makeStyles((theme) => ({
    table: {
        marginTop: theme.spacing(3),
        "& thead th": {
            fontWeight: "500",
        },
        "& tbody td": {
            fontWeight: "300",
        },
        "& tbody tr:hover": {
            backgroundColor: "#fffbf2",
            cursor: "pointer",
        },
    },
}));

function DailyTable() {
    const classes = useStyles();

    // const [showDate, setShowDate] = useState(new Date());
    const [date, setDate] = useState(new Date());

    const [newDepartment, setnewDepartment] = useState("");
    const [newIncome, setnewIncome] = useState(0);
    const [newExpenses, setnewExpenses] = useState(0);

    const [openAdd, setOpenAdd] = useState(false);

    // const [isEdit, setisEdit] = useState(false);

    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };
    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    const [recordList, setRecordList] = useState([]);

    const initialValues = {
        department: "",
        income: "",
        expenses: "",
        date: new Date(),
        // newDepartment: "",
        // newIncome: "",
        // newExpenses: "",
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
        // if ("newDepartment" in fieldValues) {
        //     temp.newDepartment = fieldValues.newDepartment
        //         ? ""
        //         : "This field is required.";
        // }
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

    const showDailyRecords = () => {
        Axios.get("http://localhost:3001/api/alldaily").then((response) => {
            setRecordList(response && response.data);
            console.log("showRecord", response.data);
        });
    };

    const deleteRecord = (id) => {
        Axios.delete(`http://localhost:3001/api/delete/${id}`).then(
            (response) => {
                setRecordList(
                    recordList.filter((val) => {
                        return val.id !== id;
                    })
                );
            }
        );
    };

    const updateRecord = (id) => {
        Axios.put("http://localhost:3001/api/edit", {
            department: newDepartment,
            income: newIncome,
            expenses: newExpenses,
            id: id,
        }).then((response) => {
            setRecordList(
                recordList.map((val) => {
                    return val.id === id
                        ? {
                              id: val.id,
                              department: newDepartment,
                              income: newIncome,
                              expenses: newExpenses,
                          }
                        : val;
                })
            );
            console.log("Updated");
        });
    };

    useEffect(() => {
        showDailyRecords();
    }, []);

    // const handleClickEdit = () => {
    //     setOpenAdd(true);
    //     setisEdit(true);
    // };

    let totalProfit = recordList.reduce(
        (totalProfit, totalProfit2) =>
            (totalProfit = totalProfit + totalProfit2.profit),
        0
    );

    let totalIncome = recordList.reduce(
        (totalIncome, totalIncome2) =>
            (totalIncome = totalIncome + totalIncome2.income),
        0
    );

    let totalExpenses = recordList.reduce(
        (totalExpenses, totalExpenses2) =>
            (totalExpenses = totalExpenses + totalExpenses2.expenses),
        0
    );

    return (
        <div className="row daily-main-div">
            <div className="col-9 daily-div">
                <div className="pageContent">
                    <ContainedButton
                        className="add-new"
                        variant="contained"
                        size="medium"
                        color="default"
                        onClick={handleClickOpenAdd}
                        startIcon={<IoIcons.IoMdAdd />}
                        text="Add New"
                    />

                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            className="date-picker"
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            name="date"
                            value={showDate}
                            onChange={(showDate) => setShowDate(showDate)}
                            KeyboardButtonProps={{
                                "aria-label": "change date",
                            }}
                            // onClick={showDailyRecords}
                        />
                    </MuiPickersUtilsProvider> */}
                    <TableContainer>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <b>Department Name</b>
                                    </TableCell>
                                    <TableCell align="left">
                                        <b>Date</b>
                                    </TableCell>
                                    <TableCell align="left">
                                        <b>Income</b>
                                    </TableCell>
                                    <TableCell align="left">
                                        <b>Expenses</b>
                                    </TableCell>
                                    <TableCell align="center">
                                        <b>Profit</b>
                                    </TableCell>
                                    <TableCell align="center">
                                        <b>Loss</b>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {recordList.map((val, key) => (
                                    <TableRow>
                                        <TableCell>
                                            {val.department}
                                            <br />
                                            <TextField
                                                autoComplete="off"
                                                className="input-table"
                                                id="standard-basic"
                                                onChange={(event) => {
                                                    setnewDepartment(
                                                        event.target.value
                                                    );
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            {val.date}
                                            <br />
                                        </TableCell>
                                        <TableCell align="left">
                                            {val.income}
                                            <br />
                                            <TextField
                                                autoComplete="off"
                                                className="input-table"
                                                id="standard-basic"
                                                onChange={(event) => {
                                                    setnewIncome(
                                                        event.target.value
                                                    );
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell align="left">
                                            {val.expenses}
                                            <br />
                                            <TextField
                                                autoComplete="off"
                                                className="input-table"
                                                id="standard-basic"
                                                onChange={(event) => {
                                                    setnewExpenses(
                                                        event.target.value
                                                    );
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            {val.profit}
                                        </TableCell>
                                        <TableCell align="center">
                                            {val.loss}
                                        </TableCell>

                                        <TableCell>
                                            <ContainedButton
                                                variant="contained"
                                                size="small"
                                                color="primary"
                                                startIcon={
                                                    <AiIcons.AiFillEdit />
                                                }
                                                onClick={() => {
                                                    updateRecord(val.id);
                                                }}
                                                text="Update"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <ContainedButton
                                                variant="contained"
                                                size="small"
                                                color="secondary"
                                                startIcon={
                                                    <AiIcons.AiFillDelete />
                                                }
                                                onClick={() => {
                                                    deleteRecord(val.id);
                                                }}
                                                text="Delete"
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                {/* <Dialog open={openAdd}>
                    <DialogContent>
                        <AddForm
                            title={
                                isEdit
                                    ? "Edit Selected Record"
                                    : "Add New Record"
                            }
                            btn={isEdit ? "Update Record" : "Add Record"}
                        />
                    </DialogContent>
                    <DialogActions>
                        <ContainedButton
                            className="add-record-btn"
                            onClick={handleCloseAdd}
                            color="secondary"
                            text="Cancel"
                        />
                    </DialogActions>
                </Dialog> */}

                <Dialog open={openAdd}>
                    <DialogContent>
                        <center>
                            <h2>Add New Record</h2>
                            <form
                                className="add-from-div"
                                onSubmit={addDailyRecord}
                            >
                                <Grid container>
                                    <TextField
                                        autoComplete="off"
                                        className="input"
                                        id="standard-basic"
                                        label="Department"
                                        name="department"
                                        value={values.department}
                                        onChange={handleInputChange}
                                    />
                                    <span className="errorMsg">
                                        {errors.department}
                                    </span>
                                    <MuiPickersUtilsProvider
                                        utils={DateFnsUtils}
                                    >
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
                                            onChange={(date) => setDate(date)}
                                            KeyboardButtonProps={{
                                                "aria-label": "change date",
                                            }}
                                            required
                                        />
                                    </MuiPickersUtilsProvider>
                                    <TextField
                                        autoComplete="off"
                                        className="input"
                                        id="standard-basic"
                                        label="Income"
                                        name="income"
                                        value={values.income}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <span className="errorMsg">
                                        {errors.income}
                                    </span>
                                    <TextField
                                        autoComplete="off"
                                        className="input"
                                        id="standard-basic"
                                        label="Expenses"
                                        name="expenses"
                                        value={values.expenses}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <span className="errorMsg">
                                        {errors.expenses}
                                    </span>
                                    <ContainedButton
                                        type="submit"
                                        className="add-record-btn"
                                        variant="contained"
                                        size="large"
                                        color="primary"
                                        text="Add Record"
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
                    </DialogContent>
                    <DialogActions>
                        <ContainedButton
                            className="add-record-btn"
                            onClick={handleCloseAdd}
                            color="secondary"
                            text="Cancel"
                        />
                    </DialogActions>
                </Dialog>
            </div>

            <div className="col-3 mt-5 daily-total-div">
                <div className="daily-total-paper-income">
                    <h3>Total Income</h3>
                    <br />
                    <IoIcons.IoMdStats
                        style={{ fontSize: 70, color: "white" }}
                    />
                    <h4 className="price">
                        Rs <br />
                        {totalIncome}
                    </h4>
                </div>
                <div className="daily-total-paper-expense">
                    <h3>Total Expenses</h3>
                    <br />
                    <BiIcons.BiLineChartDown
                        style={{ fontSize: 70, color: "white" }}
                    />
                    <h4 className="price">
                        Rs <br />
                        {totalExpenses}
                    </h4>
                </div>
                <div className="daily-total-paper-profit">
                    <h3>Profit</h3>
                    <br />
                    <AiIcons.AiOutlineLineChart
                        style={{ fontSize: 70, color: "white" }}
                    />
                    <h4 className="price">
                        Rs <br />
                        {totalProfit}
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default DailyTable;
