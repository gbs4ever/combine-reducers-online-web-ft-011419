import React, { Component } from 'react';
import { addAuthor } from '../actions';
import uuid from 'uuid';
import { connect } from 'react-redux';

export class AuthorInput extends Component {

  state = {
    authorName: '',
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleOnSubmit = event => {
    event.preventDefault();
    const author = {...this.state, id: uuid() };
    //onclick it calls this action 
    console.log(1) 
    this.props.addAuthor(author);
   //clear the input /state 
    this.setState({
      authorName: ''
    });
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="authorName"
            value={this.state.authorName}
            placeholder="author name" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};
///dispatch(addAuthor (author)
export default connect(null, { addAuthor })(AuthorInput);
