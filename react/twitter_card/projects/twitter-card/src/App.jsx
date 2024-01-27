import './App.css'
import React from 'react'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
const users = [
  {
    userName: "elonmusk",
    name: "Elon Musk",
    isFollowing: true,
  },
  {
    userName: "billgates",
    name: "Bill Gates",
    isFollowing: false
  },
  {
    userName: "timcook",
    name: "Tim Cook",
    isFollowing: true
  },
  {
    userName: "markzuckerberg",
    name: "Mark Zuckerberg",
    isFollowing: false
  }, {
    userName: "jamesclear",
    name: "James Clear",
    isFollowing: false
  }
]
export function App() {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) =>
          <TwitterFollowCard
            /* 
            La key es obligatoria para que React identifique
            correctamente el elemento
            */
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
      }
    </section>
  )
}