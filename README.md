# Traffic and Aquarium Livestream Website

This project is a simple website that utilizes NGINX for hosting livestreams featuring content about intersection and aquariums. The livestreams are delivered using the HTTP Live Streaming (HLS) protocol, offering multiple quality options for viewers.

## Prerequisites
- Nginx 
- Livestream content 
- HLS-compatible video encoder (FFmpeg)

## Setup Instructions
Only tested for Windows, sorry Linux users.

1. Clone this repository or simply download the zip file
   
3. Switch to the folder
 ```shell
> cd "C:\yourfolder"
```
3. You will need to allow NGINX create folders or simply just create folder `temp\client_body_temp` and `logs\` in `yourfolder\nginxServerMDS\`
 
5. To run Nginx just simply
```shell
C:\yourfolder\nginxServerMDS> .\NGINX.exe
```

5. You need to run streams-all to start streaming
```shell
C:\yourfolde\nginxServerMDSr> .\streams-all
```

6. This will pop up multiple command lines so don't be scared

   
## Website
The server runs on localhost, so just type `127.0.0.1` into your browser and you should start seeing the streams. You can check your streams in `127.0.0.1/stats` and `127.0.0.1/hls`.

## Contributing
Contributions are not welcome! If you have improvements or additional features you'd like to add, please don't submit a pull request. No one will work on this project anymore.

## License
This project is licensed under the GNU Public License. Feel free to use, modify, and distribute the code as needed.

## Acknowledgments
Thanks to the NGINX team for providing a robust web server.

Special thanks to the brilliant minds behind American infrastructure design for their unparalleled creativity in making every intersection look like a unique work of art. I never knew I could experience such excitement at every crossroads.

## Authors
- Branislav Kadlec
- Matus Matas
- Julie Tydlackova
