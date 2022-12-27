import React, { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PersonInfo } from './components/PersonInfo'
import { PostCard } from './components/PostCard'
import {
  HomeContainer,
  HomeContent,
  ListSection,
  SearchSection,
} from './styles'

export interface IPost {
  title: string
  body: string
  created_at: string
  number: string
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([] as IPost[])
  const [postsCounter, setPostsCounter] = useState(0)

  async function fetchPosts(query = '') {
    const response = await api.get(
      `search/issues?q=${
        query || ''
      }%20repo:${'fabianoobispo1'}/ignite-03-GithubBlog`,
    )
    setPosts(response.data.items)
    setPostsCounter(response.data.total_count)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <HomeContainer>
      <PersonInfo />
      <HomeContent>
        <SearchSection>
          <div>
            <span>Posts</span>
            <small>{postsCounter} posts</small>
          </div>
          <input
            type="text"
            onBlur={(e) => fetchPosts(e.target.value)}
            placeholder="Procurar post"
          />
        </SearchSection>
        <ListSection>
          {posts &&
            posts.map((post) => (
              <PostCard
                key={`${post.title}-${post.number}`}
                post={post}
              ></PostCard>
            ))}
        </ListSection>
      </HomeContent>
    </HomeContainer>
  )
}
