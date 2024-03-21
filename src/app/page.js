import Allrecipe from './component/Allrecipe/Allrecipe'

export default function Home() {
  return (
    <main className="">
      <div className='mx-auto pt-10'>
        <h1 className='text-center uppercase  text-white font-extrabold text-5xl '>All Recipies</h1>
      </div>
      <Allrecipe></Allrecipe>
    </main>
  )
}
