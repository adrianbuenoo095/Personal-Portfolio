import Image from "next/image";

interface Props {
    name: string;
    size: number;
}

const thePocmanFace = "/images/pocman_thick_version.png";

const Avatar = ({ name, size }: Props) => {
    return (
        <div className="avatar">
            <Image src={thePocmanFace} alt={name} width={size} height={size} />
        </div>
    );
};

export default Avatar;
