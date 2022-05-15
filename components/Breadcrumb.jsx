import Link from "next/link";
import { useRouter } from "next/router";
import { Router } from "next/dist/client/router";

function Breadcrumb() {
  const router = useRouter();
  return (
    <nav
      className="flex items-center no-underline text-sm px-[6px] h-6 rounded-[3px] leading-[1.2rem]"
      role="navigation"
    >
      <Link href="/">
        <a className="inline-flex items-center px-[6px] h-6 rounded-[3px] hover:bg-hover-light">
          Home
        </a>
      </Link>
      <span className="crumb-separator">/</span>
      <Link href="/">
        <a className="inline-flex items-center px-[6px] h-6 rounded-[3px] hover:bg-hover-light">
          Class notes
        </a>
      </Link>
      <span className="crumb-separator">/</span>
      <Link href="/">
        <a className="inline-flex items-center px-[6px] h-6 rounded-[3px] hover:bg-hover-light">
          History
        </a>
      </Link>
      <span className="crumb-separator">/</span>
      <Link href="/">
        <a className="inline-flex items-center px-[6px] h-6 rounded-[3px] hover:bg-hover-light">
          Revolt of 1857
        </a>
      </Link>
    </nav>
  );
}

export default Breadcrumb;
