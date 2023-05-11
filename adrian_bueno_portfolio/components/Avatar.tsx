type Props = {
  person: {};
  size: number;
};

export const Avatar = ({ person, size }: Props) => {
  return (
    <img className="avatar" src="" alt="The pocman" width={100} height={100} />
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
