import Image from "next/image";

interface Props {
    name: string;
}

const thePocmanFace = "/images/pocman_thick_version.png";

const Avatar = ({ name }: Props) => {
    return (
        <div className="avatar">
            <Image src={thePocmanFace} alt={name} />
        </div>
    );
};

export default Avatar;
