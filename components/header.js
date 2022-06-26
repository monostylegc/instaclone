import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { signIn } from "next-auth/react"

export default function Header() {
    const { data: session, status } = useSession()

    console.log(status)

    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className="flex justify-between items-center max-w-6xl mx-5 xl:mx-auto">
                {/*Left*/}
                <div className='relative w-24 hidden lg:inline-grid cursor-pointer'>
                    <img 
                        src="http://links.papareact.com/ocw" 
                        alt='logo' 
                    />
                </div>
                <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                    <img 
                        src="http://links.papareact.com/jjm" 
                        alt='logo' 
                    />
                </div>
                {/* middle */}
                <div className='max-w-xs'>
                    <div className='relative mt-1 p-3 rounded-md '>
                        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input type='text' placeholder='Search' 
                        className='bg-gray-50 block w-full pl-10 sm:text-sm 
                        border-gray-300 rounded-md focus:ring-black focus:border-black' />
                    </div>
                </div>
                
                {/* right */}
                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon className='navBtn' />
                    <MenuIcon className='h-6 w-6 md:hidden cursor-pointer' />
                    
                    <div className='relative navBtn'>
                        <PaperAirplaneIcon className='rotate-45 navBtn' />
                        <div className='absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center animate-pulse'>3</div>
                    </div>
                    
                    <PlusCircleIcon className='navBtn' />
                    <UserGroupIcon className='navBtn' />
                    <HeartIcon className='navBtn' />

                    <img src={session?.user?.image} alt='profile img' 
                    className='h-10 w-10 rounded-full cursor-pointer border-2 border-black' 
                    onClick={ signIn }/>
                </div>
            </div>
        </div>
    )
}