import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';
import { Mdx } from '@/components/mdx';
import { allPosts, Post } from '@/.contentlayer/generated';
import { format, parseISO } from 'date-fns';

export async function generateStaticParams() {
  return allPosts.map((post: Post) => ({
    slug: post.url,
  }));
}



export async function generateMetadata({ params }: any): Promise<Metadata | undefined> {
  const post = allPosts.find((post: Post) => post._raw.flattenedPath === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedOn: publishedOn,
    summary: description,
  } = post;
  return {
    title,
    description,
  };
}


export default async function PostItem({ params }: any) {
  const targetPost = allPosts.find((post: Post) => post._raw.flattenedPath === params.slug);

  if (!targetPost) {
    notFound();
  }
  return (
    <section>
      <h1 className="font-bold text-xl lg:text-3xl">
        <Balancer>{targetPost.title}</Balancer>
      </h1>
      <div className='flex flex-wrap gap-6 mt-2 mb-5'>
        <div className="text-sm bg-neutral-100 rounded-md px-2 py-1 tracking-tighter w-fit">
          Wrriten{' '}
          <time dateTime={targetPost.publishedOn}>
            {format(parseISO(targetPost.publishedOn), 'LLLL d, yyyy')}
          </time>
        </div>
        <div className="text-sm bg-pastelBlueHover rounded-md px-2 py-1 tracking-tighter w-fit">
          Updated{' '}
          <time dateTime={targetPost.updatedOn}>
            {format(parseISO(targetPost.updatedOn), 'LLLL d, yyyy')}
          </time>
        </div>
      </div>
      <Mdx post={targetPost} />
    </section>
  );
}