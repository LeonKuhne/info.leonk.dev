document.addEventListener('DOMContentLoaded', ()=>{
  

  new Vue({
    el: '#app',
    data: {
      title: "",
      showLinks: false
    },
    created() {
      // get last visited timestamp
      one_hour = 60 * 60 * 1000
      lastVisited = localStorage.getItem("leon-recent")

      if (lastVisited && ((new Date) - Date.parse(lastVisited) < one_hour)) {
        localStorage.setItem("leon-recent", (new Date))
        this.title = "Hi. I'm Leon Kühne"
        this.showLinks = true
      } else {
        // remember the user
        localStorage.setItem("leon-recent", (new Date))

        // type out my name
        this.title = "Hi"
        setTimeout(() => this.typeout(". "), 1200)
        setTimeout(() => {
          this.typeout("I'm Leon Kühne")
          this.showLinks = true
        }, 2100)
      }
    },
    methods: {
      typeout(str) {
        // write char
        c = str.charAt(0)
        this.title += c
        
        // move to next char
        setTimeout(()=>{
          if (str.length > 0) {
            this.typeout(str.substring(1))
          }
        }, 90)
      },
    }
  })
})

