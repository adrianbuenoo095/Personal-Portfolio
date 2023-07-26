import { Avatar } from "./common/Avatar";

const Profile = () => {
  return (
    <Avatar
      size={400}
      person={{
        name: "The pocman",
      }}
    />
  );
};

export default Profile;
