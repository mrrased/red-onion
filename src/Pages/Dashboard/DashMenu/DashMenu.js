import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import useAuth from '../../../Hooks/useAuth';
import { Avatar, CircularProgress, Container, Typography } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import { useNavigate } from 'react-router-dom';


const columns = [
    { id: 'name', label: 'Image', minWidth: 170 },
    { id: 'code', label: 'Item Name', minWidth: 100 ,align: 'center'},
    {
      id: 'population',
      label: 'Price',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Stock',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Insert',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'delete',
      label: 'Delete',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
  ];

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    // const handleFirstPageButtonClick = (event) => {
    //   onPageChange(event, 0);
    // };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    // const handleLastPageButtonClick = (event) => {
    //   onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    // };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        {/* <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton> */}
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        {/* <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton> */}
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
  
  // function createData(name, calories, fat) {
  //   return { name, calories, fat };
  // }
  
  // const rows = [
  //   createData('Cupcake', 305, 3.7),
  //   createData('Donut', 452, 25.0),
  //   createData('Eclair', 262, 16.0),
  //   createData('Frozen yoghurt', 159, 6.0),
  //   createData('Gingerbread', 356, 16.0),
  //   createData('Honeycomb', 408, 3.2),
  //   createData('Ice cream sandwich', 237, 9.0),
  //   createData('Jelly Bean', 375, 0.0),
  //   createData('KitKat', 518, 26.0),
  //   createData('Lollipop', 392, 0.2),
  //   createData('Marshmallow', 318, 0),
  //   createData('Nougat', 360, 19.0),
  //   createData('Oreo', 437, 18.0),
  // ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const DashMenu = () => {

    const { foods, process } = useAuth();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const navigate = useNavigate();
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - foods.length) : 0;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleEdit = (key) =>{

      // e.preventDefault();

      console.log('clicked', key);
      navigate(`/dashboard/dashboard-menu/${key}`)

    }
    // console.log('dash-menu',foods)

    const handleAddFood = (e) =>{

      e.preventDefault();

      navigate('/dashboard/addProduct');
    }
    return (
        <>
         {process? <Box sx={{textAlign: 'center'}}><CircularProgress/></Box> :<Container maxWidth="lg">
            <Typography variant="h4" component="h2" sx={{fontWeight: 700}}>
                Food List
            </Typography>
            <Typography variant="h4" component="h2" sx={{fontWeight: 600, fontSize: '16px', marginTop: '10px', marginBottom: '10px', ':hover':{textDecoration: 'underline', cursor: 'pointer', textDecorationColor: 'crimson'}}} onClick={handleAddFood}>
                Add New Menu
            </Typography>
            <Paper sx={{ width: '100%' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth , fontWeight: 900}}
                                >
                                {column.label}
                                </TableCell>
                           ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? foods.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : foods
                            ).map((row) => (
                            
                                <TableRow key={row.name} sx={{padding: '4px'}}>

                                    <TableCell component="th" scope="row" style={{ width: 50 }} sx={{padding: '4px'}} align="center">
                                        <Avatar sx={{width: '25%', height: '25%'}} alt="" src={`data:image/jpeg;base64,${row.img}`} />
                                    </TableCell>
                                    
                                    <TableCell style={{ width: 220 }} align="center" >
                                        <Box sx={{ backgroundColor: 'rgba(220, 20, 60, 0.1)' , padding: '3px', color: 'crimson', borderRadius: '10px', fontWeight: 700}}>{row.name}</Box>
                                    </TableCell>
                                    
                                    <TableCell style={{ width: 160 }} align="center">
                                        <Box sx={{ backgroundColor: 'rgba(220, 20, 60, 0.1)' , padding: '3px', color: 'crimson', borderRadius: '10px', fontWeight: 900}}>$ {row.price}</Box>
                                    </TableCell>

                                    <TableCell style={{ width: 160 }} align="center">
                                        <Box sx={{ backgroundColor: 'rgba(220, 20, 60, 0.1)' , padding: '3px', color: 'crimson', borderRadius: '10px', fontWeight: 900}}>{row.stock}</Box>
                                    </TableCell>

                                    <TableCell style={{ width: 160 }} align="center">
                                        <Box sx={{ backgroundColor: 'rgba(3, 201, 169, 0.1)' , padding: '3px', color: 'green', borderRadius: '10px', fontWeight: 900, ':hover':{textDecoration: 'underline', cursor:'pointer'}}} onClick={()=>handleEdit(row._id)}>Insert</Box>
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        <Box sx={{ backgroundColor: 'rgba(255, 0, 0, 0.1)' , padding: '3px', color: 'red', borderRadius: '10px', fontWeight: 900, ':hover':{textDecoration: 'underline', cursor:'pointer'}}}>Delete</Box>
                                    </TableCell>

                                </TableRow>
                            
                            ))}

                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={7}
                                    count={foods.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                        'aria-label': 'rows per page',
                                        },
                                        native: true,
                                }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>}
        </>
    );
};

export default DashMenu;