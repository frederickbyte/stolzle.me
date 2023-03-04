import Link from "next/link";

export default function Home() {
  const araUrl: string = 'https://www.ara.com';
  const nextJsUrl: string = 'https://nextjs.org';
  return (
    <section className='flex flex-col flex-1 gap-6'>
      <h1 className='font-bold text-[1.5em]'>Andrew Stolzle</h1>
      <p className='md:leading-6 lg:leading-10'>Previously at <Link href={araUrl} as={araUrl} className='p-1 rounded bg-pastelBlue hover:bg-pastelBlueHover'>Applied Research Associates</Link>.
        Currently working remotely in Louisiana on some web projects.</p>
      <p className='md:leading-6 lg:leading-10'>Built this (minimal) site with
        <Link href={nextJsUrl} as={nextJsUrl} className='ml-2 p-1 rounded bg-pastelYellow hover:bg-pastelYellowHover'>NextJs</Link>, a wonderful React framework.
        The purpose of life is to <span className='p-1 rounded bg-pastelYellow'>be happy</span>. More to say on that soon &mdash; stay tuned.
      </p>
    </section>
  )
}
