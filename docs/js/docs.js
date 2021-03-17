(function (){
    var dropdowns = document.querySelectorAll('.dropdown__toggle');
    Array.prototype.forEach.call(dropdowns, function(dropdown) {
        dropdown.addEventListener('click', function (event) {
            event.target.parentNode.classList.toggle('is-open');
        });
    });
}());

(function() {
    var blend__text = document.querySelector(".blend__text");
    // var h1 = document.createElement('h1');
    // h1.appendChild(document.createTextNode("Ursa Major"));
    // blend__text.appendChild(h1);
    if (blend__text)
        blend__text.innerHTML = "<h1>Ursa Major</h1>";
})();

(function () {
    var tf_toggle = document.getElementsByClassName('tf__dropdown__toggle')[0];
    if (!tf_toggle) return ;
    var tf_dropdown = tf_toggle.parentElement;
    var tf_drawer = document.getElementsByClassName('tf__dropdown__drawer')[0];
    if (!tf_drawer) return ;
    var height = tf_drawer.scrollHeight;

    tf_toggle.addEventListener('click', function (e) {
        e.preventDefault();
        tf_dropdown.classList.toggle('is-open');
        if (tf_dropdown.classList.contains('is-open')) {
            tf_drawer.style.setProperty('height', height + 'px');
        } else {
            tf_drawer.style.setProperty('height', 0);
        }
    });

    var tf_glide_toggle = document.getElementsByClassName('tf__glide__dropdown__toggle')[0];
    var tf_glide_dropdown = tf_glide_toggle.parentElement;
    var tf_glide_drawer = document.getElementsByClassName('tf__glide__dropdown__drawer')[0];
    var height = tf_glide_drawer.scrollHeight;

    tf_glide_toggle.addEventListener('click', function (e) {
        e.preventDefault();
        tf_glide_dropdown.classList.toggle('is-open');
        if (tf_glide_dropdown.classList.contains('is-open')) {
            tf_glide_drawer.style.setProperty('height', height + 1 + 'px');
        } else {
            tf_glide_drawer.style.setProperty('height', 0);
        }
    });
}());

(function (){
    var button = document.getElementsByClassName('am__button');
    if (button.length === 0) return ;

    button[0].addEventListener('click', function(event) {
        event.preventDefault();
        button[0].classList.toggle('is-loading');
    });

    var input = document.getElementById('trip');
    var timeout = null;

    button[1].addEventListener('click', function(event) {
        event.preventDefault();
        clearTimeout(timeout);
        button[1].classList.add('is-loading');
        button.disabled = true;
        input.disabled = true;
    });

    input.addEventListener('keyup', function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            button[1].classList.add('shake');
        }, 1000);
    });

    button[1].addEventListener('animationend', function() {
        button[1].classList.remove('shake');
    });
}());

(function(){
    // 集换式卡牌特效
    function map(val, minA, maxA, minB, maxB) {
        return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
    }
      
    function Card3D(card, ev) {
        let img = card.querySelector('img');
        let imgRect = card.getBoundingClientRect();
        let width = imgRect.width;
        let height = imgRect.height;
        let mouseX = ev.offsetX;
        let mouseY = ev.offsetY;
        let rotateY = map(mouseX, 0, 180, -25, 25);
        let rotateX = map(mouseY, 0, 250, 25, -25);
        let brightness = map(mouseY, 0, 250, 1.5, 0.5);
        
        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        img.style.filter = `brightness(${brightness})`;
    }
    
    var cards = document.querySelectorAll('.card3d');
    
    cards.forEach((card) => {
        card.addEventListener('mousemove', (ev) => {
            Card3D(card, ev);
        });
    
        card.addEventListener('mouseleave', (ev) => {
            let img = card.querySelector('img');
        
            img.style.transform = 'rotateX(0deg) rotateY(0deg)';
            img.style.filter = 'brightness(1)';
        });
    });
}());