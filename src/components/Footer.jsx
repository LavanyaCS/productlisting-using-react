import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="bg-blue-800 text-white p-4 mt-8 text-center h-16">
      &copy; {new Date().getFullYear()} Megify. All rights reserved.
    </footer>
    </div>
  )
}

export default Footer
