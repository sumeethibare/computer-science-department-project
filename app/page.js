import About from '@/components/HomePage/About'
import Impress from '@/components/HomePage/Impress'
import Staff from '@/components/HomePage/Staff'
import React from 'react'

function page() {
  return (
    <>
      <Impress />
      <About />
      <Staff />
    </>
  )
}

export default page