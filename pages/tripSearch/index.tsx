import { useSelector, useDispatch } from 'react-redux';
import { tripsData } from '@/public/data';
import { useState } from 'react';
import { setTripState } from '@/redux/tripSlice';
import { useRouter } from 'next/router'


const TripSearch = () => {
    

    const router = useRouter()
  const trips = useSelector((state) => state.tripState);
  const user = useSelector((state) => state.userState.user)
  console.log(user)
  const dispatch = useDispatch();


    const cities = ["istanbul", "ankara","izmir"]

    const [isNeredenOpen, setIsNeredenOpen] = useState(false)
    const [nereden, setNereden] = useState("Nereden ?")
  
    const [isNereyeOpen, setIsNereyeOpen] = useState(false)
    const [nereye, setNereye] = useState("Nereye  ?")
  
    const forNereyeChange = (city: React.SetStateAction<string>)=> {
      setNereye(city)
      setIsNereyeOpen(!isNereyeOpen)
    }
  
    const forNeredenChange = (city: React.SetStateAction<string>)=> {
      setNereden(city)
      setIsNeredenOpen(!isNeredenOpen)
    }
  
    const [selectedDate, setSelectedDate] = useState<any | null>(null);
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const dateValue = event.target.value;
      setSelectedDate(new Date(dateValue));
    };

    const filteredTriplist: { id: string; from: string; to: string; time: string; date: any; seats: { no: number; reserved: boolean; sex: string }[] }[] = []
  
    const filterTriplist = () => {
        if(selectedDate != null) 
        {tripsData.map(trip => {trip.from === nereden && trip.to === nereye && trip.date === selectedDate.toISOString().split("T")[0]  ? filteredTriplist.push(trip) : "" ;})} 
      dispatch(setTripState(filteredTriplist))
      if(filteredTriplist.length > 0) {router.push("/trips")
    } else (alert("Sefer Bulunamadı Lütfen Bütün Alanları Doldurun Veya Farklı Bir Tarih Seçin..."))
    }
    return  (
      <div className="container mx-auto flex h-screen my-10 p-5 justify-center items-center gap-5  ">
        <div className="flex flex-col h-96 w-full justify-evenly items-center bg-white bg-opacity-50 rounded-3xl relative border shadow-2xl">
            <div> <span className="font-extrabold text-5xl">Sefer Arayın....</span></div>
           <div className='flex gap-5 relative'>
           <div className='relative bg-white '>
          <button className="border-2 border-gray-500 p-3 w-56 h-14 "
          onClick={() => setIsNeredenOpen(!isNeredenOpen)}
          > 
          <span className="uppercase"> {nereden}</span>
          </button>
          <div className={`${isNeredenOpen ? "flex" : "hidden"} absolute  top-[101%] left-0 w-full flex-col z-20 bg-white `}>{cities.map((city,i) => (
            <button className='p-1 border border-gray-500 bg-white uppercase'
            onClick={()=> forNeredenChange(city)}
            key={i}>{city}</button>
          ))}</div>
          </div>
          <div className="relative bg-white ">
          <button className="border-2 border-gray-500 p-3 w-56 h-14 relative"
          onClick={() => setIsNereyeOpen(!isNereyeOpen)}
          > 
          <span className="uppercase"> {nereye}</span>
          </button>
          <div className={`${isNereyeOpen ? "flex" : "hidden"} absolute  top-[101%] left-0 w-full flex-col `}>{cities.map((city,i) => (
            <button className='p-1 border border-gray-500 bg-white uppercase'
            onClick={()=> forNereyeChange(city)}
            key={i}>{city}</button>
          ))}</div>
          </div>
          <div >
          <input
            type="date"
            id="dateInput"
            value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
            onChange={handleDateChange}
            className='w-56 h-14 p-3 border-2 border-gray-500'
          />
        </div>
        <button className='h-full px-10 hover:bg-lime-600 text-white bg-lime-700 rounded-3xl uppercase font-semibold text-xl ' onClick={()=> filterTriplist()}>Ara</button>
            </div>
        </div> 


      </div>
    );
}

export default TripSearch
