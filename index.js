let data=document.getElementById('data')


let arrayone=[
    {name:"kisan"},
    {name:"kisan"},
    {name:"kisan"},
    {name:"kisan"},
    {name:"kisan"},
    {name:"kisan"},
    {name:"kisan"},
    {name:"kisan"},



]

arrayone.map((val,i)=>{
    data.innerHTML+=`
    <div>
    <img src="https://preview.colorlib.com/theme/konato/assets/img/gallery/team3.jpg"/>

    <h1>${val.name}</h1>

    </div>
    `
})