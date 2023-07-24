import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'


const Payment = () => {

  const router = useRouter()


  const bill = useSelector((state) => state.billState.bill);

  const [cardNo, setCardNo] = useState('');
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');

  const [spinner, setSpinner] = useState(false)


  const handleCardNoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setCardNo(newValue);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setName(newValue);
  };
  const handleSurNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSurName(newValue);
  };

  const payAction = () => {
    if(cardNo.length === 10){
      setSpinner(true)
      setTimeout(() => {
        router.push("/")
      }, 1000);
    }else {alert("Kart No 10 Haneli Olmalı !!!")}
  }

  console.log(bill);
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <div className={`${spinner === true ? "flex" : "hidden"} flex justify-center items-center absolute bg-white p-10 rounded-3xl bg-opacity-50`}>
        <div className={`${spinner === true ? "flex" : "hidden"} animate-spin rounded-full h-32 w-32 border-t-8 border-green-700`}></div>
      </div>
      <div className="bg-white bg-opacity-60 rounded-3xl p-10">
        <div className="flex flex-col gap-2">
          <div className='flex flex-col gap-1'>
            <span className="border-b border-gray-500 text-xl font-bold">Secilen Koltular</span>
            <span className="flex gap-2 font-semibold text-lg">{bill.selectedSeats.map((seat:number) => 
            <span key={seat}>{seat}</span>)}</span>
          </div>
          <div className='flex flex-col gap-1'><span className="border-b border-gray-500 text-xl font-bold">Tutar</span><span className="font-semibold text-lg">{bill.price}</span></div>
          <div className='flex flex-col gap-1'>
            <span className="border-b border-gray-500 text-xl font-bold">Kart Sahibinin Adı ve Soyadı</span>
            <div className='flex gap-3'>    
              <input 
                type="text"
                value={name}
                onChange={handleNameChange}
                className='p-1'/>
              <input 
                type="text"
                value={surName}
                onChange={handleSurNameChange}
                className='p-1'/>                
            </div>

          </div>
          <div className='flex flex-col gap-1'>
            <span className="border-b border-gray-500 text-xl font-bold">Kart No:</span>
            <input type="number"
                    value={cardNo}
                    onChange={handleCardNoChange}
            className='p-1'/>
          </div>
          <button className='bg-green-700 p-3 mt-5 rounded-3xl text-xl font-bold text-white hover:bg-green-600' onClick={()=> payAction()}>TAMAMLA</button>
        </div>
      </div>
    </div>
  )
}

export default Payment