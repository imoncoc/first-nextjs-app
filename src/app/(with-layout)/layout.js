import React from 'react'
import Link from "next/link";

const WithLayout = ({children}) => {
  return (
    <div>
      <navbar>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
      </navbar>
      {children}
      <footer>Footer</footer>
    </div>
  );
}

export default WithLayout