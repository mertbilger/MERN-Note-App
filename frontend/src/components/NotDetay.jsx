import { useNotContext } from "../hooks/useNotContext";
import { Detay, Zaman } from "../StyledComponents/NotDetayStyled";
import { DateTime } from "luxon";
import { useAuthContext } from '../hooks/useAuthContext'

const NotDetay = ({ not }) => {
  const {dispatch}=useNotContext();
  const {kullanici}=useAuthContext();



  const handleClick= async ()=>{

    if(!kullanici){
      return
    }
    
    const response=await fetch('/api/notlar/'+not._id,{
      method:'DELETE',
      headers:{
        'Authorization':`Bearer ${kullanici.token}`
      }
    })

    const json=await response.json()

    if(response.ok){
      dispatch({type:'NOT_SIL',payload:json})
    }
  }

  const zaman = DateTime.fromISO(not.createdAt).toRelative();

  return (
    <Detay>
      <h4>{not.baslik}</h4>
      <p>{not.aciklama}</p>
      <Zaman>{zaman}</Zaman>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </Detay>
  );
};

export default NotDetay;
