import React from "react";

class Search extends React.Component {
  state = { term: "" };
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
onFormSubmit = (event)=>{
    event.preventDefault()
    this.props.onTermSubmit(this.state.term)
}
  render() {
    return (
      <div className='d-flex justify-content-center'>
      <form onSubmit={this.onFormSubmit} className="form mt-3" style={{width: 400}}>
        <input
          type="text"
          className="form-control "
          placeholder='write city'
          onChange={this.onInputChange}
        />
      </form>
      </div>
    );
  }
}

export default Search;
