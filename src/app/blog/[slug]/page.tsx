import { notFound } from 'next/navigation';

import { CustomMDX } from '~/components/mdx';
import { getBlogPosts } from '../utils';

export async function getStaticParams() {
    let posts = getBlogPosts();

    return posts.map((post) => {
        return {
            slug: post.slug,
        };
    });
}

export function generateMetadata({ params }) {
    let post = getBlogPosts().find((post) => post.slug === params.slug);
    if (!post) return;

    return {
        title: post.metadata.title,
        description: post.metadata.summary,

        openGraph: {
            title: post.metadata.title,
            description: post.metadata.summary,
            type: 'article',
            publishedTime: post.metadata.publishedAt,
            url: '',
            images: [],
        },

        //TODO: Add twitter metadata and fix prior
        twitter: {
        }
    };
}


export default async function Blog({ params }) {
    let post = getBlogPosts().find((post) => post.slug === params.slug);
    if (!post) return notFound();

    return (
        <main>
            <h1 className='title'>{post.metadata.title}</h1>
            <p>{post.metadata.publishedAt}</p>
            <p>{post.metadata.summary}</p>
            <article className="prose !max-w-none dark:prose-invert prose-neutral prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
                <CustomMDX source={post.content} />
            </article>
        </main>
    );
}

