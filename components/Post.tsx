import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FormatDate, FormatCount } from '@/components/Format'

interface IPost {
  id: string,
  content: string[],
  tags: string[] | null,
  author: {
    nick: string,
    picture: string,
    badges: string[] | null
  },
  date: Date, 
  likes: number, 
  views: number
}

export default function Post({ id, content, tags, author, date, likes, views } : IPost) {
  return (
    <div>
      <h1>Post</h1>
    </div>
  )
}