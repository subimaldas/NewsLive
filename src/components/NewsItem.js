import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (

            <div className="my-3">
                <div className="card" >

                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: 0
                    }
                    }>
                        <span className="badge rounded-pill bg-danger ">
                            {source}
                        </span>
                    </div>


                    <img className="card-img-top" src={!imageUrl ? "https://images.unsplash.com/photo-1675891231704-1abf8f3d2fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" : imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted"> By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Open to Read</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem