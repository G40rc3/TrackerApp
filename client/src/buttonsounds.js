import './style.css'



const sounds = {
    alert: new Audio("./assets/audio/location/group-notified.mp3"),
    location: new Audio("TrackerApp/client/src/assets/audio/location-shared.mp3"),
    emergency: new Audio("TrackerApp/client/src/assets/audio/police-notified.mp3"),
    safePlaces: new Audio("TrackerApp/client/src/assets/audio/safe-locations.mp3")
};

document.getElementById("location-share-button").addEventListener("click", () => {
    sounds.location.play();
});

document.getElementById("alert-button").addEventListener("click", () => {
    sounds.alert.play();
});

document.getElementById("contact-emergency-button").addEventListener("click", () => {
    sounds.emergency.play();
});

document.getElementById("safe-places").addEventListener("click", () => {
    sounds.safePlaces.play();
});