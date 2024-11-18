let changeDateTime = () => {
    console.log("in loop")
    let date = new Date();

    //get current date and day
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    document.getElementsByClassName("current-date")[0].innerHTML = date.toLocaleDateString() + " " + days[date.getDay()];
    document.getElementsByClassName("current-time")[0].innerHTML = date.toLocaleTimeString();
}
setInterval(changeDateTime,1000);