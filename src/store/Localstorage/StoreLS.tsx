const StoreLS = () => {

   const StoreInLS = (item:{id:string, text:string})=>{
    let Store:{id:string, text:string}[];
    if(localStorage.getItem('Store') === null){
        Store = [];
    }
    else{
        Store = JSON.parse(localStorage.getItem('Store')!)
    }
    Store.push(item)
    localStorage.setItem('Store',JSON.stringify(Store))
    return;
   }

  return StoreInLS
}

export default StoreLS