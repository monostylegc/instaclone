import { getProviders , signIn as SignIntoProvider } from 'next-auth/react'

export default function signIn({providers}) {
    return (
        <div>
            {Object.values(providers).map((provider)=>
            {
                return (
                    <div key={provider.name}>
                        <button onClick={()=>SignIntoProvider(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders()
    
    return{
        props : {
            providers,
        }
    }
}