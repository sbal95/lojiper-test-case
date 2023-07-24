import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  const login = () => {
    router.push("/login")
  }
  const register = () => {
    router.push("/register")
  }
  
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='bg-white bg-opacity-60 flex flex-col gap-5 p-10 rounded-2xl'>
          <button className='p-3 px-40 bg-green-700 hover:bg-green-600 text-white font-bold text-2xl rounded-2xl' onClick={()=> login()}>Giriş Yap</button>
          <button className='p-3 px-40 bg-sky-800 hover:bg-sky-600 text-white font-bold text-2xl rounded-2xl' onClick={()=> register()}>Üye Ol</button>
        </div>
    </div>
  )
}
