import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'
export default function Home() {
  return (
    <div className='mt-4'>
      <div className='flex flex-col items-center justify-center'>
        <DocumentMagnifyingGlassIcon className='md:h-62 md:w-64 h-32 w-32 text-sky-600/20' />
        <h1 className='md:text-2xl text-lg mt-2 text-center text-black font-bold mb-5'>Welcome to the Amazon Web Scraper</h1>
      </div>
    </div>
  )
}
