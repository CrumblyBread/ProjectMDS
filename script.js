document.addEventListener('DOMContentLoaded', async function () {
    const videoSources = await fetchCameraInfo();
    createVideoPlayers(videoSources);
});

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
    const videoPlayersContainer = document.getElementById('videoPlayers');

    // Loop through each video player in the JSON data
    Object.keys(videoSources).forEach(cam => {
        const sources = videoSources[cam];
        console.log(cam)
        console.log();
        console.log(sources);

        //div to show in grid
        const columnDiv = document.createElement('div');
        columnDiv.className = 'col-md-6 col-xs-12 divider';

        // Setting video element
        const video = document.createElement('video');
        video.id = cam;

        video.className = 'video-js ' + cam + 'video';
        video.width = 400;
        video.controls = false;
        video.poster = sources.thumbnail;

        // Setting source element
        const source = document.createElement('source');
        source.src = sources.stream_url;
        video.appendChild(source);
        columnDiv.appendChild(video)
        videoPlayersContainer.appendChild(columnDiv);
        // Create player
        console.log(video.id);
        const player = videojs(video.id, {muted: true});

        const playerElement = player.el()

        // Add hover effect to start playing on hover
        playOnHover(playerElement, player, sources);

        // Append video to the main container
        
    });
}

const playOnHover = (videoElement, player, cameraInfo) => {
    videoElement.addEventListener('mouseover', () => {
        player.play().catch(error => {
            console.error('Play error:', error.message);
        });
    });

    videoElement.addEventListener('mouseout', () => {
        player.pause();
        videoElement.poster = cameraInfo.thumbnail;
    });

    videoElement.addEventListener('click', () => {
        openModal(player, cameraInfo);
    });
};


function openModal(player, sources) {


    // Get modal elements
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const qualityOptions = document.getElementById('qualityOptions');
    const modalTitle = document.getElementById('modalTitle');
    
    const modalPlayer = videojs('modalVideo')

    // Set video sources for the modal
    modalVideo.innerHTML = '';

    const auto = sources.stream_url
    console.log(auto);
    const low = auto.replace(".m3u8", "_low.m3u8");
    const mid = auto.replace(".m3u8", "_mid.m3u8");
    const high = auto.replace(".m3u8", "_high.m3u8");


    const urlLabel = document.getElementById("modalURL")
    urlLabel.innerHTML = 'Video source: ' + auto
    

    // Create a new Video.js player for the modal

    // Set modal title
    modalTitle.textContent = `Location: ${sources.location}, Country: ${sources.country}`;

    // Show modal
    $(videoModal).modal('show');

    // Initialize Video.js player after the modal is shown
    $(videoModal).on('shown.bs.modal',async function () {
        // Initialize Video.js player
        qualityOptions.innerHTML = '';
        //const modalPlayer = videojs('modalVideo');
        modalPlayer.width = 1000;
        modalPlayer.src({ src: auto }); // Set the default source
        await modalPlayer.play();
        const qualityAutoButton = createQualityButton('Auto', modalPlayer, auto, urlLabel);
        qualityOptions.appendChild(qualityAutoButton);

        const qualityLowButton = createQualityButton('Low', modalPlayer, low, urlLabel);
        qualityOptions.appendChild(qualityLowButton);

        const qualityMidButton = createQualityButton('Mid', modalPlayer, mid, urlLabel);
        qualityOptions.appendChild(qualityMidButton);

        const qualityHighButton = createQualityButton('High', modalPlayer, high, urlLabel);
        qualityOptions.appendChild(qualityHighButton);
    });
    $(videoModal).on('hidden.bs.modal',async function  () {
        //const modalPlayer = videojs('modalVideo');
        //await modalPlayer.pause();
        modalPlayer.dispose();
        const modalBody = document.getElementById('modalBody');
        const video = document.createElement('video')
        video.className = 'video-js vjs-default-skin';
        video.id = "modalVideo";
        video.width = "100%";
        video.controls = true;
        modalBody.insertBefore(video, modalBody.firstChild)
        //modalPlayer.currentTime(0); // Reset the player's current time
    });
}

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
    // Change video source when quality button is clicked
    urlLabel.innerHTML = 'Video source: ' + source
    player.pause();
    player.src({src: source });
    player.play();
}

