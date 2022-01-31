import stl from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={stl.profile}>
      <div className={stl.description}>
        <img src={avatar} alt={username} className={stl.avatar} />
        <p className={stl.username}>{username}</p>
        <p className={stl.tag}>@{tag}</p>
        <p className={stl.location}>{location}</p>
      </div>
      <ul className={stl.stats}>
        <li className={stl.profileLi}>
          <span className={stl.label}>Followers</span>
          <span className={stl.quantity}>{stats.followers}</span>
        </li>
        <li className={stl.profileLi}>
          <span className={stl.label}>Views</span>
          <span className={stl.quantity}>{stats.views}</span>
        </li>
        <li className={stl.profileLi}>
          <span className={stl.label}>Likes</span>
          <span className={stl.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
