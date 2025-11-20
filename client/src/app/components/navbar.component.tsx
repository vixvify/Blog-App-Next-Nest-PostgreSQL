import Link from "next/link";

export default function Navbarcomponent() {
  return (
    <div className="">
      <nav>
        <ul className="flex justify-center items-center gap-10 text-xl h-20 ">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/pages/form"}>
            <li>Post</li>
          </Link>
          <li>Log in</li>
        </ul>
      </nav>
    </div>
  );
}
