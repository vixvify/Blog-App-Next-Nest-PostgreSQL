import Link from "next/link";

export default function Navbarcomponent() {
  return (
    <div className="">
      <nav>
        <ul className="flex justify-end pr-20 items-center gap-10 text-xl h-20 text-white ">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/pages/form"}>
            <li>Post</li>
          </Link>
          <Link href={"/pages/login"}>
            <li>Log in</li>
          </Link>
          <Link href={"/pages/signup"}>
            <li>Sign up</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
