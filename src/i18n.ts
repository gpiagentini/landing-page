import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["pt", "en"];

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = await requestLocale;
    if (!locales.includes(locale as any)) notFound();
    return {
        messages: (await import(`../public/${locale}/common.json`)).default
    }
})