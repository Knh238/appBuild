import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Home from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import { getBookList } from '../store/booksReducer';

import { connect } from 'react-redux';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getBookList('123');
  }

  render() {
    return (
      <AppBar position="fixed" style={{ background: '#26C6DA' }}>
        <Toolbar>
          <IconButton
            component={Link}
            to={{
              pathname: '/'
            }}
          >
            <Home />
          </IconButton>

          <Button
            variant="contained"
            style={{ backgroundColor: '#ef9a9a', marginLeft: 10 }}
            component={Link}
            to={{
              pathname: '/AllBooks'
            }}
          >
            <CollectionsBookmarkIcon />
            books
          </Button>
          <div style={{ flexGrow: 1 }}>
            <Typography align="center" variant="h5" color="inherit" noWrap>
              Coding Challenge: Kristin Harper
            </Typography>
          </div>
          <div style={{ float: 'right' }}>
            <Button
              variant="contained"
              style={{ backgroundColor: '#ef9a9a', marginLeft: 10 }}
              component={Link}
              to={{
                pathname: '/FindBooks'
              }}
            >
              <SearchIcon />
              Find a book
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
const styles = {
  card: {
    maxWidth: 345,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  media: {
    objectFit: 'cover'
  }
};
const mapStateToProps = state => {
  return {
    ...state,
    bookList: state.books.bookList
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
)(Navbar);
