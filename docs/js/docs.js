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
    if (!button) return ;

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