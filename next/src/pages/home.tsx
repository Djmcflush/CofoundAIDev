/**
 * v0 by Vercel.
 * @see https://v0.dev/t/msBsOR4rggs
 */
import Button  from "../components/Button";
import Link from 'next/link';

export default function Component() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900">
      <div className="rounded-full h-80 w-80 flex items-center justify-center animate-bounce">
        <img
          alt="Logo Image"
          className="rounded-full"
          height={320}
          layout="responsive"
          src="/favicon.svg"
          style={{
            aspectRatio: "320/320",
            objectFit: "cover",
          }}
          width={320}
        />
      </div>
      <div className="mt-10">
        <Link href="/">
          <Button
            aria-label="Get Started Button"
            className="px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold shadow-lg animate-pulse"
            role="button"
            variant="default"
          >
            <RocketIcon className="mr-2 text-white" />
            Get Started
          </Button>
        </Link>
      </div>
      <div aria-hidden="true" className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <img
          alt="Explosion Image"
          className="opacity-0"
          height="400"
          layout="responsive"
          src="/favicon.svg"
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
    </section>
  )
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}
