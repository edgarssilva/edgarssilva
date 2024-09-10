import React from 'react';
import Link from 'next/link';
import { formatDate, getBlogPosts } from '~/app/blog/utils';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '~/components/ui/card';
import RevealSection from '~/components/reveal-section';

export default function Blog() {
    let blogs = getBlogPosts().sort((a, b) => new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1);

    return (
        <main className="container mx-auto my-8 px-4">
            <h1 className="text-4xl font-bold mb-4">Blog ✍️</h1>
            <p className="text-lg text-muted-foreground mb-8">Welcome to the blog! Here you can find all the blog posts.</p>

            <RevealSection className="grid gap-6 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                {blogs.map((blog) => (
                    <Link href={`/blog/${blog.slug}`} key={blog.slug}>
                        <Card key={blog.slug} className="hover:shadow transition-shadow duration-200">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">{blog.metadata.title}</CardTitle>
                                <CardDescription className="text-sm text-muted-foreground">{formatDate(blog.metadata.publishedAt, false)}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{blog.metadata.summary}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </RevealSection>
        </main>
    );
}

