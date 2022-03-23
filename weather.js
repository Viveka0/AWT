async function weather() {
   let cityname=document.getElementById("test");
   let url="https://api.openweathermap.org/data/2.5/weather?q="+cityname.value+"&appid=4f8ac048bb61d07429ce719f3be49224";

   const resp = await fetch(url);
   let data = await resp.json();
   console.log(data);
  let {main: {temp,temp_min,temp_max}}=data;
  console.log("temp:"+temp);
  console.log("temp_min:"+temp_min);
  console.log("temp_max:"+temp_max);
}