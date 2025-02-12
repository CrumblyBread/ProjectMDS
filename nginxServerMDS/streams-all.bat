set video1="http://193.213.211.188:80/mjpg/video.mjpg"
set video2="http://142.154.137.29/mjpg/video.mjpg"
set video3="http://216.54.27.7/mjpg/video.mjpg"
set video4="http://97.90.105.122/mjpg/video.mjpg"

set target1="rtmp://localhost/hls/stream1_"
set target2="rtmp://localhost/hls/stream2_"
set target3="rtmp://localhost/hls/stream3_"
set target4="rtmp://localhost/hls/stream4_"

start ffmpeg -stream_loop -1 -i %video1% -i "hudba1.mp3" -threads 4 ^
-c:v libx264 -c:a aac -b:a 64k -vf "drawtext=fontfile=arial.ttf:text='360p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:360" -preset fast -f flv %target1%360

start ffmpeg -stream_loop -1 -i %video1% -i "hudba1.mp3" -threads 4 ^
-c:v libx264 -c:a aac -b:a 128k -vf "drawtext=fontfile=arial.ttf:text='480p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:480" -preset fast -f flv %target1%480

start ffmpeg -stream_loop -1 -i %video1% -i "hudba1.mp3" -threads 4 ^
-c:v libx264 -c:a aac -b:a 192k -vf "drawtext=fontfile=arial.ttf:text='720p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:720" -preset fast -f flv %target1%720

start ffmpeg -stream_loop -1 -i %video2% -i "hudba1.mp3" -threads 4 ^
-c:v libx264 -c:a aac -b:a 64k -vf "drawtext=fontfile=arial.ttf:text='360p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:360" -preset fast -f flv %target2%360

start ffmpeg -stream_loop -1 -i %video2% -i "hudba1.mp3" -threads 4 ^
-c:v libx264 -c:a aac -b:a 128k -vf "drawtext=fontfile=arial.ttf:text='480p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:480" -preset fast -f flv %target2%480

start ffmpeg -stream_loop -1 -i %video2% -i "hudba1.mp3" -threads 4 ^
-c:v libx264 -c:a aac -b:a 192k -vf "drawtext=fontfile=arial.ttf:text='720p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:720" -preset fast -f flv %target2%720

start ffmpeg -stream_loop -1 -i %video3% -i "hudba1.mp3" -threads 4 ^
-c:v libx264 -c:a aac -b:a 64k -vf "drawtext=fontfile=arial.ttf:text='360p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:360" -preset fast -f flv %target3%360

start ffmpeg -stream_loop -1 -i %video3% -i "hudba1.mp3" -threads 4 ^
-c:v libx264 -c:a aac -b:a 128k -vf "drawtext=fontfile=arial.ttf:text='480p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:480" -preset fast -f flv %target3%480

start ffmpeg -stream_loop -1 -i %video3% -i "hudba1.mp3" -threads 4 ^
-c:v libx264 -c:a aac -b:a 192k -vf "drawtext=fontfile=arial.ttf:text='720p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:720" -preset fast -f flv %target3%720

start ffmpeg -stream_loop -1 -i %video4% -i "hudba1.mp3" -threads 4 ^
-c:v libx264 -c:a aac -b:a 64k -vf "drawtext=fontfile=arial.ttf:text='360p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:360" -preset fast -f flv %target4%360

start ffmpeg -stream_loop -1 -i %video4% -i "hudba1.mp3" -threads 4 ^
-c:v libx264 -c:a aac -b:a 64k -vf "drawtext=fontfile=arial.ttf:text='360p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:480" -preset fast -f flv %target4%480

start ffmpeg -stream_loop -1 -i %video4% -i "hudba1.mp3" -threads 4 ^
-c:v libx264 -c:a aac -b:a 64k -vf "drawtext=fontfile=arial.ttf:text='360p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:720" -preset fast -f flv %target4%720

