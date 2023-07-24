import { setUserState } from "@/redux/user"
import Link from "next/link"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from 'next/router'


const Login = () => {

  const userList = useSelector((state) => state.userListState.userList)
  console.log(userList)

  const dispatch = useDispatch()
  const router = useRouter()


  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")

  

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setUserName(newValue)
    console.log(userName)
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setPassword(newValue)
    console.log(password)
  };

  const loginAction = () => {
    const user: any[] = []
    userList.map(item => item.username === userName ? user.push(item) : "") 
    if (user[0].password === password) {
      dispatch(setUserState(user[0]))
      router.push("/tripSearch")
    }else{alert("Şifre Hatali")}
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-1/3 mx-auto border border-slate-600 rounded-2xl shadow-2xl shadow-slate-800 p-10 flex flex-col gap-5 relative bg-white">
            <div className="w-full justify-center items-center flex font-bold text-3xl">Hasabınıza Giriş Yapın</div>
            <input type="text" placeholder="Kullanıcı Adı" className="w-full h-8 p-2 border border-gray-500 rounded-xl "
            onChange={handleUserName}/>
            <input type="text" placeholder="Şifre..." className="w-full h-8 p-2 border border-gray-500 rounded-xl "
            onChange={handlePassword}/>
            <button className="w-full  p-2 bg-green-700 rounded-3xl flex justify-center items-center text-xl text-white hover:bg-green-600" 
            onClick={()=> loginAction()}
            >Giriş Yap</button>
            <Link href={"/register"} className="hover:underline w-full font-bold text-xl text-left">Üye Değilmisiniz? Üye Olun...</Link>
        </div>
    </div>
  )
}

export default Login