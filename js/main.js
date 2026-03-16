
const toggle=document.getElementById("darkToggle")
if(toggle){
toggle.addEventListener("click",()=>{
document.body.classList.toggle("dark")
})
}

fetch("https://api.github.com/users/svilambi")
.then(r=>r.json())
.then(d=>{
const s=document.getElementById("githubStats")
if(s){s.innerHTML=`Repos: ${d.public_repos} | Followers: ${d.followers}`}
})
