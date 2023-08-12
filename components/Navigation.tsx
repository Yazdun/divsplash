import React from 'react'
import { BsDiscord } from 'react-icons/bs'

export const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 p-3 bg-white border-b-2 border-zinc-100">
      <div className="container flex items-center justify-between ">
        <span className="font-bold">DivSplash</span>
        <a href="#" className="flex items-center gap-1 font-bold text-blue-600">
          <BsDiscord className="text-lg" />
          Join Discord
        </a>
      </div>
    </div>
  )
}
