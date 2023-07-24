import React, { useState } from "react";
import Link from "next/link";
import { setUserListState } from "@/redux/userList";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'


const Register = () => {

  const router = useRouter()

  const dispatch = useDispatch()
  const userList = useSelector((state) => state.userListState.userList)

  const [isSexPickerOpen, setIsSexPickerOpen] = useState(false)

  const [user, setUser] = useState(
        {
        username : "",
        password : "",
        email : "",
        name : "",
        surname : "",
        sex : "",
        birthDay : ""
        });

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setUser(prevState => ({
      ...prevState,
      ["username"]: newValue
  }));
  console.log(user)
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setUser(prevState => ({
      ...prevState,
      ["password"]: newValue
  }));
  console.log(user)
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setUser(prevState => ({
      ...prevState,
      ["name"]: newValue
  }));
  console.log(user)
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setUser(prevState => ({
      ...prevState,
      ["email"]: newValue
  }));
  console.log(user)
  };

  
  const handleBirthDay= (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setUser(prevState => ({
      ...prevState,
      ["birthDay"]: newValue
  }));
  console.log(user)
  };



  const handleSurName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setUser(prevState => ({
      ...prevState,
      ["surname"]: newValue
  }));
  console.log(user)
  };

  const setSex = (sex: any)=> {
    setUser(prevState => ({
      ...prevState,
      ["sex"]: sex
  }));
  setIsSexPickerOpen(!isSexPickerOpen)
  }
  

  const registerAction = () => {
    dispatch(setUserListState(user))
    console.log(userList)
    router.push("/login")


  }
  console.log(userList)

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/3 mx-auto border border-slate-600 rounded-2xl shadow-2xl shadow-slate-800 p-10 flex flex-col gap-5 relative bg-white relative">
        <div className="w-full justify-center items-center flex font-bold text-3xl">
          Hesap Oluşturun
        </div>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          className="w-full h-8 p-2 border border-gray-500 rounded-xl "
          onChange={handleUserName}
        />
        <input
          type="text"
          placeholder="Şifre..."
          className="w-full h-8 p-2 border border-gray-500 rounded-xl "
          onChange={handlePassword}

        />
        <input
          type="email"
          placeholder="E-posta"
          className="w-full h-8 p-2 border border-gray-500 rounded-xl "
          onChange={handleEmail}

        />
        <input
          type="text"
          placeholder="Ad"
          className="w-full h-8 p-2 border border-gray-500 rounded-xl "
          onChange={handleName}
        />
        <input
          type="text"
          placeholder="Soyad"
          className="w-full h-8 p-2 border border-gray-500 rounded-xl "
          onChange={handleSurName}

        />
        <div className="w-full flex justify-center items-center gap-3">
        <div className="relative w-full">
          <button className="border border-gray-500 w-full rounded-3xl text-lg font-bold "
          onClick={() => setIsSexPickerOpen(!isSexPickerOpen)}
          > 
          <span className="">Cinsiyet Secin</span>
          </button>
          <div className={`${isSexPickerOpen ? "flex" : "hidden"} border-b-none border border-gray-500 absolute  top-[101%] left-0 w-full flex-col z-20 bg-white `}> 
          <button className="border-b border-gray-500 p-1"onClick={() => setSex("male")}>Erkek</button>
          <button className="border-b border-gray-500 p-1"onClick={() => setSex("famale")}>Kadın</button>
          </div>
        </div>
        <input
          type="text"
          placeholder="Doğum Tarihi"
          className="w-full h-8 p-2 border border-gray-500 rounded-xl "
          onChange={handleBirthDay}
        />
        </div>

        <button className="w-full  p-2 bg-green-700 rounded-3xl flex justify-center items-center text-xl text-white hover:bg-green-600" 
        onClick={()=> registerAction()}
        >
          Hesap Oluştur
        </button>
        <Link
          href={"/login"}
          className="hover:underline w-full font-bold text-xl text-left"
        >
          Zaten Üyemisiniz? Giriş Yap...
        </Link>
      </div>
    </div>
  );
};

export default Register;
