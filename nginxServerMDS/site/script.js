//start on load
document.addEventListener('DOMContentLoaded', async function () {
    const videoSources = await fetchCameraInfo();
    createVideoPlayers(videoSources);
});
// get data from json file
async function fetchCameraInfo() {
    try {
        const response = await fetch('cams.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON:', error);
        return {};
    }
}

function createVideoPlayers(videoSources) {
    var videoPlayersContainer = document.getElementById('videoPlayersGarbF');
    
    for (let id = 0; id < Object.keys(videoSources).length; id++) {

        switch (id) {
            case 0:
                videoPlayersContainer = document.getElementById('videoPlayersGarbF');
                break;
            case 1:
                videoPlayersContainer = document.getElementById('videoPlayersGarbB');
                break;
            case 2:
                videoPlayersContainer = document.getElementById('videoPlayersAquaL');
                break;
            case 3:
                videoPlayersContainer = document.getElementById('videoPlayersAquaR');
                break;
        }

        console.log(Object.keys(videoSources)[id])

        addCam(videoSources[Object.keys(videoSources)[id]],videoPlayersContainer,Object.keys(videoSources)[id]);
    }

    videoPlayersContainer = document.getElementById('videoPlayersAqua');
    
}

function addCam(source,videoPlayersContainer,id){

    //div to show in grid
    const columnDiv = document.createElement('div');
    columnDiv.className = 'col-sm-12 divider';

    // setting video element
    const video = document.createElement('video');
    video.id = id;
    video.className = 'video-js ' + id + ' video';
    video.width = 400;
    video.controls = false;
    video.poster = source.thumbnail;

    // setting source element
    const sourceDiv = document.createElement('source');
    sourceDiv.src = source.stream_url;
    // add all to the page
    video.appendChild(sourceDiv);
    columnDiv.appendChild(video)
    videoPlayersContainer.appendChild(columnDiv);
    // create player
    console.log(video)
    const player = videojs(video.id, {muted: true});
    const playerElement = player.el()

    // add hover effect to start playing on hover
    playOnHover(playerElement, player, source);
        
}

// add effects to the videos
const playOnHover = (videoElement, player, cameraInfo) => {
    //play on hover
    videoElement.addEventListener('mouseover', () => {
        player.play().catch(error => {
            console.error('Play error:', error.message);
        });
    });
    // stop playing when no hover
    videoElement.addEventListener('mouseout', () => {
        player.pause();
        videoElement.poster = cameraInfo.thumbnail;
    });
    // open modal when clicked
    videoElement.addEventListener('click', () => {
        console.log(cameraInfo)
        openModal(player, cameraInfo);
    });
};


function openModal(player, sources) {


    // get modal elements
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const qualityOptions = document.getElementById('qualityOptions');
    const modalTitle = document.getElementById('modalTitle');
    
    const modalPlayer = videojs('modalVideo')

    // set video sources for the modal
    modalVideo.innerHTML = '';

    // create sub streams for quality buttons
    const auto = sources.stream_url
    const low = auto.replace(".m3u8", "_low.m3u8");
    const mid = auto.replace(".m3u8", "_mid.m3u8");
    const high = auto.replace(".m3u8", "_high.m3u8");

    // lable with url
    const urlLabel = document.getElementById("modalURL")
    urlLabel.innerHTML = 'Video source: ' + auto
    const bestQualityLabel = document.getElementById("modalBestQuality")
    bestQualityLabel.innerHTML = "Best quality source: " + high

    // set modal title
    modalTitle.textContent = `Location: ${sources.location}, Country: ${sources.country}`;

    // show modal
    $(videoModal).modal('show');

    // initialize Video.js player after the modal is shown
    $(videoModal).on('shown.bs.modal',async function () {
        qualityOptions.innerHTML = '';
        modalPlayer.width = 1000;
        modalPlayer.src({ src: auto, muted: false });
        await modalPlayer.play();

        // creation of change quality buttons
        const qualityAutoButton = createQualityButton('Auto', modalPlayer, auto, urlLabel);
        qualityOptions.appendChild(qualityAutoButton);

        const qualityLowButton = createQualityButton('Low', modalPlayer, low, urlLabel);
        qualityOptions.appendChild(qualityLowButton);

        const qualityMidButton = createQualityButton('Mid', modalPlayer, mid, urlLabel);
        qualityOptions.appendChild(qualityMidButton);

        const qualityHighButton = createQualityButton('High', modalPlayer, high, urlLabel);
        qualityOptions.appendChild(qualityHighButton);
    });
    // delete player and create new one for fetching data on hide modal
    $(videoModal).on('hidden.bs.modal',async function  () {
        modalPlayer.dispose();
        const modalBody = document.getElementById('modalBody');
        const video = document.createElement('video')
        video.className = 'video-js vjs-default-skin';
        video.id = "modalVideo";
        video.width = "100%";
        video.controls = true;
        modalBody.insertBefore(video, modalBody.firstChild)
    });
}

// create buttons and adding functions to it
function createQualityButton(text, player, source, urlLabel) {
    const qualityButton = document.createElement('button');
    qualityButton.className = 'btn btn-outline-primary';
    qualityButton.textContent = text;
    qualityButton.addEventListener('click', () => {
        changeQuality(player, source, urlLabel);
    });
    return qualityButton;
}


function changeQuality(player, source, urlLabel) {
    urlLabel.innerHTML = 'Video source: ' + source
    player.pause();
    player.src({src: source });
    player.play();
}
