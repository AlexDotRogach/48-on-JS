export function fetchUsers(){
    return  fetch('https://jsonplaceholder.typicode.com/users')
    .then(r=> {
      if(!r.ok){
          throw new Error('Error')
      }
      
      return r.json()
    })
    .catch(err=>console.log(err.message))
  }