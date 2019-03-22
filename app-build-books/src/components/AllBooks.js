import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { getBookList } from '../store/booksReducer';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class AllBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 0, rowsPerPage: 10 };
  }
  componentDidMount() {
    //   this.props.getBookList('123');
    console.log('allbooks props', this.props);
  }
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  render() {
    const books = this.props.bookList;
    const twoBookTest = books.slice(0, 10);
    console.log('this books at 1 is ', books[0]);
    return (
      <Paper className={styles.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell flexGrow="2">Cover Image</TableCell>
              <TableCell flexGrow="2">Title</TableCell>
              <TableCell flexGrow="3">Author </TableCell>
              <TableCell>Active</TableCell>
              <TableCell flexGrow="1">Description</TableCell>

              <TableCell>Amazon Rank</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>ibsn</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map(item => {
              return (
                <TableRow key={item._id}>
                  <TableCell>
                    <img
                      src={'https://' + item.image}
                      style={{ height: '25%' }}
                    />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.authors[0].display_name}</TableCell>
                  <TableCell>{item.active ? 'yes' : 'no'}</TableCell>
                  <TableCell>
                    {/* <Link to="/sampleSeries" className="cuteLink"> */}
                    <Typography>
                      item.description?(item.description.slice(8, 60):('none')
                    </Typography>
                    {/* </Link> */}
                  </TableCell>
                  <TableCell>{item.amazon_rank}</TableCell>
                  <TableCell>${item.price} </TableCell>
                  <TableCell>
                    <Typography>{item.isbns}</Typography>
                  </TableCell>

                  <TableCell />
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={books.length}
                rowsPerPage={this.state.rowsPerPage}
                page={this.state.page}
                SelectProps={{
                  native: true
                }}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                // ActionsComponent={TablePaginationActionsWrapped}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state,
    bookList: state.bookList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBookList: id => dispatch(getBookList(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBooks);
