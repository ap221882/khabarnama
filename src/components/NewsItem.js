import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <span className="badge bg-dark">{source}</span>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author}{" "}
                <img
                  className="mx-1"
                  style={{ width: "22px", height: "22px" }}
                  // src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/53546/nine-o-clock-emoji-clipart-md.png"
                  src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/42963/seven-o-clock-emoji-clipart-md.png"
                  alt="on"
                />{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              className="link-primary"
              style={{ backgroundColor: "#50525d" }}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              View Full Coverage
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
