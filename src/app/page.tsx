import Link from "next/link";
import { ProjectCard } from "~/components/project-card";
import { Badge } from "~/components/ui/badge";

export default function HomePage() {
    return (
        <main className="mt-6">
            <div className="flex items-center my-8 gap-6">
                <div className="sm:w-3/4">
                    <Badge variant="default"><span className="font-semibold pb-0.5">Looking for opportunities</span></Badge>
                    <h1 className="my-1 scroll-m-20 font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl xl:text-7xl">Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">Edgar</span>👋</h1>
                    <p className="text-md lg:text-xl medium pt-2">
                        A master software engineer from Portugal. I write about
                        software development, and any projects that might I find myself in.
                    </p>
                </div>
                <div className="flex-1 hidden sm:block">
                    <div className="w-40 h-40 lg:w-48 lg:h-48 mx-auto">
                        <img src="https://media.licdn.com/dms/image/v2/C4D03AQHN7fttaY1h4w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1658667372075?e=1730937600&v=beta&t=NI0tJxWh_gJnZHW6DeyhOb75UTXm0FRdo0zHylcXwYQ" alt="Edgar Silva" className="rounded-[50%] w-full h-full" />
                    </div>
                </div>
            </div>

            <section className="mt-12">
                <h3 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight first:mt-0">About me</h3>
                <p className="leading-7">
                    I'm a software engineer from Portugal. I've been working with software development for over 10 years now.
                    I've worked with a variety of technologies and languages, but I'm mostly focused on web development.
                </p>
            </section>


            <section className="mt-12 pb-52">
                <h3 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight first:mt-0">Latest Projects</h3>
                <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                    <ProjectCard title="AWS Example" />
                    <ProjectCard title="AWS Example" />
                    <ProjectCard title="AWS Example" />
                </div>
            </section>
        </main>
    );
}
