import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";


export default function AuthCard({children, title, description, urlFooter, urlLink}: {children: React.ReactNode, title: string, description: string, urlFooter: string, urlLink: string}) {
    

    return (
        <section className="w-screen h-screen flex justify-center items-center">
            <Card className="max-w-[400px] md:min-w-[700px] shadow-xl">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/imgs/innminds.jpeg"
                        width={40}
                    />
                    <div className="flex flex-col text-start">
                        <p className="text-md">{title}</p>
                        <p className="text-small text-default-500">{description}</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody className="p-5">
                    {children}
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        showAnchorIcon
                        href={urlLink}
                    >
                        {urlFooter}
                    </Link>
                </CardFooter>
            </Card>
        </section>
    )
}