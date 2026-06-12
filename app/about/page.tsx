import { aboutme } from 'app/components/about'

export const metadata = {
  title: 'About',
  description: 'General information on ME.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About Me</h1>
      <p className="mb-4">
       {`Hello and Hi, Just a guy who is sharing thoughts and ideas to the world under name "Ahamed". 
          Not specific to Tech, it can be general talk, lets just say anything that comes to my mind.
          to simply put I would talk here instead of going out to real world, like any normal people would do.
          This introduction is enough for now and I mostly thinks its going to be one way communication, 
          cause I haven't figure it out much in web development. so see you then and check the blog`} 
      </p>
    </section>
  )
}
