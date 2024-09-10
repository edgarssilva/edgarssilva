import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "~/components/project-card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

import nexusAgenda from "~/../assets/nexus-agenda.png";

export default function HomePage() {
    return (
        <main className="mt-6">
            <div className="flex items-center my-8 gap-12">
                <div className="sm:w-3/4">
                    <Badge variant="default"><span className="font-semibold pb-0.5">Looking for opportunities</span></Badge>
                    <h1 className="my-1 scroll-m-20 font-extrabold tracking-tight text-5xl lg:text-6xl">
                        <span>Hi, I'm </span>
                        <span className="text-nowrap">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Edgar</span>
                            👋
                        </span>
                    </h1>
                    <p className="text-md lg:text-xl medium pt-2">
                        A master software engineer from Portugal. I write about
                        software development, and any projects that might I find myself in.
                    </p>
                </div>
                <div className="flex-1 hidden sm:block">
                    <div className="w-40 h-40 lg:w-44 lg:h-44 mx-auto">
                        <img src="https://media.licdn.com/dms/image/v2/C4D03AQHN7fttaY1h4w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1658667372075?e=1730937600&v=beta&t=NI0tJxWh_gJnZHW6DeyhOb75UTXm0FRdo0zHylcXwYQ" alt="Edgar Silva" className="rounded-[50%] w-full h-full" />
                    </div>
                </div>
            </div>

            <section className="mt-8">
                <h3 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight first:mt-0">About me</h3>
                <p className="leading-7">
                    I'm a software engineer from Portugal. I've been working with software development for over 10 years now.
                    I've worked with a variety of technologies and languages, but I'm mostly focused on web development.
                </p>
            </section>


            <section className="mt-8">
                <h3 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight first:mt-0">Latest Projects</h3>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <ProjectCard title="AWS Example" />
                    <ProjectCard title="AWS Example" />
                    <ProjectCard title="AWS Example" />
                    <ProjectCard title="AWS Example" />
                </div>

                <div className="mt-6 flex justify-center">
                    <Link href="/projects" >
                        <Button variant="default" size="lg" >
                            View all projects
                        </Button>
                    </Link>
                </div>
            </section>

            <section className="mt-8">
                <h3 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight first:mt-0">Experience</h3>
                <div className="flex gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 p-1.5 rounded-[50%] relative bg-white ">
                        <Image src={nexusAgenda} alt="Nexus Agenda" objectFit="contain" />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-xs sm:text-sm">NEXUS AGENDA at CISUC </h4>
                        <p className="text-xs sm:text-sm">Cloud Backend Developer (AWS)</p>
                    </div>
                    <p className="text-right text-xs sm:text-sm text-muted-foreground flex-shrink">Sep 2023 - Jul 2024</p>
                </div>
            </section>

            <section className="mt-8">
                <h3 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight first:mt-0">Education</h3>

            </section>
        </main>
    );
}
