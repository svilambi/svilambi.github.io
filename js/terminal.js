
const input=document.getElementById("command")
const output=document.getElementById("output")

input.addEventListener("keydown",function(e){
if(e.key==="Enter"){
run(input.value)
input.value=""
}
})

function run(cmd){
if(cmd==="help"){print("commands: about, projects, github")}
else if(cmd==="about"){print("DevOps engineer with cloud automation expertise")}
else if(cmd==="github"){window.location="https://github.com/svilambi"}
else{print("command not found")}
}

function print(t){output.innerHTML+="<div>"+t+"</div>"}
