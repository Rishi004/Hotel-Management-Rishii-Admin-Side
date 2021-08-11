import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
} from '@material-ui/core';
import React, { useState } from 'react';
import { ContainedButton } from '../../../components/atomic';
import '../daily/DailyTable.css';
import * as AiIcons from "react-icons/ai";
// import { RecordVoiceOverSharp } from '@material-ui/icons';
import { MonthlySample } from '../../../pages';

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

function MonthlyTable() {

    const classes = useStyles();

    const pages = [5, 15, 31];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };

    const recordsAfterPagingAndSorting = () => {
        return MonthlySample.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    };


    return (
        <div className="row daily-main-div">
            <div className="col-7 daily-div">
                <div className="pageContent">
                    <TableContainer>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left"><b>Date</b></TableCell>
                                    <TableCell align="center"><b>Expenses</b></TableCell>
                                    <TableCell align="center"><b>Income</b></TableCell>
                                    <TableCell align="center"><b>Profit</b></TableCell>
                                    <TableCell align="center"><b>Loss</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    recordsAfterPagingAndSorting().map(val =>
                                    (
                                        <TableRow>
                                            <TableCell>{val.date}</TableCell>
                                            <TableCell align="center">{val.expenses}</TableCell>
                                            <TableCell align="center">{val.income}</TableCell>
                                            <TableCell align="center">{val.profit}</TableCell>
                                            <TableCell align="center">{val.loss}</TableCell>

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

                    <TablePagination
                        component="div"
                        page={page}
                        rowsPerPageOptions={pages}
                        count={MonthlySample.length}
                        rowsPerPage={rowsPerPage}
                        onChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>
            </div>
            <div className='col-5'>
                
            </div>
        </div>

    )
}

export default MonthlyTable

