//Html file is used for pop up plugins

let captainamericaimgs = [
    "https://images.indianexpress.com/2021/11/chris-evans-captain-america-1200.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78W17rFiDXV2WCVSfPF1lrdxByCD-Zk439w&usqp=CAU",
    "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfyzkpQ4N6856aoEt13BD7wVhYqCCuJ-Waw&usqp=CAU",
    "https://i.ndtvimg.com/i/2017-07/captain-america_640x480_51499156667.jpg",
    "https://www.thewrap.com/wp-content/uploads/2016/11/Chris-Evans-Captain-America-Trilogy-618x400.jpg",
    "https://imgix.bustle.com/uploads/image/2021/4/9/441537de-6325-461a-b118-58fc5e6a3254-endgame-captain-america.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZrRuFhpxDBfrrywJsNpXhjGBg1PYs7X4FKOvjXv8mjgzbs3-bWonMNuqcanWbMW7WZyY&usqp=CAU",
    "https://cdn.onebauer.media/one/media/6000/7f3e/5c8a/016b/e68e/cee4/captain-america-civil-war-2.jpg?format=jpg&quality=80&width=440&ratio=16-9&resize=aspectfill",
    "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/08/Avengers-Age-of-Ultron-ending.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
    "https://2.bp.blogspot.com/-PUxEEI4uAEE/VzJQpC6QQbI/AAAAAAAAB8M/2qQT3WtcOVU22Mt41o9BXGa2HF3dBQs0gCLcB/w1200-h630-p-k-no-nu/Captain%2BAmerica%2Bbiceps.jpg"
];

const img = document.getElementsByTagName("img")

for (let i=0; i<img.length; i++){
    const randomImg = Math.floor(Math.random() * captainamericaimgs.length)
    img[i].src = captainamericaimgs[randomImg];
}

const headers = document.getElementsByTagName("h3")

for (let i=0; i<headers.length; i++){
    headers[i].innerHTML = "Captain America"
}