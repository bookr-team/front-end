import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class AddBookForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      titleInput: "",
      authorInput: "",
      publisherInput: "",
      summaryInput: "",
      inputInvalid: true
    }
  }

  handleInput = (e) => {
    this.setState ({
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
      ! this.state.inputInvalid && this.props.addBook(bookData);
    }
    catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Card>
        <Typography 
          variant="h4"
          style={{ fontFamily: 'aleo' }}
        >
        Add a book
        </Typography>
        <form onSubmit={this.handleAddBook}>
          <TextField
            placeholder="Title"
            name="titleInput"
            value={this.state.titleInput}
            onChange={this.handleInput}
            autoComplete="off"
            style={{ width: '100%' }}
          />
          <TextField
            placeholder="Author"
            name="authorInput"
            value={this.state.authorInput}
            onChange={this.handleInput}
            autoComplete="off"
            style={{ width: '100%' }}
          />
          <TextField
            placeholder="Publisher"
            name="publisherInput"
            value={this.state.publisherInput}
            onChange={this.handleInput}
            autoComplete="off"
            style={{ width: '100%' }}
          />
          <TextField
            placeholder="Summary"
            name="summaryInput"
            value={this.state.summaryInput}
            onChange={this.handleInput}
            autoComplete="off"
            style={{ width: '100%' }}
            multiline
          />
          <Button 
            type="submit" 
            value="Add Book!"
            disabled={this.state.inputInvalid}
            color="primary"
          >
            Add Book!
          </Button>
        </form>
      </Card>
    );
  }
}
    
export default AddBookForm;