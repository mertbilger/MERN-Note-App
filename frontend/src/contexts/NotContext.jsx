import { createContext, useReducer } from 'react';

// 1. NotContext adında bir bağlam (context) oluşturuyoruz.
export const NotContext = createContext();

// 2. NotReducer adında bir azaltıcı (reducer) işlevini tanımlıyoruz.
export const NotReducer = (state, action) => {
  // Bu azaltıcı işlev, belirli eylemlere yanıt olarak bağlamın durumunu günceller.

  switch (action.type) {
    // 2.1. 'NOT_OLUSTUR' eylemi: Bu eylem, yeni bir not oluşturmak için kullanılır.
    case 'NOT_OLUSTUR':
      // Yeni bir not eklerken, mevcut notları koruyarak yeni notu en başa ekliyoruz.
      return {
        notlar: [action.payload, ...state.notlar]
      };

    // 2.2. 'NOT_DOLDUR' eylemi: Bu eylem, notları tamamen değiştirmek için kullanılır.
    case 'NOT_DOLDUR':
      // Bu eylem, bir dizi notu alır ve mevcut notları bu yeni diziyle değiştirir.
      return {
        notlar: action.payload
      };

    // 2.3. 'NOT_SIL' eylemi: Bu eylem, belirli bir notu silmek için kullanılır.
    case 'NOT_SIL':
      // Verilen notun ID'si ile uyuşmayan notları filtreleyerek belirtilen notu çıkarırız.
      return {
        notlar: state.notlar.filter((n) => n._id !== action.payload._id)
      };

    // Eğer eylem tipi tanımlanmamışsa veya uygun bir eylem yoksa, mevcut durumu değiştirmeyiz.
    default:
      return state;
  }
};

// 3. NotContextProvider bileşeni, bağlamı ve azaltıcıyı kullanarak verileri yönetir.
export const NotContextProvider = ({ children }) => {
  // Başlangıç durumunu ve azaltıcıyı kullanarak bir bağlamın durumunu yönetiyoruz.
  const [state, dispatch] = useReducer(NotReducer, {
    notlar: null
  });

  return (
    // 3.1. NotContext.Provider ile bağlamı oluşturuyoruz ve içine durumu ve azaltıcıyı değer olarak sağlıyoruz.
    <NotContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NotContext.Provider>
  );
};

export default NotContextProvider;
