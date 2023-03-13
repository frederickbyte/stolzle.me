import * as React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Post } from '@/.contentlayer/generated';

// Custom component for rendering callouts in posts.
const Callout = (props: any) => {
  return (
    <div className="flex bg-neutral-100 border border-neutral-200 rounded p-4 text-stone-800">
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const CalloutWithLabel = (props: any) => {
  return (
    <div>
      <div className="bg-stone-700 px-2 text-white w-fit p-1 rounded-lg font-sans relative left-7 font-bold top-4  ">
        {props.title}
      </div>
      <div className={'border-2 border-stone-700 text-stone-800 p-3 rounded bg-blue-100'}>
        {props.children}
      </div>
    </div>
  );
}

const customComponents = {
  Callout,
  CalloutWithLabel
};

interface MdxProps {
  post: Post;
}

export function Mdx({ post }: MdxProps) {
  const Component = useMDXComponent(post.body.code);

  return (
    <article className='prose prose-stone lg:prose-base mb-8'>
      <Component components={{ ...customComponents }} />
    </article>
  );
}