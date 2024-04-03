"use client";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];

  const pathname = usePathname();

  // Get session on the client
  // This component could be a server component since it has no user interaction but this is just an example
  // of how to access session on a client component
  const { status, data } = useSession();

  return (
    <nav className="flex space-x-6 p-5 mb-5 border-b justify-between items-center">
      <Link href="/">Home</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              "text-zinc-900": link.href === pathname,
              "text-zinc-500": link.href !== pathname,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      {status === "loading" && <div>Loading...</div>}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Sign In</Link>
      )}
      {status === "authenticated" && (
        <div>
          {data.user!.email}
          <Link href="/api/auth/signout" className="ml-5">
            Sign Out
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
