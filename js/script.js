// navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});

// changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    }
}
changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    
  }

  function showSuccessMessage() {
    alert("Form submitted successfully! We will get in touch with you shortly.");
    // You can customize this alert or replace it with your own success message display logic.
  }
  




  //quiz 

    function startQuiz() {
        document.getElementById('quiz').style.display = 'block';
    }
    // function closeForm() {
    //     document.getElementById("quizs").style.display = "none";
    //   }
    function submitQuiz(event) {
        event.preventDefault(); 
        const form = event.target;
        const formData = new FormData(form);
        let score = 0;
    
        for (const entry of formData.entries()) {
            switch (entry[1]) {
                case 'often':
                    score += 3;
                    break;
                case 'sometimes':
                    score += 1;
                    break;
                case 'rarely':
                    score += 0;
                    break;
                case 'yes':
                    score += 2;
                    break;
                case 'no':
                    score += 0;
                    break;
                case 'positive':
                    score += 2;
                    break;
                case 'neutral':
                    score += 1;
                    break;
                case 'negative':
                    score += 0;
                    break;
            }
        }
    
        let analysis = '';
        if (score >= 6) {
            analysis = 'Your mental health is good.';
        } else if (score >= 4) {
            analysis = 'Your mental health needs some attention. Book an appointment soon.';
        } else {
            analysis = 'Your mental health may require immediate attention. Book an appointment asap.';
        }
    
        alert(analysis);
        form.reset();
        closeForm();
    }
    