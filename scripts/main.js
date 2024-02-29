function colorAboutCircle() {
    circles = document.querySelectorAll('#about .circle');
    colors = ['#ef476f', '#06d6a0', '#118ab2'];
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = colors[i%colors.length];
    }
}

function toggleAccordionIcon(e){
    btn = e.target;
    while (btn.classList.contains('card-header') === false){
        btn = btn.parentElement;
    }
    
    btn_child = btn.querySelector('i');

    if (btn_child.classList.contains('fa-plus')){
        btn_child.classList.remove('fa-plus');
        btn_child.classList.add('fa-minus');
    } else {
        btn_child.classList.remove('fa-minus');
        btn_child.classList.add('fa-plus');
    }
}

function faqBtns() {
    faqBtns = document.getElementsByClassName('card-header');
    for (let i = 0; i < faqBtns.length; i++) {
        faqBtns[i].addEventListener('click', toggleAccordionIcon);
    }
}

window.onload = function() {
    colorAboutCircle();
    faqBtns();
    document.addEventListener('click', function(e) {
        console.log(e.target.classList);
    });
}