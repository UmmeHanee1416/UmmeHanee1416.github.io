document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#name').addEventListener("click", function(){
        this.style.backgroundColor = "black";
        this.style.color = "white";
    });
    document.querySelector('#email').addEventListener("click", function(){
        this.style.backgroundColor = "black";
        this.style.color = "white";
    });
    document.querySelector('#message').addEventListener("click", function(){
        this.style.backgroundColor = "black";
        this.style.color = "white";
    });
    document.querySelector('form').addEventListener('submit', function(event) {
        // alert('hello, ' + document.querySelector('#name').value);
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#message').value = '';
        document.querySelector('#confirm').innerHTML = 'Message sent!';
        event.preventDefault();
    });
});
