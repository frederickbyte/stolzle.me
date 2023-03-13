import Posts from "@/components/posts";
import Link from "next/link";

export default function Home() {
  const araUrl: string = 'https://www.ara.com';
  return (
    <section className='flex flex-col flex-1 gap-6 items-start'>
      <h1 className='font-bold text-[1.5em]'>Andrew Stolzle</h1>
      <p className='md:leading-6 lg:leading-7'>Previously at <Link href={araUrl} as={araUrl} className='py-[0.15em] px-1 rounded bg-pastelGrey hover:bg-pastelGreyHover'>Applied Research Associates</Link>.
        Developing some web applications remotely in the U.S. with a small team.
        The purpose of life is to <span className='py-[0.15em] px-1 rounded bg-pastelBlue'>be happy</span>. Take advantage of every day.
      </p>
      <Posts />
    </section>
  )
}
