import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
    const footer = useTranslations("footer");
    return (
        <footer className="w-full border-t p-3 flex justify-center">
            {/* <p className="shadowed-color">{footer("text")}: 04/12/2024</p> */}
            <a href="https://www.credly.com/badges/52c923c1-5cde-48a3-8d90-a6dd545bcb1f/public_url">
                <Image
                    src="/cloud-practitioner-cert.png"
                    alt="Cloud Practitioner Certificate"
                    width={110}
                    height={110}
                />
            </a>
        </footer>
    )
}