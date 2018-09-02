    import axios from 'axios';
    import React, { Component } from 'react';
    import { Link } from 'react-router-dom';

    class BlogsList extends Component {
      constructor () {
        super()
        this.state = {
          blogs: []
        }
      }

      componentDidMount () {
        axios.get('/api/blogs').then(response => {
          console.log(response);
          this.setState({
            blogs: response.data
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }

      render () {
        const { blogs } = this.state
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>All Blogs</div>
                  <div className='card-body'>
                    <ul className='list-group list-group-flush'>
                      {blogs.map(blog => (
                        <Link
                          className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                          to={`/${blog.id}`}
                          key={blog.id}
                        >
                          {blog.name}
                          <h3>
                            {blog.title}
                          </h3>
                          <div>{blog.body}</div>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

    export default BlogsList