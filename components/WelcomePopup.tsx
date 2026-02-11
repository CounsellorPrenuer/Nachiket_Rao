'use client'

import { useState, useEffect } from 'react'
import RichText from './RichText'

interface WelcomePopupProps {
  title: string
  content: any[]
}

export default function WelcomePopup({ title, content }: WelcomePopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // const hasVisited = localStorage.getItem('hasVisited')
    // if (!hasVisited) {
    setIsOpen(true)
    //   localStorage.setItem('hasVisited', 'true')
    // }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-8 relative animate-fade-in">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-primary transition-colors"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-4xl font-heading text-primary mb-6 text-center">
          {title}
        </h2>
        <div className="text-primary">
          <RichText content={content} />
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-8 w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
        >
          Continue to Website
        </button>
      </div>
    </div>
  )
}
