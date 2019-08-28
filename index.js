let bookings = document.getElementById("test-button")
bookings.onclick= () => {
       let name= window.prompt("What is your first and last name?", "James Johnson")
       let date= window.prompt("What day/date would you like to book?", "Friday March 13th")
       let number= window.prompt("What is your telephone number?", "XXX-XXX-XXXX")
       let message= `Thank you for booking with RKM ${name}! We will reach back to you within 24 hours at the ${number} number that you provided for confirmation of your booking on ${date}!`
        window.alert(message)

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("inspiration").onclick=()=>{
  axios.get("http://quotes.stormconsultancy.co.uk/random.json").then((quotes)=>{
  document.getElementById("qArea").innerHTML= "~" + quotes.data.quote
  document.getElementById("inspiration").style.backgroundColor= getRandomColor();
})
}

 /*window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll)

  let picbox= document.getElementsByClassName("pic-box")[0]
    let inView= false

  if(isScrolledIntoView(picbox)  && !inView){
      picbox.className= "pic-box1 pic-box2 pic-box3 pic-box4 inView"
  }else{
      picbox.className = "pic-box1 pic-box2 pic-box3 pic-box4"
      inView = false
  }
});

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
*/