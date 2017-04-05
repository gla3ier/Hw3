function batotop() {
    window.scrollTo(0, 0);
}

function starstar(x) {
    x.style.backgroundColor = "rgb(197, 221, 173)";
}

function taltal(x) {
    x.style.backgroundColor = "";
}

function sizes() {
    document.getElementById('parag1').className = "small";
    document.getElementById('parag2').className = "small";
    document.getElementById('parag3').className = "small";
    document.getElementById('parag4').className = "small";
    document.getElementById('tailreading').className = "small";
    document.getElementById('table1').className = "small";
}

function sizem() {
    document.getElementById('parag1').className = "medium";
    document.getElementById('parag2').className = "medium";
    document.getElementById('parag3').className = "medium";
    document.getElementById('parag4').className = "medium";
    document.getElementById('tailreading').className = "medium";
    document.getElementById('table1').className = "medium";
}

function sizel() {
    document.getElementById('parag1').className = "large";
    document.getElementById('parag2').className = "large";
    document.getElementById('parag3').className = "large";
    document.getElementById('parag4').className = "large";
    document.getElementById('tailreading').className = "large";
    document.getElementById('table1').className = "large";
}

var storageRef = firebase.storage().ref();
var main1Ref = storageRef.child('public/main1.jpg');
main1Ref.getDownloadURL().then(function(url) {
    var img = document.getElementById("article_image");
    img.src = url;
});

var ad1Ref = storageRef.child('public/ad1.jpg');
ad1Ref.getDownloadURL().then(function(url) {
    var img = document.getElementById("ad1");
    img.src = url;
});

var ad2Ref = storageRef.child('public/ad2.jpg');
ad2Ref.getDownloadURL().then(function(url) {
    var img = document.getElementById("ad2");
    img.src = url;
});
