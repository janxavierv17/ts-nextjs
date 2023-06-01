"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}
