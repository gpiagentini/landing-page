import Link from "next/link";

type NavbarItemType = {
    title: string;
    locale: string;
    path: string;
}

export default function NavbarItem({ title, locale, path }: NavbarItemType) {
    return (
        <Link className="text-base transition ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
            href={`/${locale}/${path}`}> {title} </Link>
    )
}