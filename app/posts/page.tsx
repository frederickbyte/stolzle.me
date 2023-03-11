import PostsWithFilter from '@/components/postsWithFilter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Read my thoughts on software, tech, and more.',
};

export default async function PostPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl mb-5">Posts</h1>
      <PostsWithFilter />
    </section>
  );
}