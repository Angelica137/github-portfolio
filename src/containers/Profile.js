import React, { Component } from "react";
import styled from "styled-components";
import Link from "../components/Link/Link";
import List from "../components/List/List";

const ProfileWrapper = styled.div`
  width: 50%;
  margin: 10px auto;
`;

const Avatar = styled.img`
  width: 150px;
`;

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

    const items = [
      {
        label: "html_url",
        value: <Link url={data.html_url} title="Github Url" />,
      },
      { label: "repos_url", value: data.repos_url },
      { labe: "name", value: data.name },
      { label: "company", value: data.company },
      { label: "locaion", value: data.location },
      { label: "bio", value: data.bio },
    ];
    return (
      <ProfileWrapper>
        <Avatar src={data.avatar_url} alt="avatar" />
        <List items={items} />
      </ProfileWrapper>
    );
  }
}

export default Profile;
