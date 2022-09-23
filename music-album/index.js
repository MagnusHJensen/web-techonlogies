function removeTrack(track) {
  console.log("Removing track");
  if (document.getElementById("tracks").children.length == 1) {
    return;
  }

  track.remove();

  document.getElementById("tracks").childNodes.forEach((track, index) => {
    if (track.id != "track-" + (index + 1)) {
      track.id = "track-" + (index + 1);
      track.childNodes[0].name = "track-" + (index + 1);
    }
  });
}

function addTrack() {
  if (document.getElementById("tracks").children.length == 20) {
    return;
  }
  // Initialize elements
  let tracksContainer = document.getElementById("tracks");
  let track = document.createElement("div");
  let deleteTrack = document.createElement("button");
  let trackInput = document.createElement("input");

  // Setup elements
  deleteTrack.innerText = "Delete";
  deleteTrack.type = "button";
  deleteTrack.addEventListener("click", removeTrack);
  track.id = "track-" + getNextTrackId();
  trackInput.name = "track-" + getNextTrackId();

  // Manipulate DOM
  track.appendChild(trackInput);
  track.appendChild(deleteTrack);
  tracksContainer.appendChild(track);
}

function getNextTrackId() {
  return document.getElementById("tracks").children.length + 1;
}

// Add the initial track
addTrack();

document.getElementById("music-form").onsubmit = function (event) {
  let albumName = document.getElementById("album-name");
  if (albumName.value == "") {
    event.preventDefault();
    alert("Please enter an album name.");
  }

  console.log("Heyo");
};
