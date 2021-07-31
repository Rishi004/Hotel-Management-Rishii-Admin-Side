import {
    makeStyles,
    Paper,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@material-ui/core';
import React, { useState } from 'react';
import { AddForm, EditForm } from '../../../pages';
import { ContainedButton } from '../../../components/atomic';
import './DailyTable.css';
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";


const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
        marginTop: theme.spacing(3),
        '$ thead th': {
            fontWeight: '600',
        },
        '& tbody td': {
            fontWeight: '300'
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer'
        },
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

function DailyTable() {

    const classes = useStyles();

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };
    const handleCloseAdd = () => {
        setOpenAdd(false);
    };


    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };
    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    return (
        <>
            {/* <AddForm /> */}
            <Paper className={classes.pageContent}>
                <Grid container>
                    <Grid item xs={6} className='search-grid'>
                        <TextField
                            style={{ textIndent: 30 }}
                            autoComplete="off"
                            className="input"
                            id="outlined-basic"
                            variant="outlined"
                            label="Search Records"
                        // onChange={(e) => {
                        //     setPassword(e.target.value);
                        // }}
                        />
                    </Grid>
                    <Grid item xs={6} className='add-new-grid'>
                        <ContainedButton
                            variant="contained"
                            size="medium"
                            color="default"
                            onClick={handleClickOpenAdd}
                            startIcon={<IoIcons.IoMdAdd />}
                            text="Add New"
                        />
                    </Grid>
                </Grid>
                <TableContainer>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Department Name</b></TableCell>
                                <TableCell align="left"><b>Date</b></TableCell>
                                <TableCell align="center"><b>Expenses</b></TableCell>
                                <TableCell align="center"><b>Income</b></TableCell>
                                <TableCell align="center"><b>Profit</b></TableCell>
                                <TableCell align="center"><b>Loss</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Room Services</TableCell>
                                <TableCell>7/29/2021</TableCell>
                                <TableCell align="center">50000</TableCell>
                                <TableCell align="center">150000</TableCell>
                                <TableCell align="center">100000</TableCell>
                                <TableCell align="center">Nah</TableCell>

                                <TableCell>
                                    <ContainedButton
                                        variant="contained"
                                        size="large"
                                        color="primary"
                                        onClick={handleClickOpenEdit}
                                        text="Edit"
                                    />
                                </TableCell>
                                <TableCell>
                                    <ContainedButton
                                        variant="contained"
                                        size="large"
                                        color="secondary"
                                        // onClick={() => {
                                        //     deleteRecord(val.id)
                                        // }}
                                        text="Delete"
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Dialog open={openAdd}  >
                <DialogContent>
                    <AddForm />
                </DialogContent>
                {/* <DialogActions>
                    <ContainedButton onClick={handleClose} color="primary">
                        Cancel
                    </ContainedButton>
                </DialogActions> */}
            </Dialog>

            <Dialog open={openEdit}  >
                <DialogContent>
                    <EditForm />
                </DialogContent>
                {/* <DialogActions>
                    <ContainedButton onClick={handleClose} color="primary">
                        Cancel
                    </ContainedButton>
                </DialogActions> */}
            </Dialog>

        </>
    )
}

export default DailyTable
