import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {


  static defaultProps = {
    country: "in",
    pageSize: 6,
    caterogy: "technology",
  }


  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    caterogy: PropTypes.string,
  };


  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsLive `;
  }


  async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=63272e03c7624d0482e61ca5085abf95&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(60);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }


  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=63272e03c7624d0482e61ca5085abf95&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    })
  };


  render() {
    return (
      <>

        <h1 className="text-center" style={{ margin: '35px 0px' }} >NewsLive- Top {this.capitalizeFirstLetter(this.props.category)} Headlines  </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >

          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {

                return <div className="col-md-4" key={element.url} >
                  {/* key is used to fix the console error and to identify uniquely */}
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>

          </div>
        </InfiniteScroll>

      </>
    )
  }
}

export default News