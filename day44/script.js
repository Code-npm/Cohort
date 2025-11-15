var arr=[
{
    team:"CSK",
    primary:"rgb(153, 138, 2)",
    secondary:"Blue",
    Captain:"Mahendra Singh Dhoni",
    fullName:"Chennai Super Kings",
    Trophies:"5",
    image:"https://wallpapers.com/images/hd/csk-lion-poster-ujs9hsn4cpblw04v.jpg"
},
{
    team:"RCB",
    primary:"Red",
    secondary:"gold",
    Captain:"Virat Kholi",
    fullName:"Royal Challengers Bengaluru",
    Trophies:"1",
    logo:"https://i.pinimg.com/736x/55/89/43/55894399ecb53e65c21c76f26b269f8a.jpg",
    image:"https://i.pinimg.com/736x/b5/77/df/b577df286c10d347b43a42be9fbc0170.jpg"

},
{
    team:"KKR",
    primary:"Purple",
    secondary:"gold",
    Captain:"Shreyas Iyer",
    fullName:"Kolkata KNight Riders",
    Trophies:"3",
    logo:"https://theshillongtimes.com/wp-content/uploads/2022/08/KKR-LOGO.jpg",
    image:"https://pbs.twimg.com/media/Gr2GGrbXoAAgMn9.jpg"
},
{
    team:"DC",
    primary:"Blue",
    secondary:"Red",
    Captain:"Rishabh Pant",
    fullName:"Delhi Capitals",
    Trophies:"0",
    logo:"https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQBWHOQJNx1KWSoaz6xddvkwoyQIETWHsHg&s",
},
{
    team:"GT",
    primary:"rgb(153, 138, 2)",
    secondary:"royalblue",
    Captain:"Shubham Gill",
    fullName:"Gujrat Titans",
    Trophies:"5",
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGc2I3jTLVIuptfr9pR7bUucMJJssNuuT8rg&s",
    image:"https://images.moneycontrol.com/static-mcnews/2024/07/20240719083616_gujarat-titans.jpg?impolicy=website&width=770&height=431",

},
{
    team:"MI",
    primary:"Blue",
    secondary:"pink",
    Captain:"Rohit Sharma",
    fullName:"Mumbai Indians",
    Trophies:"5",
    logo:"https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
    image:"https://i.pinimg.com/736x/a5/b1/fc/a5b1fc39ed3426bd40dae51aea1c0887.jpg"
},
]
var main=document.querySelector('body')
var box=document.querySelector('#box')
var btn=document.querySelector('button')
var img=document.querySelector('#box2')


btn.addEventListener('click' , function(){
    var random=Math.floor(Math.random()*arr.length)
    box.style.backgroundColor=arr[random].primary
    main.style.backgroundColor=arr[random].secondary

    img.style.backgroundImage = `url('${arr[random].image}')`
    img.style.bac
    box.innerHTML=`${arr[random].team}  : ${arr[random].fullName} <br>  ${arr[random].Captain} <br> Trophies:${arr[random].Trophies}`
})