import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

import BookCard from './BookCard';
import ReviewForm from '../ReviewsComponents/ReviewForm';

// sources:
// https://material-ui.com/demos/progress/
// https://material-ui.com/demos/dialogs/

class BookSingle extends React.Component {
    constructor(props) {
        super();
        this.state = {
            reviewDialog: false
        }
    }

    handleOpen = () => {
        this.setState({ reviewDialog: true });
    }

    handleClose = () => {
        this.setState({ reviewDialog: false });
    }

    render() {

        const DialogStyle = {
            // transform: `translate(60vh, 30vh)`,
            // width: `33%`
        };

        // console.log("fetching books: ", this.props.isFetchingBooks);
        // console.log("fetching reviews: ", this.props.isFetchingReviews);

        if (!this.props.isFetchingBooks && !this.props.isFetchingReviews) {
            // only render if we have a book & reviews
            return (
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <Link to="/loggedin">
                            <Button
                                value="Back to Books"
                                color="primary"
                                children="Back to Books"
                                style={{ fontFamily: 'aleo' }}
                            />
                        </Link>
                        <BookCard
                            book={this.props.book}
                            reviews={this.props.reviews}
                            delete={this.props.delete}
                            isFetchingBooks={this.props.isFetchingBooks}
                            isFetchingReviews={this.props.isFetchingReviews}
                            userName={this.props.userName}
                            dispReviews={true}
                        />
                        <IconButton color="primary" onClick={this.handleOpen}>
                            <AddIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="primary"
                        // style={{ maxWidth: '400px' }}
                        >
                            Add a Review!
            </Typography>
                        <Dialog
                            open={this.state.reviewDialog}
                            onClose={this.handleClose}
                        >
                            <div style={DialogStyle}>
                                <ReviewForm
                                    userName={this.props.userName}
                                    bookID={this.props.book.id}
                                    postReview={this.props.postReview}
                                    closeDialog={this.handleClose}
                                />
                            </div>
                        </Dialog>
                    </Grid>
                </Grid>
            );
        } else {
            return "";
        }
    }
}

export default BookSingle;