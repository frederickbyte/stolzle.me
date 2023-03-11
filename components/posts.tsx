'use client'


import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from '@/.contentlayer/generated'

export function PostCard(post: Post) {
  return (
    <div className="mb-6">
      <time dateTime={post.publishedOn} className="block text-sm text-slate-600">
        {format(parseISO(post.publishedOn), 'LLLL d, yyyy')}
      </time>
      <h2>
        <Link href={post.url}>
          {post.title}
        </Link>
      </h2>
    </div>
  )
}

export default function Posts() {
  return (
    <div>
      <h2>Recent Articles</h2>
      {allPosts.sort((a: Post, b: Post) => compareDesc(new Date(a.updatedOn), new Date(b.updatedOn))).map((post: Post, idx: number) => {
        return <PostCard key={idx} {...post} />
      })}
    </div>
  )
}
