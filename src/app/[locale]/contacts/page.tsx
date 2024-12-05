'use client'

import MatrixEffect from "@/app/components/matrix-effect";
import Navbar from "@/app/components/navbar";
import { sendPostRequest } from "@/app/services/httpService";
import { PageProps } from "@/app/types/pageProps";
import { useTranslations } from "next-intl";
import React, { FormEvent, useState } from "react";

export default function Page({ params }: PageProps) {
    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState<boolean>(false);
    const [locale, setLocale] = useState<string>("");
    params.then((p) => setLocale(p.locale));
    const contactMePage = useTranslations("contactMePage");

    const displayResponseMessage = (message: string, timer?: number) => {
        if (timer == null) timer = 5000;
        setResponseMessage(message)
        setTimeout(() => {
            setResponseMessage("");
        }, timer)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data: FormDataType = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            subject: formData.get('subject') as string,
            message: formData.get('message') as string,
        };
        setLoading(true);
        try {
            const responseString = await sendPostRequest(data);
            displayResponseMessage(responseString);
        } catch (error) {
            console.log(error);
            displayResponseMessage("Error during e-mail request");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="relative h-screen">
            <MatrixEffect />
            <Navbar locale={locale}></Navbar>
            <main className=" w-full h-4/5 place-content-center">
                <div className="flex flex-col justify-center items-center md:border-y gap-5 py-20 bg-background-main">
                    <p className="font-rubik text-4xl col-span-2"> {contactMePage("title")} </p>
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center items-center gap-10">
                        <div>
                            <p> <b>Phone</b> </p>
                            <p className="pl-4"> +55 (11) 99511-7433 </p>
                            <br />
                            <p> <b>E-mail</b> </p>
                            <p className="pl-4"> gmtpiagentini@gmail.com </p>
                            <br />
                            <div className="pt-3 grid grid-cols-3">
                                <a className="transition hover:scale-95" href="https://www.linkedin.com/in/gpiagentini/?locale=en_US">
                                    <img src="/linkedin_icon.svg" />
                                </a>
                                <a className="transition hover:scale-95" href="https://github.com/gpiagentini">
                                    <img src="/github_icon.svg" />
                                </a>
                                <a className="transition hover:scale-95" href="mailto: gmtpiagentini@gmail.com">
                                    <img src="/email_icon.svg" />
                                </a>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="p-5 grid grid-cols-2 gap-6 mt-5 text-center">
                            <input required name="name" className="border bg-background-main bg-none z-10 p-2 rounded-full" placeholder={contactMePage("nameInput")} />
                            <input required name="email" className="border bg-background-main z-10 p-2 rounded-full" placeholder={contactMePage("emailInput")} />
                            <input required name="subject" className="border bg-background-main z-10 p-2 rounded-full col-span-2" placeholder={contactMePage("subjectInput")} />
                            <textarea required name="message" className="border bg-background-main z-10 col-span-2 p-2 rounded" placeholder={contactMePage("messageInput")}></textarea>
                            <div className="col-span-2 z-10 text-right">
                                <button className="bg-background-main border-2 border-green-900 px-10 py-3 rounded-full transition hover:scale-95" type="submit">
                                    {loading ? <div className="border-t rounded-full w-5 h-5 animate-spin"></div> : contactMePage("sendButton")}
                                </button>
                            </div>
                        </form>
                    </div>
                    {responseMessage && <div className="mt-4 text-center">{responseMessage}</div>}
                </div>
            </main>
        </div>
    );
}