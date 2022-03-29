import React, { Component } from "react";

import "../../../styles/containerStyles.css";
import BlogList from "../get-display/BlogList";
import SearchInput from "../../../components/SearchInput";
import CreateBlogModal from "./CreateBlogModal";

// CONTENT PAGES
// FOR REF - USER OBJECT
// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// },
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

  // custom event handlers (update inputs)
  // userSearchInput = React.createRef(); REFs usedto grab a single element on the DOM
  // refs not recommended
  handleSearchUpdates = (key, value) => {
    if (key === "searchFilterResults") {
      this.setState({ error: null, [key]: value }, () => {
        // console.log("ERROR CHECK", this);
        this.setState({
          searchFilterResults: this.state.searchFilterResults,
        });
        // console.log("SEARCH CHECK", this.state.searchFilterResults);
      });
    } else {
      this.setState({ error: null, [key]: value });
    }
  };
  // custom event handlers (clicks)
  handleDeleteClick = () => {
    const postId = `https://jsonplaceholder.typicode.com/posts/${this.state.displayPosts.id}`;
    fetch(postId, {
      method: "DELETE",
    });
  };

  render() {
    // const { displayPosts } = this.state
    // refactor and replace displayPosts with filteredPosts that you can search
    const { displayPosts, searchFilterResults } = this.state;
    //  console.log("this renderState:", this);
    // EVENT HANDLERS ARE BOUND TO THE STATE OBJECT BUT NOT THE STATE OBJECT

    // FILTER MULTIPLE ELEMENTS WITH OR NOT AND
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
        <section className="grid-1">
          <SearchInput
            className="pa2 b--light-purple bw3 br-pill bg-light-blue"
            label="Search Posts"
            placeholder="Search posts"
            // ref={this.userSearchInput}
            type="search"
            value={searchFilterResults}
            onChange={(event) =>
              this.handleSearchUpdates(
                "searchFilterResults",
                event.target.value
              )
            }
          />
          <CreateBlogModal className="f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib dark-green" />
          <hr />
        </section>
        <article>
          <BlogList
            onClick={this.handleDeleteClick}
            displayPosts={filteredPosts}
          />
        </article>
      </div>
    );
  }
}

export default DisplayBlogs2016;
