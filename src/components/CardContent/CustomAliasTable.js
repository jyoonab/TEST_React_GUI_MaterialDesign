import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Icon from '../CustomIcon';
import IconButton from '@material-ui/core/IconButton';

const columns = [
  { id: 'name', label: 'Name', minWidth: 50, maxWidth: 100 },
  { id: 'alias', label: 'Alias', minWidth: 50, maxWidth: 100 },
  { id: 'action', label: 'Action', minWidth: 50, maxWidth: 100, align: 'right'},
];

/*{ id: 'population',
  label: 'Population',
  minWidth: 170,
  align: 'right',
  format: (value) => value.toLocaleString(),
},*/

const useStyles = Theme => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

class CustomAliasTable extends Component {

  constructor(props){
    super(props);

    this.state = {
      page: 0,
      setPage: 0,
      rowsPerPage : 5,
      setRowsPerPage : 5,
    }
  }

  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage,
    });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: +event.target.value,
      page: 0,
    });
  };

  render(){
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={0}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table" size="small">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.data.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row._source[column.id];
                      return (
                        (column.id != "action") &&
                        (<TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>)
                        ||
                        (column.id === "action") &&
                        (<TableCell key={column.id} align={column.align}>
                          <IconButton key={row._id} onClick={() => this.props.deleteDoc(row._id)} style={{margin: 0, color:'#2a4a33'}}>
                            <Icon value={'fa fa-trash'} size={10} color={'black'}/>
                          </IconButton>
                        </TableCell>)
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={this.props.data.length}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.page}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

export default withStyles(useStyles)(CustomAliasTable)
