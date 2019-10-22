$(document).ready(function() {
  var clock = new Promise((resolve, reject) => {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    resolve(hours + ":" + minutes + ":" + seconds)
  }).then(time => {
    setInterval(() => {
      var repeat = $(".container").html(time)
      return repeat
    }, 1000)
  })
})
