

const sessionStoreItem = (data)=>{
  sessionStorage.setItem(data,data)
}



const sessionDeleteItem = (data)=>{
  sessionStorage.removeItem(data)
}


export{ sessionStoreItem, sessionDeleteItem }
