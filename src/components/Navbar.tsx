"use client";

import { lato } from "@/lib/fonts";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const session = useSession();

  const logout = () => {
    signOut();
  };

  return (
    <nav className="container mx-auto p-4 flex justify-between items-center">
      <Link href="/">
        <p className={`text-2xl font-bold ${lato.className}`}>BlogGo</p>
      </Link>
      <div className="flex item-center gap-4">
        <Link href="/">Home</Link>
        {session.data?.user ? (
          <>
            <Link href="/write">Write</Link>
            <Button variant="destructive" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/sign-up">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
