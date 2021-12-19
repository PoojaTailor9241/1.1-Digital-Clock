function showtime()
{
    var date = new Date();
    var d = date.getDate();
    var mo = date.getMonth() + 1;
    var y = date.getFullYear();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h=updatetime(h);
    m=updatetime(m);
    s=updatetime(s);
    d=updatetime(d);
    mo=updatetime(mo);
    y=updatetime(y);
    var day = "DAY : " + d + "/" + mo + "/" + y  ;
    var time = "TIME : " + h + ":" + m + ":" + s;
    console.log(day);
    console.log(time);
    
}

function updatetime(k)
{
    if(k<10)
    {
        console.clear();
        return "0"+k;
    }
    else{
        console.clear();
        return k;
    }
}

setInterval(showtime,1000);
console.clear();