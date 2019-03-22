import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { getBookList } from '../store/booksReducer';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.gotCurrentSeries('52637');
    this.props.gotUserList('5900639');
  }
  render() {
    const books = this.props.userlist;
    const shelf = this.props.books.userList;

    return (
      <Paper className={styles.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell flexGrow="2">Title</TableCell>
              <TableCell flexGrow="1">Author </TableCell>
              <TableCell>Series Name </TableCell>
              <TableCell>Series Number </TableCell>
              <TableCell flexGrow="1">Description</TableCell>
              <TableCell flexGrow="1">Cover Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shelf.map(item => {
              return (
                <TableRow key={item.book.id._text}>
                  <TableCell>{item.book.title._text}</TableCell>
                  <TableCell>{item.book.authors.author.name._text}</TableCell>
                  <TableCell>
                    <Link to="/sampleSeries" className="cuteLink">
                      {item.book.title._text.slice(-111, -4)}
                    </Link>
                  </TableCell>
                  <TableCell>{item.book.title._text.slice(-4, -1)} </TableCell>
                  <TableCell>
                    {' '}
                    <img src={item.book.image_url._text} />
                  </TableCell>
                  <TableCell>
                    {item.book.description._text.slice(1, 500)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state,
    user: state.user.current,
    series: state.books.currentSeries,
    userList: state.books.userList
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
)(Books);
