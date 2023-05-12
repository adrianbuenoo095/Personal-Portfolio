type Props = {
  person: { name: string; imageId: string };
  size: number;
};

let pocman = "assets/images/pocman_thick_version.png";

export const Avatar = ({ person, size }: Props) => {
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

export const Profile = () => {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: "The pocman",
          imageId: "rdjkf2",
        }}
      />
    </div>
  );
};
