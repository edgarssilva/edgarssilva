import Link from "next/link";

export default function HomePage() {
    return (
        <main className="mt-6">
            <div className="flex items-center my-24">
                <div className="w-3/4">
                    <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl">Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">Edgar</span>👋</h1>
                    <p className="text-xl medium text-muted-foreground pt-2">
                        I'm a master software engineer from Portugal. I write about
                        software development, and any projects that might I find myself in.
                    </p>
                </div>
                <div className="flex-1">
                    <div className="w-40 h-40 mx-auto">
                        <img src="https://media.licdn.com/dms/image/v2/C4D03AQHN7fttaY1h4w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1658667372075?e=1730937600&v=beta&t=NI0tJxWh_gJnZHW6DeyhOb75UTXm0FRdo0zHylcXwYQ" alt="Edgar Silva" className="rounded-[50%] w-full h-full" />
                    </div>
                </div>
            </div>

            <section className="mt-12">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">About me</h2>
                <p className="leading-7">
                    I'm a software engineer from Portugal. I've been working with software development for over 10 years now.
                    I've worked with a variety of technologies and languages, but I'm mostly focused on web development.
                </p>
            </section>
        </main>
    );
}
