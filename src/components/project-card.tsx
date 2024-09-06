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
        <Card className="w-full max-w-sm overflow-hidden transition-colors duration-300 bg-card text-card-foreground flex flex-col">
            <div className="relative w-full pt-[56.25%]">
                <Image
                    src={imageUrl}
                    alt={`Preview of ${title}`}
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full"
                />
            </div>
            <CardHeader className="p-4 flex-grow">
                <CardTitle className="text-xl font-bold line-clamp-1">{title}</CardTitle>
                <CardDescription className="line-clamp-2">{description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="px-2 py-1 text-xs">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
                <Link href={githubUrl} target="_blank">
                    <Button variant="outline" size="sm">
                        <GithubIcon className="mr-2 h-4 w-4" />
                        GitHub
                    </Button>
                </Link>
                <Link href={demoUrl} target="_blank">
                    <Button size="sm" >
                        <ExternalLinkIcon className="mr-2 h-4 w-4" />
                        Live Demo
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
