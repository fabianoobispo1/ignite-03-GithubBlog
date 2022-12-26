import { PersonInfo } from './components/PersonInfo'
import { PostCard } from './components/PostCard'
import {
  HomeContainer,
  HomeContent,
  ListSection,
  SearchSection,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <PersonInfo />
      <HomeContent>
        <SearchSection>
          <div>
            <span>Posts</span>
            <small> posts</small>
          </div>
          <input type="text" onBlur={(e) => {}} placeholder="Search a Post" />
        </SearchSection>
        <ListSection>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </ListSection>
      </HomeContent>
    </HomeContainer>
  )
}
