import { BlogPosts } from 'app/components/posts'
import localFont from 'next/font/local'

const electric = localFont({
  src:'/font-size/ModernAgeItalic-mL6om.ttf'
}) 

const elecctricRegular = localFont({
  src:'/font-size/ModernAge-PK6rd.ttf'
})

export default function Page() {
  return (
    //{/* <section> */}
    //{/*   <h1 className="mb-8 text-2xl font-semibold tracking-tighter"> */}
    //{/*     Its Ahamed.. */}
    //{/*   </h1> */}
    //{ </section> }*/
    <div className="main-page">
      <div className='heading-container'>
         <h1  className = {`${electric.className} page-author`}>It's Ahamed..</h1>
         <div className={`author-role ${elecctricRegular.className}`}>Kernal Expert</div>
      </div>   
    </div>
    )
}
