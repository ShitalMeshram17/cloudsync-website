import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-slate-50 border-t mt-8">
      <div className="container mx-auto p-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} CloudSync — All rights reserved. Email: hello@cloudsync.com
      </div>
    </footer>
  )
}
