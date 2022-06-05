const skillContent = document.getElementsByClassName('skill_content')
const skillHead = document.querySelectorAll('.skill_header')

console.log(typeof(skillHead))

function toggleSkill() {
    let item = this.parentNode.className

    for (let i = 0; i < skillContent.length; i++) {
        skillContent[i].className = 'skill_content skill_close'
    }

    if (item === 'skill_content skill_close') {
        this.parentNode.className = "skill_content skill_open"
    }
}

skillHead.forEach((element) =>{
    element.addEventListener('click',toggleSkill)
})