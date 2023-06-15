import Image from "next/image";

type Props = {
  person: { name: string; imageId: string };
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
