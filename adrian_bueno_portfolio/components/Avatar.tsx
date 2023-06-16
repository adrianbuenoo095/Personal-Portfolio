import Image from "next/image";

type Props = {
  person: { name: string };
  size: number;
};

const Avatar = ({ person, size }: Props) => {
  return (
    <Image
      className="avatar"
      src="/images/pocman_thick_version.png"
      alt={person.name}
      width={size}
      height={size}
    />
  );
};

const Profile = () => {
  return (
    <>
      <Avatar
        size={400}
        person={{
          name: "The pocman",
        }}
      />
    </>
  );
};

export default Profile;
