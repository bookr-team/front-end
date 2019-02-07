import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { postReview, getBooks, getReviews } from '../../store/actions';

import BookSingle from  '../../components/BooksComponents/BookSingle';
import ProgressBar from '../../components/LoadingAnimationComponents/ProgressBar';

function BookView(props) {

  if(props.isLoggedIn){

    if (!props.hasLatestBooks) {
      props.getBooks();  // if successful, props.books = [books here!]
    }
    if(!props.hasLatestReviews) {
      props.getReviews();
    }
  
    if(!props.isFetchingBooks && !props.isFetchingReviews) {
      // only render if we have a book & reviews
      // console.log("BookView: ", props.books);
      // console.log(props.match.params.id);
      const book = props.books.find(book => book.id.toString() === props.match.params.id);
      // console.log(book);
      const reviews = props.reviews.filter(review => review.books_id === book.id);
        return (
          <BookSingle 
            book={book} 
            reviews={reviews} 
            postReview={props.postReview}
            userName={props.userName}
            hasLatestReviews={props.hasLatestReviews}
            delete={props.delete}
            isFetchingBooks={props.isFetchingBooks}
            isFetchingReviews={props.isFetchingReviews}
          />
        );
    } else {
      return <ProgressBar />
    }
  } else {
  // not logged in:
    return (
      <Link to="/login" className="login-notice">LOG IN!!</Link>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    reviews: state.reviews,
    hasLatestBooks: state.hasLatestBooks,
    hasLatestReviews: state.hasLatestReviews,
    userName: state.userName,
    isLoggedIn: state.isLoggedIn,
    isFetchingBooks: state.isFetchingBooks,
    isFetchingReviews: state.isFetchingReviews
  }
}

export default connect(
  mapStateToProps,
  {
    postReview,
    getBooks,
    getReviews
  }
)(BookView);