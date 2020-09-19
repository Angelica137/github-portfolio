import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true,
    };
  }
  async componentDidMount() {
    const profile = await fetch("https://api.github.com/users/octocat");
    const profileJSON = await profile.json();

    if (profileJSON) {
      this.setState({
        data: profileJSON,
        loading: false,
      });
    }
  }
  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul>
          <li>avatar_url: {data.avatar_url}</li>
          <li>avatar_url: {data.html_url}</li>
          <li>avatar_url: {data.repos_url}</li>
          <li>avatar_url: {data.name}</li>
          <li>avatar_url: {data.company}</li>
          <li>avatar_url: {data.location}</li>
          <li>avatar_url: {data.email}</li>
          <li>avatar_url: {data.bio}</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
