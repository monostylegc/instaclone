export default function MiniProfile () {
    return(
        <div className="flex items-center justify-between mt-6 ml-4 ">
            <img src='http://links.papareact.com/3ke' 
            alt=''
            className="rounded-full border p-[2px] w-14 h-14"/>
            <div className="flex-1 mx-2">
                <h2 className="font-bold">name</h2>
                <h3 className="text-xs text-gray-400">Welcome to Instagram</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Sign out</button>
        </div>
    )
}