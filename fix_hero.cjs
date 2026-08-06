const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'views', 'services', 'ServiceTemplate.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const startIndex = content.indexOf('function HeroBackground');
const endIndex = content.indexOf('const serviceRoutes = {');

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `function HeroBackground({ bgImage }) {
  const videoRef = useRef(null);
  const isVideo = bgImage && typeof bgImage === 'string' && (bgImage.endsWith('.mp4') || bgImage.endsWith('.webm') || bgImage.endsWith('.mov'));

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      video.muted = true;
      video.volume = 0;
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => { });
      }
    };

    playVideo();

    const handleUserInteraction = () => {
      if (video.paused) {
        playVideo();
      }
    };

    window.addEventListener('click', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('scroll', handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
    };
  }, [bgImage, isVideo]);

  if (!bgImage) {
    return (
      <img
        src={defaultFallback}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
    );
  }

  if (isVideo) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-slate-950">
        <img
          src={defaultFallback}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <video
          ref={videoRef}
          key={bgImage}
          src={bgImage}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgImage} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <img
      src={bgImage}
      alt="Hero Background"
      className="w-full h-full object-cover"
    />
  );
}

`;

  content = content.slice(0, startIndex) + replacement + content.slice(endIndex);
  fs.writeFileSync(filePath, content);
  console.log('Fixed HeroBackground successfully!');
} else {
  console.log('Failed to find boundaries.');
}
