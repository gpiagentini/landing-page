'use client'
import MatrixEffect from "../components/matrix-effect";
import GlitchText from "../components/glitch-text";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "../components/language-switcher";
import React, { useState } from "react";
import { PageProps } from "@/app/types/pageProps";

export default function Page({ params }: PageProps) {
  const homePageContent = useTranslations("homePage");
  const [locale, setLocale] = useState<string>("");
  params.then((p) => setLocale(p.locale));
  return (
    <div className="relative w-full h-screen flex justify-center align-center">
      <MatrixEffect />
      <div className="flex flex-col justify-center items-center h-screen p-5 gap-3">
        <GlitchText>Gabriel Martins Teixeira Piagentini</GlitchText>
        <LanguageSwitcher locale={locale}></LanguageSwitcher>
        <div className="grid grid-cols-2 gap-5">
          <Link className="border-2 border-green-900 p-3 rounded-md text-center transition hover:scale-95" href={`/${locale}/about`}> {homePageContent("resumeButton")} </Link>
          <Link className="border-2 border-green-900 p-3 rounded-md text-center transition hover:scale-95" href={`/${locale}/contacts`}> {homePageContent("contactButton")} </Link>
        </div>
      </div>
    </div>
  );
}
