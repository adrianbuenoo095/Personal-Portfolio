import Image from "next/image";

interface Props {
  name: string;
  size: number;
  id?: number;
}

const pocmanFace = "/images/pacman_thick_version.png";

const Avatar = ({ size, name }: Props) => {
  return (
    <div className="avatar">
      <Image src={pocmanFace} alt={name} width={size} height={size} />
    </div>
  );
};

export default Avatar;
