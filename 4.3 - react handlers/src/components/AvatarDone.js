import propTypes from "prop-types";

const Avatar = ({ photo, name, jumlahFans, ...rest }) => {
  const handleAvatarClick = () => {
    console.log(name);
  };

  const handleNameClick = (e) => {
    e.stopPropagation();
    console.log(jumlahFans);
  };

  return (
    <div onClick={handleAvatarClick}>
      <img src={photo} />
      <h2 onClick={handleNameClick}>
        {name}({jumlahFans})
      </h2>
    </div>
  );
};

Avatar.propTypes = {
  photo: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  jumlahFans: propTypes.string.isRequired
};

export default Avatar;
