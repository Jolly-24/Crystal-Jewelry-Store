let nav =document.querySelector(".navbar");
window.onscroll=function(){
if(window.scrollY>=200){
nav.classList.add("back");
}else{
    nav.classList.remove("back");
 
}
};

var filterCards = document.querySelectorAll(".filter");
var allBtn = document.getElementById("all");
var silverBtn = document.getElementById("silver");
var goldBtn = document.getElementById("gold");

// Select buttons and card elements
let allButton = document.getElementById('all');
let silverButton = document.getElementById('silver');
let goldButton = document.getElementById('gold');
let cards = document.querySelectorAll('.filter');

// Add event listener to All button to display all cards
allButton.addEventListener('click', () => {
    cards.forEach(card => {
        card.style.display = 'block'; // Show all cards
    });
});

// Add event listener to Silver button to filter cards with 'Silver' in h5
silverButton.addEventListener('click', () => {
    cards.forEach(card => {
        let cardTitle = card.querySelector('h5').innerText.toLowerCase();
        if (cardTitle.includes('silver')) {
            card.style.display = 'block'; // Show cards containing 'Silver'
        } else {
            card.style.display = 'none'; // Hide others
        }
    });
});

// Add event listener to Gold button to filter cards with 'Gold' in h5
goldButton.addEventListener('click', () => {
    cards.forEach(card => {
        let cardTitle = card.querySelector('h5').innerText.toLowerCase();
        if (cardTitle.includes('gold')) {
            card.style.display = 'block'; // Show cards containing 'Gold'
        } else {
            card.style.display = 'none'; // Hide others
        }
    });
});

        // send review alert message
        const buttons = document.querySelectorAll(".send-alert"),
      toast = document.querySelector(".toast"),
      closeIcon = document.querySelector(".close"),
      prog = document.querySelector(".prog");

let timer1, timer2;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        toast.style.display = "block";
        toast.classList.add("alert");
        prog.classList.add("alert");

        timer1 = setTimeout(() => {
            toast.classList.remove("alert");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
            prog.classList.remove("alert");
            toast.style.display = "none";
        }, 5300);
    });
});

closeIcon.addEventListener("click", () => {
    toast.classList.remove("alert");
    toast.style.display = "none";

    setTimeout(() => {
        prog.classList.remove("alert");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
});