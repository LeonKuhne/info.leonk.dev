document.addEventListener('DOMContentLoaded', ()=>{
  

  new Vue({
    el: '#app',
    data: {
      title: "",
      showLinks: false,
      showFade: false,
      showHeadshot: false,
      showHeadFade: false,
      showSkillIdx: 0,
      showProjects: false,
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
        
        // slide in skills
        const numSkills = 4
        const addSkill = () => {
          if (this.showSkillIdx >= numSkills) return
          this.showSkillIdx += 1
          setTimeout(addSkill, 400)
        }
        addSkill()

        // type out my name
        setTimeout(() => this.typeout(". "), 400)
        setTimeout(() => {
          this.typeout("I'm Leon Kühne")
          setTimeout(() => {
            this.showHeadshot = true
            this.showHeadFade = true
          }, 400)
          setTimeout(() => {
            this.showLinks = true
            this.showFade = true
          }, 600)
        }, 800)
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

