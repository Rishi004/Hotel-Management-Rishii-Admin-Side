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
    // TablePagination,
} from '@material-ui/core';
import React, { useState } from 'react';
import { AddForm, DailyTotal, EditForm } from '../../../pages';
import { ContainedButton } from '../../../components/atomic';
import './DailyTable.css';
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
// import { RecordVoiceOverSharp } from '@material-ui/icons';
import { DailySample } from '../../../pages';


const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 250,
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
        },
        '& tbody td': {
            fontWeight: '300'
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer'
        },
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


    // const pages = [5, 15, 31];
    // const [page, setPage] = useState(0);
    // const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = event => {
    //     setRowsPerPage(parseInt(event.target.value));
    //     setPage(0);
    // };

    // const recordsAfterPagingAndSorting = () => {
    //     return DailySample.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    // };


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
                                {
                                    DailySample.map(val =>
                                    (
                                        <TableRow>
                                            <TableCell>{val.department}</TableCell>
                                            <TableCell>{val.date}</TableCell>
                                            <TableCell align="center">{val.expenses}</TableCell>
                                            <TableCell align="center">{val.income}</TableCell>
                                            <TableCell align="center">{val.profit}</TableCell>
                                            <TableCell align="center">{val.loss}</TableCell>

                                            <TableCell>
                                                <ContainedButton
                                                    variant="contained"
                                                    size="medium"
                                                    color="primary"
                                                    startIcon={<AiIcons.AiFillEdit />}
                                                    onClick={handleClickOpenEdit}
                                                    text="Edit"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <ContainedButton
                                                    variant="contained"
                                                    size="medium"
                                                    color="secondary"
                                                    startIcon={<AiIcons.AiFillDelete />}
                                                    // onClick={() => {
                                                    //     deleteRecord(val.id)
                                                    // }}
                                                    text="Delete"
                                                />
                                            </TableCell>
                                        </TableRow>
                                    )
                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* <TablePagination
                        component="div"
                        page={page}
                        rowsPerPageOptions={pages}
                        count={DailySample.length}
                        rowsPerPage={rowsPerPage}
                        onChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    /> */}
                </div>

                <Dialog open={openAdd}  >
                    <DialogContent>
                        <AddForm />
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

                <Dialog open={openEdit}  >
                    <DialogContent>
                        <EditForm />
                    </DialogContent>
                    <DialogActions>
                        <ContainedButton
                            className="add-record-btn"
                            onClick={handleCloseEdit}
                            color="primary"
                            text="Cancel"
                        />
                    </DialogActions>
                </Dialog>
            </div>
            <div className='col-3 mt-5 total-main-div'>
                <DailyTotal />
            </div>
        </div>

    )
}

export default DailyTable
