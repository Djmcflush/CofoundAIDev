/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2gLX0A8char
 */
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Input  from "../components/Input";
import Button  from "../components/Button";
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"

export default function Component() {
  return (
    <div key="1" className="flex h-screen bg-blue-200 dark:bg-gray-800">
      <aside className="w-64 bg-white dark:bg-gray-700">
        <div className="px-6 py-4">
          <img
            alt="Logo"
            className="mx-auto rounded-full"
            height="64"
            src="/placeholder.svg"
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width="64"
          />
          <h1 className="text-center text-lg dark:text-gray-200 mt-2 mb-4">User's Name</h1>
          <nav className="mt-8">
            <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Settings</h2>
            <ul className="mt-4">
              <li>
                <Link href="#">
                  <a
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg"
                    href="#"
                  >
                    <svg
                      className=" h-4 w-4 mr-2"
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
                      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      <path d="M12 2v2" />
                      <path d="M12 22v-2" />
                      <path d="m17 20.66-1-1.73" />
                      <path d="M11 10.27 7 3.34" />
                      <path d="m20.66 17-1.73-1" />
                      <path d="m3.34 7 1.73 1" />
                      <path d="M14 12h8" />
                      <path d="M2 12h2" />
                      <path d="m20.66 7-1.73 1" />
                      <path d="m3.34 17 1.73-1" />
                      <path d="m17 3.34-1 1.73" />
                      <path d="m11 13.73-4 6.93" />
                    </svg>
                    General
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg"
                    href="#"
                  >
                    <svg
                      className=" h-4 w-4 mr-2"
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    User Preferences
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg"
                    href="#"
                  >
                    <svg
                      className=" h-4 w-4 mr-2"
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
                      <rect height="14" rx="2" width="20" x="2" y="5" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                    Subscription
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg"
                    href="#"
                  >
                    <svg
                      className=" h-4 w-4 mr-2"
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Download All User Data
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden bg-blue-100 dark:bg-white">
        <header className="px-6 py-4 bg-white dark:bg-white">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-800">Welcome to CoFoundAi</h1>
            <div className="flex items-center space-x-4">
              <Link href="#">
                <a
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-800"
                  href="#"
                >
                  <svg
                    className=" h-5 w-5"
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
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                  <span className="sr-only">Notifications</span>
                </a>
              </Link>
              <Avatar className="h-9 w-9">
                <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>CofoundAi Logo</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <section className="px-6 py-4 flex-1 overflow-y-auto grid grid-cols-2 gap-4">
          <div className="grid gap-4 bg-white dark:bg-white p-4 rounded-lg flex flex-col space-y-4">
            <div className="bg-white dark:bg-white p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-800 mb-4">
                What would you like to research?
              </h2>
              <Input
                className="w-full rounded-lg p-2 border border-blue-300 dark:border-white dark:bg-white dark:text-gray-800 mb-4"
                placeholder="Enter your research topic"
                type="text"
              />
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-800 mb-4">
                What Do you need to be accomplished?
              </h2>
              <textarea
                className="w-full rounded-lg p-2 border border-blue-300 dark:border-white dark:bg-white dark:text-gray-800 mb-4"
                placeholder="Enter text here..."
              />
              <Button className="w-full bg-gray-200 text-gray-500 rounded-lg p-2 mb-4" variant="outline">
                Generate Output
              </Button>
            </div>
            <div className="bg-gray-800 text-gray-300 p-4 rounded-lg">
              <Collapsible className="space-y-2">
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h2 className="text-lg font-semibold text-gray-300 mb-4">Chain of Thought</h2>
                  <div className="flex space-x-2">
                    <Button className="text-red-500" size="sm" variant="ghost">
                      <span className="sr-only">Close</span>
                    </Button>
                    <Button className="text-yellow-500" size="sm" variant="ghost">
                      <span className="sr-only">Minimize</span>
                    </Button>
                    <CollapsibleTrigger asChild>
                      <Button className="text-green-500" size="sm" variant="ghost">
                        <span className="sr-only">Expand</span>
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                </div>
                <CollapsibleContent className="space-y-2">
                  <ul className="mt-4">
                    <li className="flex items-center text-gray-300 hover:bg-gray-700 p-2 rounded-lg">
                      <svg
                        className=" h-4 w-4 mr-2"
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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Thought 1
                    </li>
                    <li className="flex items-center text-gray-300 hover:bg-gray-700 p-2 rounded-lg">
                      <svg
                        className=" h-4 w-4 mr-2"
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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Thought 2
                    </li>
                    <li className="flex items-center text-gray-300 hover:bg-gray-700 p-2 rounded-lg">
                      <svg
                        className=" h-4 w-4 mr-2"
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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Thought 3
                    </li>
                    <li className="flex items-center text-gray-300 hover:bg-gray-700 p-2 rounded-lg">
                      <svg
                        className=" h-4 w-4 mr-2"
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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Thought 4
                    </li>
                    <li className="flex items-center text-gray-300 hover:bg-gray-700 p-2 rounded-lg">
                      <svg
                        className=" h-4 w-4 mr-2"
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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Thought 5
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="bg-white dark:bg-white p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-800 mb-4">Document Preview</h2>
              <div className="bg-blue-100 dark:bg-white p-4 rounded-lg mb-4 flex-1 overflow-auto">
                Generated output will appear here...
              </div>
              <div className="flex space-x-4">
                <Button className="flex-1 bg-gray-200 text-gray-500 rounded-lg p-1 mb-2" variant="outline">
                  <svg
                    className=" h-4 w-4 mr-2"
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
                    <rect height="16" rx="2" width="20" x="2" y="4" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Email Document
                </Button>
                <Button className="flex-1 bg-gray-200 text-gray-500 rounded-lg p-1 mb-2" variant="outline">
                  <svg
                    className=" h-4 w-4 mr-2"
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
                  Save to Cloud
                </Button>
                <Button className="flex-1 bg-gray-200 text-gray-500 rounded-lg p-1" variant="outline">
                  <svg
                    className=" h-4 w-4 mr-2"
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download PDF
                </Button>
              </div>
            </div>
            <div className="bg-white dark:bg-white p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-800 mb-4">Submit Feedback</h2>
              <div className="flex space-x-4 mb-4">
                <Button className="flex-1 bg-gray-200 text-gray-500 rounded-lg p-1" variant="outline">
                  <svg
                    className=" h-4 w-4 mr-2"
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
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                  Thumbs Up
                </Button>
                <Button className="flex-1 bg-gray-200 text-gray-500 rounded-lg p-1" variant="outline">
                  <svg
                    className=" h-4 w-4 mr-2"
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
                    <path d="M17 14V2" />
                    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                  </svg>
                  Thumbs Down
                </Button>
              </div>
              <textarea
                className="w-full rounded-lg p-2 border border-blue-300 dark:border-white dark:bg-white dark:text-gray-800"
                placeholder="Type your feedback here..."
              />
              <Button className="w-full bg-gray-200 text-gray-500 rounded-lg p-2 mt-4" variant="outline">
                Submit Feedback
              </Button>
            </div>
          </div>
        </section>
      </main>
      <aside className="w-64 bg-white dark:bg-gray-700 overflow-y-auto">
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost">
              <svg
                className=" h-5 w-5"
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
                <path d="m6 9 6 6 6-6" />
              </svg>
              <span className="sr-only">Toggle collapse</span>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="px-6 py-4">
              <h1 className="text-center text-lg dark:text-gray-200 mt-2 mb-4">Chain of Thought</h1>
              <ul className="mt-4">
                <li className="flex items-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg">
                  <svg
                    className=" h-4 w-4 mr-2"
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Thought 1
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg">
                  <svg
                    className=" h-4 w-4 mr-2"
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Thought 2
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg">
                  <svg
                    className=" h-4 w-4 mr-2"
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Thought 3
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg">
                  <svg
                    className=" h-4 w-4 mr-2"
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Thought 4
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg">
                  <svg
                    className=" h-4 w-4 mr-2"
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Thought 5
                </li>
              </ul>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </aside>
    </div>
  )
}
