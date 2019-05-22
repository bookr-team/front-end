import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const emptyBookForm = {
  titleInput: "",
  authorInput: "",
  publisherInput: "",
  summaryInput: "",
  inputInvalid: true
}

class AddBookForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ...emptyBookForm,
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => this.validateInput());
  }

  validateInput = () => {
    // console.log("validating input: ", this.state.reviewerInput;
    if (
      this.state.titleInput
      && this.state.authorInput
      && this.state.publisherInput
    ) {
      this.setState({
        inputInvalid: false
      });
    } else {
      this.setState({
        inputInvalid: true
      });
    }
  }

  handleAddBook = (e) => {
    e.preventDefault();
    const bookData = {
      title: this.state.titleInput,
      author: this.state.authorInput,
      publisher: this.state.publisherInput,
      summary: this.state.summaryInput
    };
    try {
      console.log("add book: ", bookData);
      !this.state.inputInvalid && this.props.addBook(bookData);
    }
    catch (err) {
      console.log(err);
      return;
    }
    this.setState({
      ...emptyBookForm
    });
    this.props.closeDialog();
  }

  render() {
    return (
      <Grid>
        <Card style={{ padding: '20px 40px' }}>
          <Typography
            variant="h4"
            style={{ fontFamily: 'aleo' }}
          >
            Add a book
          </Typography>
          <form onSubmit={this.handleAddBook}>
            <TextField
              required
              placeholder="Title"
              label="Title"
              name="titleInput"
              value={this.state.titleInput}
              onChange={this.handleInput}
              autoComplete="off"
              style={{ width: '100%' }}
            />
            <TextField
              required
              placeholder="Author"
              label="Author"
              name="authorInput"
              value={this.state.authorInput}
              onChange={this.handleInput}
              autoComplete="off"
              style={{ width: '100%' }}
            />
            <TextField
              required
              placeholder="Publisher"
              label="Publisher"
              name="publisherInput"
              value={this.state.publisherInput}
              onChange={this.handleInput}
              autoComplete="off"
              style={{ width: '100%' }}
            />
            <TextField
              placeholder="Summary"
              label="Summary"
              name="summaryInput"
              value={this.state.summaryInput}
              onChange={this.handleInput}
              autoComplete="off"
              style={{ width: '100%' }}
              multiline
            />
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <Button
                  type="submit"
                  value="Add Book!"
                  disabled={this.state.inputInvalid}
                  color="primary"
                  style={{ "width": "100%" }}
                >
                  Add Book!
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={() => this.props.closeDialog()}
                  color="secondary"
                  style={{ "width": "100%" }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    );
  }
}

export default AddBookForm;