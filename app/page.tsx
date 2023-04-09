import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'
export default function Home() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
        <DocumentMagnifyingGlassIcon className='h-62 w-64 text-sky-600/20' />
        <h1 className='text-2xl mt-2 text-center text-black font-bold mb-5'>Welcome to the Amazon Web Scraper</h1>
        {/* <h2 className='text-base italic text-center text-black/50'>To learn how to code from ZERO experience, join ZERO TO FULL STACK HERO</h2> */}
      </div>
    </div>
  )
}
