const background = {

  Thunderstorm:
    "https://images.unsplash.com/photo-1597075490504-8832142f85cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",

    Drizzle:
    "https://images.unsplash.com/photo-1508873760731-9c3d0bb6b961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",

    Rain:
    "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",

    Snow:
    "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
   
    Tornado:
    "https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=778&q=80",
   
    Squall:
    "https://images.unsplash.com/photo-1577472075537-2072bb6de039?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
   
    Ash:
    "https://images.unsplash.com/photo-1500676272244-4aea228b2dff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
   
    Dust:
    "https://images.unsplash.com/photo-1520632587893-f4e855502ca3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
   
    Sand:
    "https://images.unsplash.com/photo-1534171472159-edb6d1e0b63c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
   
    Fog:
    "https://images.unsplash.com/photo-1510596713412-56030de252c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
   
    Haze:
    "https://images.unsplash.com/photo-1542461319-aada3805a5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
   
    Smoke:
    "https://images.unsplash.com/photo-1503217195339-397eb18024e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
   
    Mist:
    "https://images.unsplash.com/photo-1495102675274-3ba61637d5bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
   
   
   
    Clear:
    "https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
   
    Clouds:
    "https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
};

const today = new Date()

const date = today.getDate() +'/ '+ (today.getMonth() + 1) +'/ '+ today.getFullYear()


class UI {
  showeather(weather) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${weather.city}&appid=${weather.api}&units=metric`
    )
      .then((res) => res.json())
      .then(function (data) {
      console.log(data)
        document.body.style.backgroundImage =
            `url(${background[data["weather"][0]["main"]]})`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.transition = 'all ease-in-out 2s'
        
        // call....
        const mintepvalue = data.main.temp_min;
        const maxtepvalue = data.main.temp_max;
        
        const namevalue = data.name
        const ic = data["weather"][0]["icon"];
        const descvalue = data["weather"][0]["description"];
        const country = data.sys.country;

        document.querySelector(".cont").style.display = "block";
        document.querySelector('.loading').style.
        display = 'none'

        //  PAINT UI

        document.querySelector(".min-temp").innerHTML = `${mintepvalue} &#176C`;
        document.querySelector('.name').innerHTML = namevalue
        document.querySelector(".max-temp").innerHTML = `${maxtepvalue} &#176C`;
        document.querySelector(".date").innerHTML = date;
        document.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${ic}@4x.png"/>`;
        document.querySelector(".desc").innerHTML = descvalue;
        document.querySelector(".country").innerHTML = country;
      
      
        const item = document.getElementById("city");
        item.style.transition = "ease-in-out";
        item.style.transitionDuration = " 1.5s";
        item.style.transform = "scale(1.5)";
        item.style.opacity = -1;

      });
    }

}
