'use client'

import React from 'react'
import Link from 'next/link'
//import { useCartStore } from '@/lib/store'

const Header = () => {
  //const { cart } = useCartStore()

  return (
    <div className="navbar bg-amber-300 shadow-sm">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl font-extrabold ">BUSHRA-COLLECTION</Link>
      </div>

      {/* Center Section */}
      <div className="flex gap-4 justify-center flex-1 mr-36">
        <Link href="/" className="btn btn-ghost hover:bg-amber-400 hover:text-blue-500">Home</Link>
        <details className="dropdown">
          <summary className="btn btn-ghost hover:bg-amber-400 hover:text-blue-500">Category</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><Link href="#">Item 1</Link></li>
            <li><Link href="#">Item 2</Link></li>
          </ul>
        </details>
        <Link href="/about" className="btn btn-ghost">About Us</Link>
      </div>

      {/* Search */}
      <div>
        <input type='text' placeholder='Search here' className='border-2 border-neutral-600 rounded-2xl p-1' />
      </div>

      {/* Cart & Avatar */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {/* <span className="badge badge-sm indicator-item">{cart.length}</span> */}
            </div>
          </div>
          <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
            <div className="card-body">
              {/* <span className="text-lg font-bold">{cart.length} Items</span> */}
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <Link href="/cart" className="btn btn-primary btn-block">View cart</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link href="/profile" className="justify-between">Profile <span className="badge">New</span></Link></li>
            <li><Link href="/settings">Settings</Link></li>
            <li><Link href="/auth/login">Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
