import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import React from 'react'
import { IPost } from '../../index'
import { PostCardContainer } from './styles'

interface IPostCard {
  post: IPost
}
export function PostCard({ post }: IPostCard) {
  const { created_at, body, title, number } = post

  const formattedDate = formatDistanceToNow(new Date(created_at), {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <PostCardContainer to={`/post/${number}`}>
      <header>
        <h1>{title}</h1>
        <span>{formattedDate}</span>
      </header>
      <main>
        <p>{body}</p>
      </main>
    </PostCardContainer>
  )
}
