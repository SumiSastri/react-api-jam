import React, { Component } from "react";

import "../../../../styles/containerStyles.css";
import BlogList from "../BlogList";
import SearchInput from "../../../../components/SearchInput";

// CONTENT PAGES
export class DisplayBlogs2016 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPosts: [],
      searchFilterResults: "",
      loading: false,
      error: null,
    };
    this.initialState = this.state;
  }

  // On mount load data with an API call and set state to the posts array
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseData) =>
        //   the response from the api is set in the object displayPosts
        this.setState({ displayPosts: responseData.slice(0, 9) })
      );
    // .then((posts) => this.setState({}));
    // do not remove checks the loading message works - or use setTimeOut
  }

  //   custom function to updates search results
  updateSearchInputs = (key, value) => {
    if (key === "searchFilterResults") {
      this.setState({ error: null, [key]: value }, () => {
        //console.log("this noErrorState:", this);
        this.setState({
          searchFilterResults: this.state.searchFilterResults,
        });
        // console.log("this updatedFilter/UserState:", this);
      });
    } else {
      this.setState({ error: null, [key]: value });
    }
  };

  render() {
    // const { displayPosts } = this.state
    // refactor and replace displayPosts with filteredPosts that you can search
    const { displayPosts, searchFilterResults } = this.state;
    //  console.log("this renderState:", this);

    const filteredPosts = displayPosts.filter((displayPosts) => {
      return (
        displayPosts.body
          .toLowerCase()
          .includes(searchFilterResults.toLowerCase()) ||
        displayPosts.title
          .toLowerCase()
          .includes(searchFilterResults.toLowerCase())
      );
    });

    const handleDeleteClick = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${displayPosts.id}`, {
        method: "DELETE",
      });
    };

    return !displayPosts.length ? (
      <div>
        <h2>Please wait this page is still loading</h2>
      </div>
    ) : (
      <div className="tc bg navy bg-light-yellow">
        <div className="grid-1">
          <SearchInput
            className="pa2 b--light-purple bw3 br-pill bg-light-blue"
            label="Search Posts"
            placeholder="Search posts"
            type="search"
            value={searchFilterResults}
            onChange={(event) =>
              this.updateSearchInputs("searchFilterResults", event.target.value)
            }
          />
          <button className="f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib dark-green">
            Add more blogs
          </button>
          <hr />
        </div>
        <BlogList onClick={handleDeleteClick} displayPosts={filteredPosts} />
      </div>
    );
  }
}

export default DisplayBlogs2016;
