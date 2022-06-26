import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

export default function Suggestions(){
    const [suggestions, setSuggestion] = useState([])

    function createRandomUser() {
        return {
          username: faker.internet.userName(),
          email: faker.internet.email(),
          avatar: faker.image.avatar(),
          password: faker.internet.password(),
          birthdate: faker.date.birthdate(),
          registeredAt: faker.date.past(),
        };
      }

    useEffect(()=>{
        const suggestions = [...Array(5)].map((_,i)=>({
            ...createRandomUser(),
            id: i
        }))

        setSuggestion(suggestions)
    },[])

    return(
        <div className='mt-8 ml-4'>
            <div className='flex justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
                <button className='text-gray-500 font-semibold'>See All</button>
            </div>
            {
                suggestions.map((profile)=>(
                    <div key={profile.id}
                    className='flex items-center justify-between mt-5'>
                        <img 
                        className='rounded-full w-10 h-10 border p-[2px]'
                        src={profile.avatar}  alt=''/>

                        <div className='flex-1 ml-4'>
                            <h2 className='text-sm font-semibold'>{profile.username}</h2>
                            <h3 className='text-xs text-gray-400'>Seoul</h3>
                        </div>
                        <button className='text-blue-400 text-xs'>Follow</button>
                    </div>
                ))
            }
        </div>
    )
}