import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";


export default function AuthCard({children, title, description, urlFooter, urlLink}: {children: React.ReactNode, title: string, description: string, urlFooter: string, urlLink: string}) {
    

    return (
        <section className="w-screen h-screen flex justify-center lg:justify-end items-center">
            <Card className=" w-[calc(100%-40px)] sm:w-[70%] lg:w-[40%] lg:h-full shadow-xl lg:rounded-none">
                
                
                <CardBody className="p-5 flex justify-center items-center gap-5">
                    <h1 className="text-lg font-bold text-primary">{title}</h1>

                    <Image
                        alt="nextui logo"
                        height={100}
                        radius="sm"
                        src="/imgs/disruptiveLogo.png"
                        width={100}
                    />
                     <div className="flex flex-col text-start">
                        <p className="text-small text-default-500">{description}</p>
                    </div>
                    {children}
                    <Link
                        // showAnchorIcon
                        href={urlLink}
                    >
                        {urlFooter}
                    </Link>
                </CardBody>
             
                
            </Card>
        </section>
    )
}