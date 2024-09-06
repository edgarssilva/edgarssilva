import Image from "next/image"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    demoUrl: string;
    imageUrl: string;
}

export function ProjectCard({
    title = "My Awesome Project",
    description = "This is a brief description of my awesome project. It showcases various technologies and solves interesting problems.",
    technologies = ["React", "TypeScript", "Tailwind CSS"],
    githubUrl = "https://github.com/username/project",
    demoUrl = "https://demo-url.com",
    imageUrl = "https://placehold.co/600x400"
}: ProjectCardProps) {
    return (
        <Card className="w-full lg:max-w-sm mx-auto overflow-hidden transition-colors duration-300 bg-card text-card-foreground flex flex-row lg:flex-col">
            <div className="relative w-full md:max-w-sm lg:pt-[65.25%]">
                <Image
                    src={imageUrl}
                    alt={`Preview of ${title}`}
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full"
                />
            </div>
            <div>
                <CardHeader className="p-4 flex-grow">
                    <CardTitle className="text-xl font-bold line-clamp-1">{title}</CardTitle>
                    <CardDescription className="line-clamp-2">{description}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-1">
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="px-2 py-1 text-xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between p-4 gap-4">
                    <Link href={githubUrl} target="_blank" className="flex-1">
                        <Button variant="outline" className="w-full bg-black text-white hover:bg-neutral-800 dark:hover:bg-neutral-900 hover:text-white" >
                            <GithubIcon className="mr-2 h-4 w-4" />
                            GitHub
                        </Button>
                    </Link>
                    <Link href={demoUrl} target="_blank" className="flex-1">
                        <Button variant="outline" className="w-full bg-white text-black hover:bg-neutral-100 dark:hover:bg-neutral-200 hover:text-black">
                            <ExternalLinkIcon className="mr-2 h-4 w-4" />
                            Live Demo
                        </Button>
                    </Link>
                </CardFooter>
            </div>
        </Card>
    )
}
