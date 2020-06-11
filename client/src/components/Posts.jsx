import React, { Component } from 'react'
import Post from './Post'
import Search from './Search'
import { AZ, ZA, lowestFirst, highestFirst } from "./Sort"
import Layout from './shared/Layout'
import { getPosts } from '../services/post'



class Posts extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      filterValue: '',
      filteredPosts: null,
      selectValue: 'Featured'
    }
  }

  async componentDidMount() {
    const posts = await getPosts()
    this.setState({ posts })
  }

  handleSearchChange = event => {
    const filter = () => {
      const filteredPosts = this.state.posts.filter(post => {
        return post.name.toLowerCase().includes(this.state.filterValue.toLowerCase())
      })
      this.setState({ filteredPosts })
    }
    this.setState({ filterValue: event.target.value }, filter)
  }

  handleSortChange = event => {
    this.setState({ selectValue: event.target.value });
    let input = event.target.value; // a-z
    const { posts } = this.state;
    switch (input) {
      case "name-ascending":
        this.setState({
          posts: AZ(posts)
        });
        break;
      case "name-descending":
        this.setState({
          posts: ZA(posts)
        });
        break;
      case "price-ascending":
        this.setState({
          posts: lowestFirst(posts)
        });
        break;
      case "price-descending":
        this.setState({
          posts: highestFirst(posts)
        });
        break;
      default:
        break
    }
  }

  handleSubmit = event => event.preventDefault()

  render() {
    const posts = this.state.filteredPosts ? this.state.filteredPosts : this.state.posts
    const POSTS = posts.map((post, index) =>
      <Post _id={post._id} name={post.name} author={post.author} imgURL={post.imgURL} description={post.description} subTitle={post.sub_title} like={post.like} createdAt={post.createdAt} key={index} />
    )

    

    return (

      <Layout user={this.props.user}>
        <div className="rows">
          <div className="side">
            <Search onSubmit={this.handleSubmit} value={this.state.filterValue} onChange={this.handleSearchChange} />
            <form className="sort-container" onSubmit={this.handleSubmit}>
              <label className="sortBy" htmlFor="sort">SORT BY:</label>

              <select className="sort" value={this.state.selectValue} onChange={this.handleSortChange}>
                <option className="option" value="name-ascending" >&nbsp; Alphabetically, A-Z &nbsp;</option>
                <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
                <option value="price-ascending">&nbsp; Price, low to high &nbsp;</option>
                <option value="price-descending">&nbsp; Price, high to low &nbsp;</option>
              </select>
            </form>

           

          </div>
          <div className="main">


            <div className="posts">

              {POSTS}
            </div>
          </div>

        </div>
      </Layout>


    )
  }
}

export default Posts