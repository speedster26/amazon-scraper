'use client';

// import Results from '@/components/Results';
import { db } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid"
import SidebarRow from './SidebarRow';
import { useRouter } from 'next/navigation';

function Sidebar() {
  const [snapshot, loading, error] = useCollection(query(collection(db,"searches"),orderBy("start_eta","desc")))
  const router = useRouter()
  return (
    <div className='p-2 md:p-5 py-6 overflow-y-auto border-b border-sky-500/50'>
      <div className='flex flex-col items-center justify-center mb-10'>
        <DocumentMagnifyingGlassIcon className='h-16 md:w-16 text-sky-600' onClick={()=>router.push('/')}/>
        <h1 className='hidden md:inline text-2xl mt-2 mb-2 font-bold'>Web Scraper</h1>
        <h2 className='hidden md:inline text-xs italic'>Scraping the Unscrapable</h2>
      </div>
      <ul className='flex flex-col
       gap-2 py-2
       '>
        {snapshot?.docs.map((doc)=>(
          <SidebarRow key={doc.id} doc={doc}/>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar