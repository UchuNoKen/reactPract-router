import React from "react";
import { Link } from "react-router-dom";
import Card from "../hoc/Card";
import Auth from "../hoc/Auth";

const Profile = props => {
  const redir = () => {
    // props.history.push("/");
  };

  return (
    <Auth>
      <Card>
        <div>
          <Link to={{ pathname: `${props.match.url}/posts` }}>Take me to /profile/posts</Link>
        </div>
      </Card>
    </Auth>
  );
};

export default Profile;
