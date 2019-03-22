import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import { getSingleBookInfo } from '../store/booksReducer';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

class SingleBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.formatDescription = this.formatDescription.bind(this);
  }
  componentDidMount() {
    const bookInfo = this.props.location.state;

    this.setState({ bookInfo });
    this.formatDescription();
    // this.props.getSingleBookInfo(bookId);
  }

  formatDescription() {
    const oldDescription = this.props.location.state.description;
    const re = /<[^>]*>/g;
    const replacePunc = /&rsquo;s/g;
    const replaceDash = /&mdash;/g;

    const regExFileredV = oldDescription.replace(re, '');
    const regExPunc = regExFileredV.replace(replacePunc, "'s");
    const regDashPunc = regExPunc.replace(replaceDash, '--');

    this.setState({ description: regDashPunc });
  }
  render() {
    const book = this.props.location.state;
    console.log('these books', this.state.bookInfo);
    return (
      <Paper>
        <Card key={book._id}>
          <CardContent>
            <Typography align="center" variant="h3">
              {book.title}
            </Typography>
          </CardContent>
          <CardContent align="center">
            <img src={'https://' + book.image} style={{ height: '25%' }} />
          </CardContent>
          <CardContent>
            <Typography align="center" variant="h4">
              {book.authors[0].display_name}
            </Typography>
          </CardContent>

          <CardContent>
            <Typography align="center">description</Typography>
            <Typography align="center">{this.state.description}</Typography>
          </CardContent>
        </Card>
        <Card key={book._id + 'stats'} style={{ backgroundColor: '#bdbdbd' }}>
          <CardContent>
            <Typography align="center">amazon rank</Typography>
            <Typography align="center">{book.amazon_rank}</Typography>
          </CardContent>
          <CardContent align="center">
            <CardContent>
              <Typography align="center">description</Typography>
              <Typography align="center">{book.price}</Typography>
            </CardContent>
          </CardContent>
          <CardContent>
            <Typography align="center">description</Typography>
            <Typography align="center">{book.ibsns}</Typography>
          </CardContent>

          <CardContent>
            <Typography align="center">description</Typography>
            <Typography align="center">stuff</Typography>
          </CardContent>
        </Card>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    bookList: state.bookList,
    currentBook: state.currentBook
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleBookInfo: id => dispatch(getSingleBookInfo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBook);
