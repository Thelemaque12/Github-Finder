import React, { Component } from "react";

export class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className="card">
        <img
          src={avatar_url}
          alt=""
          className="rounded-circle"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a
            href={html_url}
            className="btn btn-dark btn-sm my-1 shadow-none"
            target="_blank"
          >
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
