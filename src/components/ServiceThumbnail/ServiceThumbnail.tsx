import Image from "next/image";
import Link from "next/link";

type ServiceThumbnailProps = {
    imgPath: string
    link: string
    title: string
}

export const ServiceThumbnail = ({imgPath, link, title}: ServiceThumbnailProps) => {
    return (
        <Link href={link} className="">
            <Image src={imgPath} alt={title} width={80} height={80}
                   className="mx-auto"/>

            <h4 className="text-xl font-bold mt-4">{title}</h4>
        </Link>
    )
}
