setInterval(() => {
    date=new Date();
    htime=date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();
    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;

   hours.style.transform=`rotate(${hrotation}deg)`
   minutes.style.transform=`rotate(${mrotation}deg)`
   seconds.style.transform=`rotate(${srotation}deg)`
}, 1000);

setInterval(() => {
    document.getElementById("my_audio1").play();
    console.log('Your audio is started just now');
  }, 60000);
setInterval(() => {
    document.getElementById("my_audio2").play();
    console.log('Your tick audio is started just now');
  }, 1000);