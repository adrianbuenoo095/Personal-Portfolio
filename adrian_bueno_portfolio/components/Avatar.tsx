type Props = {
  person: { name: string; imageId: string };
  size: number;
};

let pocman = "assets/images/pocman_thick_version.png";

const Avatar = ({ person, size }: Props) => {
  return (
    <img
      className="avatar"
      src={pocman}
      alt={person.name}
      width={size}
      height={size}
    />
  );
};

const Profile = () => {
  return (
    <div>
      <Avatar
        size={400}
        person={{
          name: "The pocman",
          imageId: "rdjkf2",
        }}
      />
    </div>
  );
};

export default Profile;