import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { tripsData } from "@/public/data"
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { setBillState } from '@/redux/billSlice';


const TripDetail = () => {


  const router = useRouter();
  const { tripId } = router.query;

  const user = useSelector((state) => state.userState.user)
  const dispatch = useDispatch();


  const trip: { id: number; from: string; to: string; time: string; date: any; seats: { no: number; reserved: boolean; sex: string }[] }[] = []
  useEffect(() => {
  }, [tripId]);
  
  const filterTriplist = () => {
    tripsData.map(item => {return item.id === tripId ? trip.push(item) : "" }
    )
  }
  filterTriplist()

  const [selectedSeat, setSelectedSeat] = React.useState<any[]>([])



  
  
const seatSelect = (i : number) => {
  console.log(i)
  if (!selectedSeat.includes(i)) {
    if (selectedSeat.length  < 5 ) {
      if (i % 2 === 0) {
        if (trip[0].seats[i - 2].sex === user.sex || trip[0].seats[i - 2].sex === "" ) {
          setSelectedSeat([...selectedSeat, i])
        }else {
          alert("Farklı Cinsiyetteki kişiler yan yana bilet Almaz!!")
        }
      }
      else {
        if (trip[0].seats[i].sex === user.sex || trip[0].seats[i].sex === "" ) {
          setSelectedSeat([...selectedSeat, i])
        }else {
          alert("Farklı Cinsiyetteki kişiler yan yana bilet Almaz!!")
        }
      } 
    }else {alert("En Fazla 5 adet bilet Secebilirsiniz !!!")}
  } else {
    const newArray = selectedSeat.filter(s => s !== i)
    console.log("newArray :" , newArray)
    setSelectedSeat(newArray)
  }
}

const goToPayment = () => {
  dispatch(setBillState({
    selectedSeats : selectedSeat,
    price : selectedSeat.length * 100
}))
router.push("/payment")
}

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
        <div className="bg-white bg-opacity-70 flex justify-evenly items-center p-10 mx-auto rounded-2xl h-full gap-20">
            <div className="flex flex-col">
                <div className="flex p-3 gap-5">
                    <div className="flex flex-col justify-center items-center p-1">
                        <span className="w-5 h-5 bg-gray-500"></span>
                        <span>Boş</span>
                    </div>
                    <div className="flex flex-col justify-center items-center p-1">
                        <span className="w-5 h-5 bg-blue-500"></span>
                        <span>Erkek</span>
                    </div>
                    <div className="flex flex-col justify-center items-center p-1">
                        <span className="w-5 h-5 bg-pink-500"></span>
                        <span>Kadın</span>
                    </div>
                </div>
                <div className="p-4 gap-4 w-64 border-2 border-red-500 grid grid-cols-6">
                  {trip[0].seats.map((seat) => <button 
                  className={`${seat.no == 3 || seat.no == 7 || seat.no == 11 || seat.no == 15 || seat.no == 19 ? "col-start-5" :""} w-5 h-5 bg-gray-500 flex items-center justify-center cursor-pointer ${seat.sex === "female" ? "bg-pink-600": ""}  ${seat.sex === "male" ? "bg-blue-600": ""}`} 
                  key={seat.no}
                  onClick={() => seatSelect(seat.no)}
                  
                  >{seat.no}</button>)}
                </div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-1 flex-col'><span className='text-2xl font-bold border-b border-gray-500 p-1 '>Seçilen Koltuklar</span> <span className='flex gap-2 text-lg font-semibold h-8'>{selectedSeat.map((seat) => <span key={seat}> {seat} </span>)}</span> </div>
              <div className='flex flex-col gap-1'><span className='text-2xl font-semibold border-b border-gray-500 p-1 '>Toplam Turtar</span> <span className='text-lg font-semibold h-8'>{selectedSeat.length * 100} TL</span> </div>
              <button className='bg-lime-600 text-white rounded-3xl p-2' onClick={()=> goToPayment()}>Ödeme</button>
            </div>
        </div>

    </div>
  );
};

export default TripDetail;
