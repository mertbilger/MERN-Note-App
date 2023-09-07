import { useState } from "react";
import {
  Form,
  Title,
  CreateGroup,
  Label,
  Input,
  SubmitButton,
  ErrForm
} from "../StyledComponents/NotFormStyled";
import { useNotContext } from "../hooks/useNotContext";
import { useAuthContext } from '../hooks/useAuthContext';

const NotForm = () => {
  const {dispatch}=useNotContext()
  const {kullanici}=useAuthContext();

  const [baslik,setBaslik]=useState('')
  const [aciklama,setAciklama]=useState('')
  const [hata,setHata]=useState(null)
  const [bosAlanlar,setBosAlanlar]=useState([])

  const handleSubmit=async (e)=>{
    e.preventDefault()

    const not={baslik,aciklama}

    //console.log(not);

    if(!kullanici){
      setHata('Giriş yapmalısınız')
      return
    }

    const response=await fetch('/api/notlar',{
      method:'POST',
      body:JSON.stringify(not),
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${kullanici.token}`
      }
    })

    const json=await response.json()



    if(!response.ok){
      setHata(json.hata)
      setBosAlanlar(json.bosAlanlar)
    }

    if(response.ok){
      setHata(null)
      setBaslik('')
      setAciklama('')
      setBosAlanlar([])
      //console.log('yeni not eklendi',json);
      dispatch({type:'NOT_OLUSTUR',payload:json})
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Yeni Not Ekle</Title>
      <CreateGroup>
        <Label>Başlık</Label>
        <Input
          type="text"
          required
          value={baslik}
          onChange={(e) => setBaslik(e.target.value)}
        />
        <Label>Açıklama</Label>
        <Input
          type="text"
          required
          value={aciklama}
          onChange={(e) => setAciklama(e.target.value)}
        />
      </CreateGroup>
      <SubmitButton type="submit">Ekle</SubmitButton>
      {hata && <ErrForm>{hata}</ErrForm>}
    </Form>
  );
};

export default NotForm;
