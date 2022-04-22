
const get_day_of_time = (d1, d2) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.ceil((ms2 - ms1) / (24*60*60*1000));
};


$( document ).ready(function() {


    let startLove = new Date(2022,03,17);
    let today = new Date();
    let time = get_day_of_time(startLove,today)
    $("#daylove").text(`${time} days`)
    let timeLine = $("#timeline")
    setInterval(()=>{
        let now = new Date()
        timeLine.text(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`)
    },1000)
  });



//
