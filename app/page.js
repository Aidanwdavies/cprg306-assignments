import Link from "next/link";

export default function RootPage() {
  return (
    <main>
      <h1 className="text-x5 text-center font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <p><Link href="/week-2">
        Go to Week 2 Page
      </Link></p>
      <p className="text hover:ring-offset-sky-800"><Link href="/week-3">
        Go to Week 3 Page
      </Link></p>
      <p className="text hover:ring-offset-sky-800"><Link href="/week-4">
        Go to Week 4 Page
      </Link></p>
      <p className="text hover:ring-offset-sky-800"><Link href="/week-5">
        Go to Week 5 Page
      </Link></p>
      <p className="text hover:ring-offset-sky-800"><Link href="/week-6">
        Go to Week 6 Page
      </Link></p>
      <p className="text hover:ring-offset-sky-800"><Link href="/week-7">
        Go to Week 7 Page
      </Link></p>
      <p className="text hover:ring-offset-sky-800"><Link href="/week-8">
        Go to Week 8 Page
      </Link></p>
      <p className="text hover:ring-offset-sky-800"><Link href="/week-9">
        Go to Week 9 Page
      </Link></p>
    </main>
  );
}
