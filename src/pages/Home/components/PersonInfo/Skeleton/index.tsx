/* eslint-disable camelcase */
import React from 'react'
import { PersonInfoContainer } from './styles'

export function Skeleton() {
  return (
    <>
      <img width={148} height={148} src="" alt="Person Photo" />
      <div>
        <header>
          <h1>aaa</h1>
          <a href="#" target="_blank" rel="noreferrer">
            GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>
        <main>
          <p>a</p>
        </main>
        <footer>
          <span>
            <i className="fa-brands fa-github"></i>a
          </span>
          <span>
            <i className="fa-solid fa-building"></i>a
          </span>
          <span>
            <i className="fa-solid fa-user-group"></i>a Followers
          </span>
        </footer>
      </div>
    </>
  )
}
