

const sessionStoreItem = (data)=>{
  sessionStorage.setItem(data,data)
}

const sessionDeleteItem = (data)=>{
  sessionStorage.removeItem(data)
}

const sessionStorageArray = ()=>{
  let arrays =[]
 for(let i=0; i<sessionStorage.length; i++) {
   let key = sessionStorage.key(i);
    arrays.push(sessionStorage.getItem(key));
 }
 return arrays
}


export{ sessionStoreItem, sessionDeleteItem, sessionStorageArray }
