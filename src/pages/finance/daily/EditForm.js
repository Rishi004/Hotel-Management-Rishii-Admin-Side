import {
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Grid,
    TextField
} from '@material-ui/core';
import React from 'react';
import './AddForm.css';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import { ContainedButton } from '../../../components/atomic';



function EditForm() {

    return (
        <>
            <center>
                <h2>Edit Selected Record</h2>
                <form>
                    <Grid container>
                        <FormControl className='select'>
                            <InputLabel id="demo-simple-select-label">Department</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                // onChange={handleChange}
                                label="Age"
                            >

                                <MenuItem value={10}>Room Services</MenuItem>
                                <MenuItem value={20}>Food and Beverage</MenuItem>

                            </Select>
                        </FormControl>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                className='date-picker'
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value='12/12/2020'
                                // onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <TextField
                            autoComplete="off"
                            className="input"
                            id="standard-basic"
                            label="Income"
                        // onChange={(e) => {
                        //     setPassword(e.target.value);
                        // }}
                        />
                        <TextField
                            autoComplete="off"
                            className="input"
                            id="standard-basic"
                            label="Expenses"
                        // onChange={(e) => {
                        //     setPassword(e.target.value);
                        // }}
                        />
                        <ContainedButton
                            className='edit-record-btn'
                            variant="contained"
                            size="large"
                            color="default"
                            // onClick={() => {
                            //     deleteRecord(val.id)
                            // }}
                            text="Edit Record"
                        />
                    </Grid>
                </form>
            </center>
        </>
    )
}

export default EditForm
