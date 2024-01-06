// Date format: mm dd, yyyy at hh:mm
export function FormatDate({ date } : { date: Date}) {
  date=new Date(date);
  const month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return month[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear();//+' at '+date.getHours()+':'+date.getMinutes();
}

// Views/Likes format: 1.2k, 1.2m, 1.2b
export function FormatCount({ count } : { count: number }) {
  let newCount: string | number = count;
  if (count>=1000) {
    newCount=count/1000;
    if (count>=1000000) {
      newCount=count/1000000;
      if (count>=1000000000) {
        newCount=count/1000000000;
        newCount=newCount.toFixed(1)+'b';
      } else {
        newCount=newCount.toFixed(1)+'m';
      }
    } else {
      newCount=newCount.toFixed(1)+'k';
    }
  }
  return newCount;
}
