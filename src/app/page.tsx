import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "~/components/project-card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

import nexusAgenda from "~/assets/nexus-agenda.png";
import upwork from "~/assets/upwork.png";
import fishFolk from "~/assets/fishfolk-punchy.png";
import reage from "~/assets/reage.png";
import openquest from "~/assets/openquest.jpg";

import dei from "~/assets/dei.png";
import estgoh from "~/assets/estgoh.png";
import aeaav from "~/assets/aeaav.png";

const experience = [
    {
        "company": "NEXUS AGENDA at CISUC",
        "addres": "https://nexuslab.pt/",
        "role": "Cloud Backend Developer (AWS)",
        "date": "Sep 2023 - Jul 2024",
        "image": nexusAgenda,
    },
    {
        "company": "Freelancing in Upwork",
        "addres": "https://www.upwork.com/freelancers/~01e90c92bb5295859e",
        "role": "Game Development",
        "date": "Sep 2023 - Jul 2024",
        "image": upwork,
    },
    {
        "company": "Fish Folk - Punchy",
        "addres": "https://fishfolk.org/",
        "role": "Proof of Concept and Contributor",
        "date": "Apr 2022 - Aug 2022",
        "image": fishFolk,
    },
    {
        "company": "Reage Lda",
        "addres": "https://reage.pt/",
        "role": "Web Developer Intern",
        "date": "Mar 2019 - Jun 2019",
        "image": reage,
    },
    {
        "company": "Openquest",
        "addres": "https://www.openquest.eu/",
        "role": "Drupal Developer Intern",
        "date": "May 2018 - Jun 2018",
        "image": openquest,
    },
    {
        "company": "Reage Lda",
        "addres": "https://reage.pt/",
        "role": "Arduino Intern",
        "date": "May 2017 - Jun 2017",
        "image": reage,
    },
];


const education = [
    {
        "school": "DEI at FCTUC - University of Coimbra",
        "addres": "https://www.uc.pt/en/fctuc/dei/",
        "degree": "Master's Degree of Informatics Engineering (MEI)",
        "date": "2022 - 2024",
        "image": dei,
    },
    {
        "school": "IPC - ESTGOH",
        "addres": "https://www.estgoh.ipc.pt/",
        "degree": "Bachlors's Degree of Informatics Engineering (LEI)",
        "date": "2019 - 2022",
        "image": estgoh,
    },
    {
        "school": "Secondary School of Albergaria-a-Velha",
        "addres": "https://aeaav.pt/en",
        "degree": "Vocational Course in IT Management and Programming",
        "date": "2016 - 2019",
        "image": aeaav,
    },

];


export default function HomePage() {
    return (
        <main className="mt-6" >
            <div className="flex items-center my-8 gap-8">
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
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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

                <div className="flex flex-col gap-2 mt-1">
                    {experience.map((e, i) => (
                        <div key={i} className="flex gap-2 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full relative bg-white border overflow-hidden">
                                <Image src={e.image} alt={e.company} fill={true} className="object-contain object-center" />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <div className="w-full flex justify-between">
                                    <Link className="font-semibold text-xs sm:text-sm hover:underline underline-offset-2 leading-2" href={e.addres} target="_blank">
                                        {e.company}
                                    </Link>
                                    <p className="text-right text-xs sm:text-sm text-muted-foreground flex-shrink-0">{e.date}</p>
                                </div>
                                <p className="text-xs sm:text-sm -mt-0.5">{e.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-8">
                <h3 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight first:mt-0">Education</h3>

                <div className="flex flex-col gap-2 mt-1">
                    {education.map((e, i) => (
                        <div key={i} className="flex gap-2 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full relative bg-white border overflow-hidden">
                                <Image src={e.image} alt={e.school} fill={true} className="object-contain object-center" />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <div className="w-full flex justify-between">
                                    <Link className="font-semibold text-xs sm:text-sm hover:underline underline-offset-2 leading-2" href={e.addres} target="_blank">
                                        {e.school}
                                    </Link>
                                    <p className="text-right text-xs sm:text-sm text-muted-foreground flex-shrink-0">{e.date}</p>
                                </div>
                                <p className="text-xs sm:text-sm -mt-0.5">{e.degree}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main >
    );
}
