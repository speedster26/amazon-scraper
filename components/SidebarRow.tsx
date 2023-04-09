"use client";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { DocumentData } from "firebase/firestore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "react-spinkit";

type Props = {
    doc: DocumentData;
}

function SidebarRow({doc}:Props) {
    const router = useRouter();
    const pathname = usePathname();
    const [active, setActive] = useState(false)
    useEffect(() => {
      if(!pathname) return;
      setActive(pathname.includes(doc.id))
    }, [doc.id, pathname])
    
  return (
    <li onClick={()=>router.push(`/search/${doc.id}`)} className={`flex flex-col md:flex-row justify-between p-4 cursor-pointer hover:bg-white hover:shadow-md rounded-lg`}>
        <div className="flex flex-col justify-center">
            <p className="text-xs md:text-base font-bold">
                {doc.data().search}
            </p>
            {doc.data().status === 'pending' && (
                <p className="text-xs">Scraping informations...</p>
            )}
        </div>
        <span className="ml-2">
                {doc.data().status === 'pending' ? (
                    <Spinner name="cube-grid" fadeIn="none" color="sky"/>
                ):(
                    <CheckCircleIcon className="h-6 w-6 text-green-400"/>
                )}
        </span>
    </li>
  )
}

export default SidebarRow