import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../images/defaultAvatar.png";

function Profile(prop) {
  const avatar = prop.avatar === "" ? defaultAvatar : prop.avatar;
  return (
    <div className="profile">
      <div
        className="profile__avatar"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
