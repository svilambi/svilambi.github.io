
const username="svilambi"
fetch(`https://api.github.com/users/svilambi`)
.then(r=>r.json())
.then(d=>{
document.getElementById("metrics").innerHTML=
`<h3>Repositories: ${d.public_repos}</h3>
<h3>Followers: ${d.followers}</h3>
<h3>Following: ${d.following}</h3>`
})
