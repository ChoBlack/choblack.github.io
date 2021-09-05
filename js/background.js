const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// bgImage.alt="background images";
bgImage.classList.add("bgImg")
 
// 제일 앞에
document.body.prepend(bgImage);
// 뒤에
// document.body.appendChild(bgImage);