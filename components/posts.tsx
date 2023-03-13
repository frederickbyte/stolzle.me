'use client'

import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from '@/.contentlayer/generated'

export function PostCard(post: Post) {
  return (
    <div className="flex flex-col mb-6">
      <time dateTime={post.updatedOn} className="block text-sm">
        {format(parseISO(post.updatedOn), 'LLLL d, yyyy')}
      </time>
      <h2 className='font-[500] hover:underline hover:underline-offset-2'>
        <Link href={post.url}>
          {post.title}
        </Link>
      </h2>
      <small>{post.summary}</small>
    </div>
  )
}

export default function Posts() {
  return (
    <div>
      {allPosts.sort((a: Post, b: Post) => compareDesc(new Date(a.updatedOn), new Date(b.updatedOn))).map((post: Post, idx: number) => {
        return <PostCard key={idx} {...post} />
      })}
    </div>
  )
}
