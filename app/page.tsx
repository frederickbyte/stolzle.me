import { GitHubIcon, ReadCvIcon } from "@/components/icons";
import Link from "next/link";

export default function Home() {
  const araUrl: string = 'https://www.ara.com';
  const nextJsUrl: string = 'https://nextjs.org';
  const readCvUrl: string = 'https://read.cv/stolzle';
  const githubUrl: string = 'https://github.com/frederickbyte/stolzle.me';
  return (
    <section className='flex flex-col flex-1 gap-6 items-center md:items-start'>
      <h1 className='font-bold text-[1.5em]'>Andrew Stolzle</h1>
      <p className='md:leading-6 lg:leading-9'>Previously at <Link href={araUrl} as={araUrl} className='p-1 rounded bg-pastelBlue hover:bg-pastelBlueHover'>Applied Research Associates</Link>.
        Developing some web projects remotely in Louisiana with a small team.</p>
      <p className='md:leading-6 lg:leading-9'>Built this (minimal) site with
        <Link href={nextJsUrl} as={nextJsUrl} className='ml-2 p-1 rounded bg-pastelYellow hover:bg-pastelYellowHover'>NextJs</Link>, a wonderful React framework.
        The purpose of life is to <span className='p-1 rounded bg-pastelYellow'>be happy</span>. Take advantage of every day.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href={readCvUrl}
          as={readCvUrl}
          target="_blank"
          className="flex items-center justify-center w-fit rounded-md text-defaultText bg-white py-2 px-3 text-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <ReadCvIcon />
          View CV
        </Link>
        <Link
          href={githubUrl}
          as={githubUrl}
          target="_blank"
          className="flex items-center justify-center w-fit rounded-md text-defaultText bg-white py-2 px-3 text-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <GitHubIcon />
          Source
        </Link>
      </div>

    </section>
  )
}
