import React from 'react'
import { IPost } from '../../index'
import { PostCardContainer } from './styles'

interface IPostCard {
  post: IPost
}
export function PostCard({ post }: IPostCard) {
  const { createdAt, body, title, number } = post
  return (
    <PostCardContainer to={`/${number}`}>
      <header>
        <h1>{title}</h1>
        <span>{createdAt}</span>
      </header>
      <main>
        <p>{body}</p>
      </main>
    </PostCardContainer>
  )
}
