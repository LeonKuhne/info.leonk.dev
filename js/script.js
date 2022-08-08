document.addEventListener('DOMContentLoaded', ()=>{
  

  new Vue({
    el: '#app',
    data: {
      title: "",
      showLinks: false,
      showFade: false,
      showHeadshot: false,
      showHeadFade: false
    },
    created() {
      // get last visited timestamp
      one_hour = 60 * 60 * 1000
      lastVisited = localStorage.getItem("leon-recent")

      if (lastVisited && ((new Date) - Date.parse(lastVisited) < (one_hour * 2))) {
        localStorage.setItem("leon-recent", (new Date))
        this.title = ". I'm Leon Kühne"
        this.showLinks = true
        this.showHeadshot = true
      } else {
        // remember the user
        localStorage.setItem("leon-recent", (new Date))

        // type out my name
        setTimeout(() => this.typeout(". "), 900)
        setTimeout(() => {
          this.typeout("I'm Leon Kühne")
          setTimeout(() => {
            this.showHeadshot = true
            this.showHeadFade = true
          }, 800)
          setTimeout(() => {
            this.showLinks = true
            this.showFade = true
          }, 1200)
        }, 1900)
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
        }, 70)
      },
    }
  })
})

