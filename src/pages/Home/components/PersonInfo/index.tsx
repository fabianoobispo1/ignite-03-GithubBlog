import React from 'react'
import { PersonInfoContainer } from './styles'

import avatar from '../../../../assets/avatar.svg'

/* interface IUserInfo {
  name: string
  followers: number
  githubUsername: string
  company: string
  url: string
  imgUrl: string
  description: string
}
 */
export function PersonInfo() {
  return (
    <PersonInfoContainer>
      <img width={148} height={148} src={avatar} alt="Person Photo" />
      <div>
        <header>
          <h1>Fabiano Bispo</h1>
          <a href="#" target="_blank" rel="noreferrer">
            GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>
        <main>
          <p>Descricao </p>
        </main>
        <footer>
          <span>
            <i className="fa-brands fa-github"></i>
            Fabianoobispo
          </span>
          <span>
            <i className="fa-solid fa-building"></i>
            Sinqia
          </span>
          <span>
            <i className="fa-solid fa-user-group"></i>4 Followers
          </span>
        </footer>
      </div>
    </PersonInfoContainer>
  )
}
