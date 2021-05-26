//------------------- Question 1

/* let arr = [1,2,3,8,5,6,9,7,4,10];

arr.map((value)=>{
  if(value%2 === 0){
    console.log(value);
  }
}) */


//----------------Question 2

/* 
let arr1=[0,0,1,1,0,0,0,1,0,0,1,1,1,0];
let arr2=[1,0,0,0,0,1,0,0,0,1];

let count; 
let counts= new Array;

arr1.map((value,i)=>{
  if(value === 1){
    count=1;
    for(let j=i+1; j<arr1.length; j++){
      if(arr1[j] === 1){
        count++;
      }else{
        j=arr1.length;
      }
    }
    counts.push(count);
    console.log(counts);
  }
});

console.log(`Max num of consecutive 1's in arr1 is ${Math.max(...counts)}`); */


/* -----------Question 3------------ */

/* let arr= new Array(101);
let repeatednum;

for(let i=0; i<101; i++){
  arr[i]=i;
}
arr[8]=7;
console.log(arr);

   //To find repeated num--
arr.map((value,i)=>{
  for(let j=i+1; j<101; j++){
    if(value === arr[j]){
      repeatednum= value;
    }
  }
})

console.log(`Repeated number in array is ${repeatednum}`);
 */
 

// ------------------------------Question 4-----------------------//


function check() {
    let fname= document.forms['myform']['firstname'].value;
    if(fname === ''){
        alert('Must fill firstname');
        return false
    }
}

/* ------------------Question 7-------------- */

// fetch('www.example.com/api/get/1')

// .then((apidata)=>{
//     console.log(apidata.json());
// })
// .catch((err)=>{
//     console.log(err);
// })


// ------------------------------Question 8-----------------------//


// var arr = [
//     {id : 4, name : 'abc'},
//     {id : 10, name : 'ab2'},
//     {id : 5, name : 'abc3'},
//     {id : 6, name : 'abc5'}
// ]

// var newarry=[];

// arr.forEach((obj, i) => {
//     newarry[i]=JSON.stringify(obj);
// });

// console.log(newarry);

// let sortedarray=[];

// newarry.map((value,i)=>{
//     let obj=JSON.parse(value);
//     let temp;
    
//     for(let j=i+1; j< newarry.length; j++){
//         let obj2=JSON.parse(newarry[j]);
        
//         if(obj.id > obj2.id){
//             temp = newarry[i];
//             newarry[i]=newarry[j];
//             newarry[j]=temp;
//             temp = obj;
//             obj=obj2;
//             obj2=temp;
//         }
//     }
// })

// console.log(newarry);





   