import Image from "next/image";

interface Props {
  person: { name: string };
  size: number;
}

let pocmanFace = "/images/pocman_thick_version.png";

export const Avatar = ({ person, size }: Props) => {
  return (
    <Image
      className="avatar"
      src={pocmanFace}
      alt={person.name}
      width={size}
      height={size}
    />
  );
};
