import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react';
import Story from './story';

export default function Stories() {
    const [suggestion, setSuggestion] = useState([])

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

    useEffect(() => {
        const suggestions = [...Array(20)].map((_,i)=>({
            ...createRandomUser(),
            id: i,
        }))
        setSuggestion(suggestions)
    }, []);

    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 
        border-gray-200 border rounded-sm
        overflow-x-scroll scrollbar-thumb-black scrollbar-thin'>
            { suggestion.map((profile) => 
                <Story 
                    key={profile.id} 
                    img={profile.avatar} 
                    username={profile.username}
                />
            )}
        </div>
    )
}