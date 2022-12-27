/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { PersonInfoContainer } from './styles'

import { api } from '../../../../lib/axios'
import { Skeleton } from './Skeleton'

interface IUserInfo {
  name: string
  followers: number
  githubUsername: string
  company: string
  url: string
  imgUrl: string
  description: string
}

export function PersonInfo() {
  const [userInfo, setUserInfo] = useState<IUserInfo>()
  const [isLoading, setIsLoading] = useState(true)

  async function fetchUsers() {
    // simular açao de 2 segundos
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // const response = await api.get('users/pedr0d1as')
    const response = await api.get('users/fabianoobispo1')

    const { name, followers, login, company, html_url, avatar_url, bio } =
      response.data
    const newUserObj = {
      name,
      followers,
      githubUsername: login,
      company,
      url: html_url,
      imgUrl: avatar_url,
      description: bio,
    }
    setUserInfo(newUserObj)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <PersonInfoContainer>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <img
            width={148}
            height={148}
            src={userInfo?.imgUrl}
            alt="Person Photo"
          />
          <div>
            <header>
              <h1>{userInfo?.name}</h1>
              <a href={userInfo?.url} target="_blank" rel="noreferrer">
                GITHUB{' '}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </header>
            <main>
              <p>{userInfo?.description}</p>
            </main>
            <footer>
              <span>
                <i className="fa-brands fa-github"></i>
                {userInfo?.githubUsername}
              </span>
              <span>
                <i className="fa-solid fa-building"></i>
                {userInfo?.company}
              </span>
              <span>
                <i className="fa-solid fa-user-group"></i>
                {userInfo?.followers} Followers
              </span>
            </footer>
          </div>
        </>
      )}
    </PersonInfoContainer>
  )
}
