// Initializing Firebase
var config = {
    apiKey: "AIzaSyAKAq7a_Y1t6yRC8OsbRHaX_42KtqqTkyA",
    authDomain: "bilgent-e608e.firebaseapp.com",
    databaseURL: "https://bilgent-e608e.firebaseio.com",
    projectId: "bilgent-e608e",
    storageBucket: "bilgent-e608e.appspot.com",
    messagingSenderId: "893071128516"
};
firebase.initializeApp(config);

// Reference Comers collection
var comersRef = firebase.database().ref('Comers');

document.getElementById("registrationForm").addEventListener('submit',
    submitForm);

// getting data from the database.
comersRef.on('value', gotData, errData);
emailList = [];

function gotData(data) {
    var participants = data.val();
    var keys = Object.keys(participants);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        emailList.push(participants[k].email);
    }
}

function errData(err) {
    console.log(err);
}


// submitting form
function submitForm(e) {
    e.preventDefault();

    var name = e.target.name.value;
    var surname = e.target.surname.value;
    var university = e.target.university.value;
    var email = e.target.email.value;
    var poster = "false";
    if (e.target.poster.checked == true) {
        poster = "true";
    }

    if (emailList.includes(email)) {
        document.querySelector(".mailError").style.display = "block";
    }
    else {
        // saving data
        pushData(name, surname, university, email, poster);

        window.location.href = "registered.html";   
    }
}

// save message to firebas
function pushData(name, surname, university, email, poster) {
    var newCommersRef = comersRef.push();
    newCommersRef.set({
        name: name,
        surname: surname,
        university: university,
        email: email,
        poster: poster
    });
}

