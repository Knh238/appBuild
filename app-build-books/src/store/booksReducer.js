import history from '../history';
import booksData from './bookInfo';

const GOT_BOOK_LIST = 'GOT_BOOK_LIST';
const GOT_CURRENT_SERIES = 'GOT_CURRENT_SERIES';
const GOT_QUOTES = 'GOT_QUOTES';
const GOT_DATES = 'GOT_DATES';
const ADDED_DATES = 'ADDED_DATES';

const gotBookList = list => ({
  type: GOT_BOOK_LIST,
  list
});
const gotCurrentSeries = series => ({
  type: GOT_CURRENT_SERIES,
  series
});
const gotQuotes = quotes => ({
  type: GOT_QUOTES,
  quotes
});
const gotDates = dates => ({
  type: GOT_DATES,
  dates
});
const addedDates = dates => ({
  type: ADDED_DATES,
  dates
});

export const getSeries = id => dispatch => {
  // request.get(
  //   `https://www.goodreads.com/series/show?key=0PwPMvqFRKns4bpgBnkRg&id=${id}.xml`,
  //   (err, res, body) => {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     console.log(body.url);
  //     console.log(body.explanation);
  //     var xml = body;
  //     var result1 = convert.xml2json(xml, {
  //       compact: true,
  //       spaces: 2,
  //       ignoreDoctype: true,
  //       ignoreDeclaration: true
  //     });
  //     // const {series} = result1.series
  //     const resBody = JSON.parse(result1);
  //     const series = resBody.GoodreadsResponse.series;
  //     console.log(series);
  //     dispatch(gotCurrentSeries(series));
  //     // return result1
  //   }
  // );
};

export const getBookList = id => dispatch => {
  // request.get(
  //   `https://www.goodreads.com/review/list/${id}.xml?shelf=demo&key=0PwPMvqFRKns4bpgBnkRg&v=2?`,
  //   (err, res, body) => {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     console.log(body.url);
  //     console.log(body.explanation);
  //     var xml = body;
  //     var result1 = convert.xml2json(xml, {
  //       compact: true,
  //       spaces: 2,
  //       ignoreDoctype: true,
  //       ignoreDeclaration: true
  //     });
  //     const resBody = JSON.parse(result1);
  //     console.log(resBody);
  //     const list = resBody.GoodreadsResponse.reviews.review;
  //     const datesObj = list.map(item => ({
  //       title: item.book.title._text,
  //       month: +item.book.publication_month._text,
  //       day: +item.book.publication_day._text,
  //       year: +item.book.publication_year._text
  //     }));
  //     list.releaseDates = datesObj;
  //     console.log('id', id);
  const list = booksData;
  console.log('books data', list);
  dispatch(gotBookList(list));
  // }
  // );
};

const initialState = {
  books: [],
  bookList: [],
  currentSeries: [],
  quotes: [],
  dates: []
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_BOOK_LIST:
      return { ...state, bookList: action.list };
    case GOT_CURRENT_SERIES:
      return {
        ...state,
        currentSeries: [...state.currentSeries, action.series]
      };
    case GOT_QUOTES:
      return {
        ...state,
        quotes: action.quotes
      };
    case GOT_DATES:
      return {
        ...state,
        dates: action.dates
      };
    case ADDED_DATES:
      return {
        ...state,
        dates: [...state.dates, action.dates]
      };
    default:
      return state;
  }
};

export default booksReducer;
