import Image from "next/image";

interface Props {
    name: string;
    size: number;
}

const pocmanFace = "/images/pocman_thick_version.png";

const Avatar = ({ size, name }: Props) => {
    return (
        <div className="avatar">
            <Image src={pocmanFace} alt={name} width={size} height={size} />
        </div>
    );
};

export default Avatar;
