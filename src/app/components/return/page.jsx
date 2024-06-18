import Link from 'next/link'
import React from 'react'


export const ReturnPage = () => {
  return (
    <Link href="/view_project" className="flex items-center text-blue-500 mb-4">
    <span className="mr-2">&lt;&lt;</span> Return To Home Page
  </Link>
  )
}

