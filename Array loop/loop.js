// let num =0;

// do{
// console.log(num);
// num++;
// }while(num <= 5);  //1 2 3 4 5

// do{
//   console.log(num);
//   num++;
//   }while(num > 5);  // output: 0



// let arr = [2, 4, 6, 5, 8, 3];

// let len = arr.length;

// for (let i = 0; i < len; i++) {
  
//   if (arr[i] === 5) {
//     console.log(`No. found at index:  ${i}`);
//     break;
//   }
//   else{
//     console.log('Not found in the array');
//   }
// }


let day =5;

switch (day) {
  case 1:
      dayName = 'Monday';
      break;
   case 2:
      dayName = 'Tuesday';
      break;
    case 3:
        dayName = 'Wedday';
        break;
    case 4:
          dayName = 'Thursday';
          break;
    case 5:
            dayName = 'Friday';
            break;
    default:
      console.log('Plz enter valid day!');
      break;
  }

  console.log(dayName);
