import * as React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Post } from '@/.contentlayer/generated';

const CalloutWithLabel = (props: any) => {
  return (
    <div>
      <div className="bg-stone-700 px-2 text-white w-fit p-1 rounded relative left-7 font-bold top-4  ">
        {props.title}
      </div>
      <div className={'border-2 border-stone-700 text-stone-800 p-3 rounded'}>
        {props.children}
      </div>
    </div>
  );
}

const InfoCalloutWithLabel = (props: any) => {
  return (
    <div>
      <div className="bg-stone-700 px-2 text-white w-fit p-1 rounded relative left-5 font-bold top-4  ">
        {props.title}
      </div>
      <div className={'text-[0.95em] border-2 border-stone-700 text-stone-800 p-3 rounded bg-blue-100'}>
        {props.children}
      </div>
    </div>
  );
}

const customComponents = {
  CalloutWithLabel,
  InfoCalloutWithLabel
};

interface MdxProps {
  post: Post;
}

export function Mdx({ post }: MdxProps) {
  const Component = useMDXComponent(post.body.code);

  return (
    <article className='prose prose-sm prose-stone md:prose-base mb-8'>
      <Component components={{ ...customComponents }} />
    </article>
  );
}