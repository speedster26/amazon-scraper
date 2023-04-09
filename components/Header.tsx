'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";


function Header() {
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const input = inputRef.current?.value
        
        if(!input) return
        const notification = toast.loading(`Starting a Scraper for ${input}...`)
        if(inputRef.current?.value) {
            inputRef.current.value = ""
        }
        try{
            // Call our API to activate the Scrapper
            const response = await fetch('/api/activateScraper', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ search: input })
            })
            const { collection_id, start_eta } = await response.json()
            toast.success(`Scraper Started Successfully`,{id: notification})
            router.push(`/search/${collection_id}`)
        }
        catch (error){
            toast.error("Whoops... Something Went Wrong!",{
                id: notification
            })
        }
    }
  return (
    <>
    <Toaster/>
    <header>
        <form className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-sky-100 max-w-md" onSubmit={handleSubmit}>
            <input ref={inputRef} className="flex-1 outline-none bg-transparent text-sky-400 placeholder:text-sky-300" type="text" name="search" id="search" placeholder="Search..."/>
            <button hidden>Search</button>
            <MagnifyingGlassIcon className="h-6 w-6 text-sky-600"/>
        </form>
    </header>
    </>
  )
}

export default Header