// Check: if the video already exists, we don't duplicate it
if (!document.getElementById('motion-pilot-video')) {
	const video = document.createElement('video');
	video.id = 'motion-pilot-video';
	video.autoplay = true;
	video.muted = true;
	video.playsInline = true;
	video.style.cssText = `
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 160px;
    height: 120px;
    z-index: 999999;
    border: 2px solid lime;
    border-radius: 8px;
  `;

	document.body.appendChild(video);

	navigator.mediaDevices.getUserMedia({ video: true })
		.then((stream) => {
			video.srcObject = stream;
			console.log('[MotionPilot] The camera is activated');
		})
		.catch((err) => {
			console.error('[MotionPilot] Error accessing camera:', err);
		});
} else {
	console.log('[MotionPilot] The video has already started');
}