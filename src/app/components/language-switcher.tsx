'use client'
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";

type LanguageSwitcherProps = {
    locale: string
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value as string;
        const path = pathname.split("/").slice(2).join("/");
        router.push(`/${newLocale}/${path}`)
    }

    return (
        <div>
            <select value={locale} onChange={handleLanguageChange}
                className="bg-background-main p-2">
                <option value="en">English</option>
                <option value="pt">Português</option>
            </select>
        </div>
    )
}