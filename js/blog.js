
fetch("data/posts.json")
.then(r=>r.json())
.then(posts=>{
const blog=document.getElementById("blog")
posts.forEach(p=>{
blog.innerHTML+=`
<article>
<h2>${p.title}</h2>
<p>${p.date}</p>
<p>${p.content}</p>
</article>
`
})
})
