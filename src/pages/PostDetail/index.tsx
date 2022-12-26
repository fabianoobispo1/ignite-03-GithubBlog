import {
  NavButton,
  PostDetailCard,
  PostDetailContainer,
  PostDetailContent,
} from './styles'

export function PostDetail() {
  return (
    <PostDetailContainer>
      <PostDetailCard>
        <header>
          <NavButton to="/" type="button">
            <i className="fa-solid fa-chevron-left"></i>
            Back
          </NavButton>
          <a href={'#'} target="_blank" rel="noreferrer">
            See on Github
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>
        <div>
          <h1>titulo</h1>
        </div>
        <footer>
          <span>
            <i className="fa-brands fa-github"></i>
            name
          </span>
          <span>
            <i className="fa-solid fa-calendar"></i>
            data
          </span>
          <span>
            <i className="fa-solid fa-comment"></i>0 Comments
          </span>
        </footer>
      </PostDetailCard>
      <PostDetailContent>
        <div>textoo</div>
      </PostDetailContent>
    </PostDetailContainer>
  )
}
