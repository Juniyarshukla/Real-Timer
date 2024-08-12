setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hr_dots = document.querySelector('.hr_dots');
    let min_dots = document.querySelector('.min_dots');
    let sec_dots = document.querySelector('.sec_dots');

    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let am = h >= 12 ? "PM" : "AM";

    // Convert 24-hour time to 12-hour time
    if (h > 12) {
        h -= 12;
    } else if (h === 0) {
        h = 12;
    }

    // Add zero before single digit numbers
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h + "<br><span> Hours </span>";
    minutes.innerHTML = m + "<br><span> Minutes </span>";
    seconds.innerHTML = s + "<br><span> Seconds </span>";
    ampm.innerHTML = am;

    // Calculate stroke dash offset for the clock hands
    let circumference = 2 * Math.PI * 70; // 2 * π * radius

    hh.style.strokeDashoffset = circumference - (circumference * (h % 12)) / 12;
    mm.style.strokeDashoffset = circumference - (circumference * m) / 60;
    ss.style.strokeDashoffset = circumference - (circumference * s) / 60;

    // Rotate dots
    hr_dots.style.transform = `rotate(${h * 30}deg)`;
    min_dots.style.transform = `rotate(${m * 6}deg)`;
    sec_dots.style.transform = `rotate(${s * 6}deg)`;
}, 1000);
