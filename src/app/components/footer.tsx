import { useTranslations } from "next-intl";

export default function Footer() {
    const footer = useTranslations("footer");
    return (
        <footer className="w-full border-t p-3 flex justify-center">
            <p className="shadowed-color">{footer("text")}: 04/12/2024</p>
        </footer>
    )
}