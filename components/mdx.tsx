import * as React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Post } from '@/.contentlayer/generated';

interface MdxProps {
  post: Post;
}

export function Mdx({ post }: MdxProps) {
  const Component = useMDXComponent(post.body.code);

  return (
    <article className='prose prose-stone lg:prose-xl'>
      <Component />
    </article>
  );
}