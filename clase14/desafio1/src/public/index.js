const template = Handlebars.compile(`<ul>
<li> {{first_name}} </li>
<li> {{last_name}} </li>
<li> {{age}} </li>
<li> {{email}} </li>
<li> {{phone}} </li>
</ul>`)

const html = template({
    first_name:"titu",
    last_name:"guz",
    age:25,
    email:"titiguz@gmail.com",
    phone:"3875048686"
})

document.getElementById("data").innerHTML = html;