// change imports for Hooks
import React, { useState, useEffect } from "react";

import "../../index.css";
import { contentUrl } from "../../constants/listOfURLs";
import BlogList from "./BlogList";
import ScrollyBar from "../../components/ScrollyBar";
import SearchInput from "../../components/SearchInput";
import ErrorBoundary from "../../components/ErrorBoundary";

const BlogsIndexPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //  call useEffect to get data instead of componentDidMount
  useEffect(() => {
    const fetchBlogs = async () => {
      await fetch(contentUrl)
        .then((response) => response.json())
        .then((responseData) => setBlogs(responseData));
      setIsLoading(false);
    };
    fetchBlogs();
  }, []);

  // this key word removed from utility functions - these can be set to a state array but this is easier
  const filteredBlogs = blogs.filter((blogPost) => {
    return blogPost.body.toLowerCase().includes(searchField.toLowerCase());
  });

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    !isLoading && (
      <div className="tc bg dark-blue bg-light-red">
        <h1>Robot Friends with React Hooks</h1>
        {/* don't change order as search box needs to be outside the scroll and error */}
        <SearchInput
          className="pa3 b--hot-pink bw2 br-pill bg-light-yellow"
          type="search"
          placeholder="Search friends"
          onChange={onSearchChange}
        />
        <ScrollyBar>
          <ErrorBoundary>
            <BlogList blogs={filteredBlogs} />
          </ErrorBoundary>
        </ScrollyBar>
      </div>
    )
  );
};
export default BlogsIndexPage;
