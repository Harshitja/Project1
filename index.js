const objects = { weekday: 'long', year:
'numeric', month: 'long', day: 'numeric' };
        setInterval(() => {
            
        let date
        let time
            a=new Date()
            date = a.toLocaleDateString(undefined,objects);
            time=a.toLocaleTimeString();

            // you can also use this function of time 

            // time=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()
            
            document.getElementById('time').innerHTML= time + " <br>Today is "+date ;
        }, 1000);