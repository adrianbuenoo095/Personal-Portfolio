import Image from "next/image";

interface Props {
  person: { name: string };
  size: number;
}

interface Person {
  name: string;
  age: number;
}

let pocmanFace = "/images/pocman_thick_version.png";

export const Avatar = ({ person, size }: Props) => {
  const { name } = person;

  return (
    <Image
      className="avatar"
      src={pocmanFace}
      alt={name}
      width={size}
      height={size}
    />
  );
};
