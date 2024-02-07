// const arrayList = [NaN,undefined,2,-15,null,12,-8,89,45,'ajjaj']

function deleteInvalids(array){
  if(Array.isArray(array) !== true){
    return 'Insert an Array';
  }

  let newArray=[];

  for(const list of array){
    if(isNaN(list)){
      continue;
    }
    else if(typeof list === 'number'){
      newArray.push(list);
    }  
  }
  return newArray
}

let finalArray = deleteInvalids();
console.log(finalArray);

