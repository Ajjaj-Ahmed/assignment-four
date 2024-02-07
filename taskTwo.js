function checkName(name){
   
    const nameLastletter =name[name.length-1];
    const letterList = ['a','e','i','o','w','y','u']
    for(const list of letterList){

      if(typeof name !=='string'){
        return 'Insert an string';
        }
      else if(list === nameLastletter){
        return 'Good Name';
      }
     else if(list !== nameLastletter){
        continue;
      } 
    }
    return 'Change the name'
}
 let message = checkName('ajjajw');
 console.log(message);


let name='ajjaj';
// console.log(typeof name)
