import React from 'react'

import { PostCardContainer } from './styles'

export function PostCard() {
  return (
    <PostCardContainer to={'#'}>
      <header>
        <h1>titulo</h1>
        <span>data</span>
      </header>
      <main>
        <p>conteudo</p>
      </main>
    </PostCardContainer>
  )
}
