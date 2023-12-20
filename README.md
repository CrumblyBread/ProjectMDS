# Garbage Truck and Aquarium Livestream Website

This project is a simple website that utilizes Nginx for hosting livestreams featuring content about garbage trucks and aquariums. The livestreams are delivered using the HTTP Live Streaming (HLS) protocol, offering multiple quality options for viewers.

## Prerequisites
- Nginx installed on your server
- Livestream content (videos) related to garbage trucks and aquariums
- HLS-compatible video encoder (e.g., FFmpeg)

## Setup Instructions

1. **Install Nginx:**
   Ensure that Nginx is installed on your server. You can follow the official Nginx installation guide for your operating system: [Nginx Installation Guide](https://nginx.org/en/docs/install.html)

2. **Prepare Livestream Content:**
   Make sure you have video content related to garbage trucks and aquariums in a compatible format. Use an HLS-compatible video encoder to create the necessary HLS streams.

3. **Configure Nginx:**
   Modify the Nginx configuration file to include the necessary settings for HLS streaming. Below is a basic example:

   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location /hls {
           alias /path/to/your/hls/files;
           add_header Cache-Control no-cache;
           add_header 'Access-Control-Allow-Origin' '*' always;
           # Other HLS-specific settings can be added here
       }

       # Additional Nginx settings can be configured as needed
   }

Replace yourdomain.com with your actual domain and /path/to/your/hls/files with the path to your HLS files.

Start Nginx:
Restart or reload Nginx to apply the changes:

```console
sudo service nginx restart
```
Adjust the command based on your server's operating system.

# Access the Livestream Website:
Visit http://yourdomain.com/hls in a web browser to access the livestreams. Ensure that your HLS streams are properly generated and available in the specified path.

# Contributing
Contributions are welcome! If you have improvements or additional features you'd like to add, please submit a pull request.

# License
This project is licensed under the GNU Public License. Feel free to use, modify, and distribute the code as needed.

# Acknowledgments
Thanks to the Nginx team for providing a robust web server.
Special thanks to garbage truck and aquarium enthusiasts for the inspiring content!