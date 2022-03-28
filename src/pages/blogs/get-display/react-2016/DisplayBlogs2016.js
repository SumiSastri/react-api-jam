import React, { Component } from "react";

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
    // do not remove checks the loading message works
  }

  //   custom function to update music genre/ music genre and the search filter results
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

    return !displayPosts.length ? (
      <div>
        <h2>Please wait this page is still loading</h2>
      </div>
    ) : (
      <div className="tc bg navy bg-light-yellow">
        <SearchInput
          className="pa3 b--light-purple bw2 br-pill bg-light-blue"
          label="Search Posts"
          placeholder="Search posts"
          type="search"
          value={searchFilterResults}
          onChange={(event) =>
            this.updateSearchInputs("search input check:", event.target.value)
          }
        />
        {/* Replaced displayed posts with the filtered posts for search filter */}
        <BlogList displayPosts={filteredPosts} />
        {/* <PostList displayPosts={displayPosts} />                 */}
      </div>
    );
  }
}

export default DisplayBlogs2016;
