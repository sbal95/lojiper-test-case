import {useSelector} from "react-redux"
import { useRouter } from 'next/router'



const Trips = () => {
  interface trips {
    trips: any
}
  
  const router = useRouter()

  const trips = useSelector((state) => state.tripState.trips);
  
  const routeDetails = (id : string) => {
  router.push("/tripDetail/"+ id)}

  return  (
    <div className="h-screen w-screen flex justify-center items-start pt-[10%]">
      <div className="container mx-auto w-full p-5 bg-white bg-opacity-60 rounded-3xl">
        <div className="w-full border-b-2 border-slate-600 grid grid-cols-5 p-2 text-xl font-bold text-center">
          <div>Nereden</div>
          <div>Nereye</div>
          <div>Tarih</div>
          <div>Saat</div>
          <div>Detay</div>
        </div>
        {trips.map((trips : any,i : any) => (
        <div className="grid grid-cols-5 w-full text-center uppercase items-center font-semibold border-b p-1 border-slate-600" key={i}>
          <div>{trips.from}</div>
          <div>{trips.to}</div>
          <div>{trips.date}</div>
          <div>{trips.time}</div>
          <div><button className="bg-lime-700 text-white p-3 h-full rounded-xl" 
          onClick={() => routeDetails(trips.id)}>Detaya Git</button></div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Trips