'use client'

import Footer from "@/app/components/footer";
import MatrixEffect from "@/app/components/matrix-effect";
import Navbar from "@/app/components/navbar";
import ToolsCard from "@/app/components/tools-card";
import { PageProps } from "@/app/types/pageProps";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

function downloadPDF() {
    const link = document.createElement('a');
    link.href = `cv.pdf`;
    link.download = 'gabriel_piagentini.pdf';
    link.click();
}



export default function Page({ params }: PageProps) {
    const [showContent, setShowContent] = useState<boolean>(false);
    const [locale, setLocale] = useState<string>("");
    params.then((p) => setLocale(p.locale));
    const aboutMeSection = useTranslations("aboutMeSection");
    const professionalCarrerContent = useTranslations("professionalCarrerSection");
    const warrenContent = useTranslations("warren");
    const backEndContent = useTranslations("backEndStack");
    const frontEndContent = useTranslations("frontEndStack");
    const databaseContent = useTranslations("databases");
    const cloudAndToolsContent = useTranslations("cloudAndTools");
    const educationSection = useTranslations("educationSection");
    const graduationContent = useTranslations("graduation");
    const postGraduationContent = useTranslations("postGraduation");


    return (
        <div className="relative h-screen">
            <MatrixEffect />
            <Navbar locale={locale}></Navbar>
            <main className="flex flex-col justify-start items-center p-2 w-100">
                <section id="about-me" className="flex flex-col p-5 w-4/5 wrap">
                    <p className="text-3xl font-rubik">{aboutMeSection("title")}</p>
                    <p className="text-5xl font-rubik"><strong>{aboutMeSection("titleHighlight")}</strong></p>
                    <br />
                    <div className="flex md:flex-row flex-col justify-center items-center gap-10">
                        <div className="relative flex justify-center items-center h-40 w-40">
                            <div className="absolute rounded-full h-full w-full border-[7px] border-green-900 top-3 right-3"></div>
                            <div className="relative rounded-full overflow-hidden h-40 w-40">
                                <Image
                                    src="/profile.jpg"
                                    alt="Gabriel's profile photo"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                        <div>
                            {
                                aboutMeSection("description").split("|").map((paragraph: string, index: number) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <p key={index}> {paragraph} </p>
                                            <br />
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="self-center p-3">
                        <button className="border-2 border-green-900 p-3 rounded-lg transition hover:scale-95"
                            onClick={() => downloadPDF()}>
                            {aboutMeSection("downloadBtn")}
                        </button>
                    </div>
                </section>
                <section id="technical-habilites" className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 w-4/5 sm:p-5">
                    <ToolsCard title={backEndContent("title")} tools={backEndContent("tools")}></ToolsCard>
                    <ToolsCard title={frontEndContent("title")} tools={frontEndContent("tools")}></ToolsCard>
                    <ToolsCard title={databaseContent("title")} tools={databaseContent("tools")}></ToolsCard>
                    <ToolsCard title={cloudAndToolsContent("title")} tools={cloudAndToolsContent("tools")}></ToolsCard>
                </section>
                <br />
                <section id="professional-carrer" className="flex flex-col w-4/5 sm:p-5">
                    <p className="self-center font-rubik text-2xl">{professionalCarrerContent("title")}</p>
                    <br />
                    <div className="grid grid-cols-1 w-full gap-10 z-10">
                        <div className="p-2 border rounded-lg place-content-center select-none hover:bg-green-800/80 cursor-pointer bg-background-main"
                            onClick={() => setShowContent(!showContent)}>
                            <div className="text-center">
                                <p>Renascença DTVM | Warren Investimentos</p>
                                <p className="text-sm shadowed-color">{warrenContent("startDate")} - {warrenContent("endDate")} </p>
                                <p className="text-sm shadowed-color"> Software Engineer II </p>
                            </div>
                            <div className={`overflow-hidden transition-[max-height] duration-700  ${showContent ? "max-h-[800px]" : "max-h-0"}`}>
                                <ul className="list-disc align-left mt-2 pl-5">
                                    {
                                        warrenContent("activities").split("|").map((activity: string, index: number) => {
                                            return <li key={index}>{activity}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="education" className="flex flex-col p-5 w-4/5">
                    <p className="self-center font-rubik text-2xl">{educationSection("title")}</p>
                    <br />
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 z-10 ">
                        <div className="border sm:rounded-full p-3 text-center">
                            <p><b>{postGraduationContent("title")}</b></p>
                            <p className="md:text-sm shadowed-color">{postGraduationContent("university")} | {postGraduationContent("type")}</p>
                            <p className="md:text-sm shadowed-color">{postGraduationContent("startDate")} - {postGraduationContent("endDate")}</p>
                        </div>
                        <div className="border sm:rounded-full p-3 text-center">
                            <p><b>{graduationContent("title")}</b></p>
                            <p className="md:text-sm shadowed-color">{graduationContent("university")} | {graduationContent("type")}</p>
                            <p className="md:text-sm shadowed-color">{graduationContent("startDate")} - {graduationContent("endDate")}</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    );
}
