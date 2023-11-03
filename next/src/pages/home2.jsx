/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dvisyzL22YT
 */
import { Button } from "@/components/Button"
import Link from "next/link"

export default function Component() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">AI Co-Founder</h1>
        <div className="space-x-4">
          <Button className="px-8 py-3 bg-blue-600 text-white rounded-md">Sign In</Button>
          <Link href="#">
            <Button className="p-2 bg-gray-200 rounded-full hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-blue-400">
              <svg
                className=" h-6 w-6 text-gray-900 hover:text-white dark:text-gray-100 dark:hover:text-white"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Button>
          </Link>
          <Link href="#">
            <Button className="p-2 bg-gray-200 rounded-full hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-blue-400">
              <svg
                className=" h-6 w-6 text-gray-900 hover:text-white dark:text-gray-100 dark:hover:text-white"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect height="12" width="4" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Welcome to AI Co-Founder</h2>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Your virtual co-founder that assists you in making strategic decisions
        </p>
        <Button className="px-8 py-3 bg-blue-600 text-white rounded-md">Get Started</Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 my-16">
        <div className="flex flex-col items-center space-y-4">
          <svg
            className=" h-12 w-12 text-blue-600"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 13V2l8 4-8 4" />
            <path d="M20.55 10.23A9 9 0 1 1 8 4.94" />
            <path d="M8 10a5 5 0 1 0 8.9 2.02" />
          </svg>
          <h3 className="text-lg font-medium">Strategic Decisions</h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            AI Co-founder helps you make informed strategic decisions for your business.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <svg
            className=" h-12 w-12 text-blue-600"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <h3 className="text-lg font-medium">Deep Analysis</h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Get deep insights and analysis on your business performance and industry trends.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <svg
            className=" h-12 w-12 text-blue-600"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
          <h3 className="text-lg font-medium">24/7 Support</h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Our AI is available around the clock to assist you in your business operations.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <svg
            className=" h-12 w-12 text-blue-600"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
            <line x1="9" x2="9" y1="3" y2="18" />
            <line x1="15" x2="15" y1="6" y2="21" />
          </svg>
          <h3 className="text-lg font-medium">Planning and Forecasting</h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Use AI to plan and forecast business outcomes with accuracy.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <svg
            className=" h-12 w-12 text-blue-600"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <h3 className="text-lg font-medium">Operational Efficiency</h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Achieve operational efficiency with AI-driven process optimization.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <svg
            className=" h-12 w-12 text-blue-600"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="20" rx="2" ry="2" width="14" x="5" y="2" />
            <path d="M12 18h.01" />
          </svg>
          <h3 className="text-lg font-medium">Innovation</h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Stay ahead in the market with AI-powered innovation tools.
          </p>
        </div>
      </div>
      <div className="space-y-8 my-16">
        <h2 className="text-3xl font-bold text-center">What our users say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow-sm">
            <p className="text-gray-500 dark:text-gray-400">
              "AI Co-founder has been a game changer for my business. The insights provided have helped me make
              strategic decisions."
            </p>
            <p className="mt-4 text-gray-900 dark:text-gray-100">- John Doe</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <p className="text-gray-500 dark:text-gray-400">
              "The support from AI Co-founder is incredible. It's like having a virtual team member available 24/7."
            </p>
            <p className="mt-4 text-gray-900 dark:text-gray-100">- Jane Smith</p>
          </div>
        </div>
      </div>
      <div className="space-y-4 my-16">
        <h2 className="text-3xl font-bold text-center">Technologies we use</h2>
        <div className="flex justify-center space-x-8">
          <svg
            className=" h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          <svg
            className=" h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 22a5 5 0 0 1-2-4" />
            <path d="M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1" />
            <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          </svg>
          <svg
            className=" h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 8V4H8" />
            <rect height="12" rx="2" width="16" x="4" y="8" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </svg>
          <svg
            className=" h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <line x1="12" x2="12" y1="22" y2="15.5" />
            <polyline points="22 8.5 12 15.5 2 8.5" />
            <polyline points="2 15.5 12 8.5 22 15.5" />
            <line x1="12" x2="12" y1="2" y2="8.5" />
          </svg>
          <svg
            className=" h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
          <svg
            className=" h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
          </svg>
        </div>
      </div>
      <footer className="border-t py-8 mt-16">
        <div className="flex justify-center space-x-4">
          <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
            Terms of Service
          </Link>
          <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
            Privacy Policy
          </Link>
          <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
            Contact Us
          </Link>
        </div>
      </footer>
    </section>
  )
}

