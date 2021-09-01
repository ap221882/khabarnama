import React, { Component } from "react";
import PropTypes from "prop-types";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = { articles: [], loading: false, page: 1 };
    document.title = this.props.title;
  }

  handlePreviousClick;

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f096cc4f663c4c8ea5a080d0ec79bfe3&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalArticles: parsedData.totalResults,
    //   loading: false,
    // });
    this.updatePage();
  }
  //runs after render()and render() runs after constructor
  updatePage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f096cc4f663c4c8ea5a080d0ec79bfe3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handlePreviousClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
    //   this.props.category
    // }&apiKey=f096cc4f663c4c8ea5a080d0ec79bfe3&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      //   articles: parsedData.articles,
      //   loading: false,
    });
    this.updatePage();
  };

  handleNextClick = async () => {
    // console.log("iierie");
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalArticles / this.props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=f096cc4f663c4c8ea5a080d0ec79bfe3&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //     articles: parsedData.articles,
    //     loading: false,
    // }
    this.setState({
      page: this.state.page + 1,
    });
    this.updatePage();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 style={{ margin: "24px 0px" }} className="text-center">
          Khabarnama- Top {this.props.category} Headlines
        </h1>
        <div
          style={{
            fontFamily: "georgia,Times New Roman,serif",
            marginBottom: "40px",
          }}
          className="text-center"
        >
          Democracy dies in darkness
        </div>
        <div className="row">
          {this.state.loading && <Spinner />}
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div
                  className="col-md-4 "
                  key={element.url ? element.url : "https://www.aajtak.com"}
                >
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ""
                    }
                    author={element.author ? element.author : "Unknown"}
                    source={
                      element.source.name
                        ? element.source.name
                        : "Unknown source"
                    }
                    date={
                      element.publishedAt ? element.publishedAt : "not known"
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.borouge.com/MediaCentre/Images1/News-Website-banner-V1.JPG"
                    }
                    newsUrl={element.url ? element.url : null}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePreviousClick}
            type="button"
            className="btn btn-secondary mx -2"
          >
            &larr; Previous
          </button>
          <button
            onClick={this.handleNextClick}
            type="button"
            className="btn btn-secondary mx -2"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
