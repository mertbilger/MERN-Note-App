import { useEffect } from "react";
import NotDetay from "../components/NotDetay";
import NotForm from "../components/NotForm";
import { useNotContext } from "../hooks/useNotContext";
import DigitalClock from "../components/DigitalClock";
import { Notlar, FormNote } from "../StyledComponents/HomeStyled";
import {useAuthContext} from '../hooks/useAuthContext'

const Home = () => {

//const [notlar,setNotlar]=useState(null)
const {notlar,dispatch}=useNotContext()

const {kullanici}=useAuthContext();

useEffect(()=>{

  const fetchNotlar=async ()=>{
      const response=await fetch('/api/notlar',{
        headers:{
          'Authorization':`Bearer ${kullanici.token}`
        }
      })

      const json=await response.json()

      if(response.ok){
        //setNotlar(json)
        dispatch({type:'NOT_DOLDUR',payload:json})
      }
  }

  if(kullanici){
    fetchNotlar()
  }
  //fetchNotlar()

},[dispatch,kullanici])
  return (
    <div>
      <FormNote><NotForm /></FormNote>
      <Notlar>
        {notlar &&
          notlar.map((not) => (
            <NotDetay key={not._id} not={not} />
          ))}
      </Notlar>
      <DigitalClock />
    </div>
  );
};

export default Home;
