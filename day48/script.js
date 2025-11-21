arr = [
    {
        Name: "Yukti Sharma",
        Work: "Robotics Engineer",
        img: "https://images.unsplash.com/photo-1762893021980-b6accb9b94d9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Description: "A robotics engineer passionate about building intelligent systems"
    },

    {
        Name: "Aarav Mehta",
        Work: "Full-Stack Developer",
        img: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=400&auto=format&fit=crop",
        Description: "Passionate about building scalable web apps and learning cloud technologies."
    },

    {
        Name: "Meera Kapoor",
        Work: "UI/UX Designer",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
        Description: "Loves creating clean, minimal user interfaces with strong usability."
    },

    {
        Name: "Karan Verma",
        Work: "Embedded Systems ",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop",
        Description: "Interested in microcontrollers, IoT boards, and real-time hardware systems."
    },

    
]
var sum=''

arr.forEach(function(elem){
  sum=sum + `<div class="card">
            <div><img src="${elem.img}" alt=""><i class="ri-send-plane-fill"></i></div>
            <h2>${elem.Name}</h2>
            <h3>${elem.Work}</h3>
            <p>${elem.Description}</p>
            <button>Get IN TOUCH</button>
        </div>`
})

var main=document.querySelector('main')
main.innerHTML=sum