import { useTranslations } from "next-intl";
import NavbarItem from "./navbar-item";
import LanguageSwitcher from "./language-switcher";
import React from "react";

type NavbarProps = {
    locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
    const navbarTabs = useTranslations("navbarTabs");
    const environment = process.env.NODE_ENV!;
    return (
        <React.Fragment>
            <nav className="relative flex flex-row w-full flex-wrap border-b sticky top-0 bg-background-main z-20 py-5 px-5 gap-5">
                <div className="grow flex flex-row gap-x-14 sm:justify-start justify-center items-center">
                    <NavbarItem path="/" locale={locale} title={navbarTabs("homePage")}></NavbarItem>
                    <NavbarItem path="about" locale={locale} title={navbarTabs("about")}></NavbarItem>
                    <NavbarItem path="contacts" locale={locale} title={navbarTabs("contacts")}></NavbarItem>
                </div>
                <div className="grow lg:text-end text-center">
                    <LanguageSwitcher locale={locale}></LanguageSwitcher>
                </div>
            </nav>
            {
                environment === "development" ?
                <div className="w-full border-b p-2 text-center shadowed-color text-2xl">Development Environment</div>
                : ""
            }
        </React.Fragment>
    )
}