let count = 0;
var refreshIntervalId = setInterval(() => {
    count++
    console.log(count)
}, 10000);

/* later */
// clearInterval(refreshIntervalId);
