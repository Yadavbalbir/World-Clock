    let ct;
    let time;
    var h,m,s;
    function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }

    setInterval(() => {
       
        ct=new Date();
        h=addZero(ct.getHours());
        m=addZero(ct.getMinutes());
        s=addZero(ct.getSeconds());
        time=h+':'+m+':'+s;
        document.getElementById('time').innerText=time;
    }, 1000);
