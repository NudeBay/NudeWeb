import { useUser } from '@auth0/nextjs-auth0/client'
import './page.module.scss'
import Post from '@/components/Post'

export default function Home() {
  const { user, error, isLoading } = useUser();
  if(isLoading) return <section>Loading...</section>;
  if(error) return (
    <section>
      <h1>Error</h1>
      <p>{error.message}</p>
    </section>
  );

  return (
    <section>
      <Post id={'507f191e810c19729de860ea'} content={['', '']} tags={['dupa', 'kupa']} author={{nick:'Zuzaa Olechowska', picture: '', badges:[]}} date={new Date()} likes={1} views={2137} />
    </section>
  )
}
