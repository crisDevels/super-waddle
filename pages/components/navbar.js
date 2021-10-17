import React from "react";
import Link from "next/link"

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}