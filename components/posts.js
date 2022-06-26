import Post from "./post"

const posts = [
    {
        id:'123',
        username:'heyyya',
        userImg:'http://links.papareact.com/3ke',
        img:'http://links.papareact.com/3ke',
        caption:'Subscribe & Like'
    },
    {
        id:'123',
        username:'heyyya',
        userImg:'http://links.papareact.com/3ke',
        img:'http://links.papareact.com/3ke',
        caption:'Subscribe & Like'
    },

    {
        id:'123',
        username:'heyyya',
        userImg:'http://links.papareact.com/3ke',
        img:'http://links.papareact.com/3ke',
        caption:'Subscribe & Like'
    },

]

export default function Posts() {
    return (
        <div>
            { posts.map((post) => 
            <Post 
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}    
            /> 
            )}
        </div>
    )
}