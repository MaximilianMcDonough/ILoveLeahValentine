import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface PhotoItem {
  src: string;
  caption: string;
}

const pictureModules = import.meta.glob(
  "../Pictures/*.{png,jpg,jpeg,webp,gif,svg,avif,heic,heif,PNG,JPG,JPEG,WEBP,GIF,SVG,AVIF,HEIC,HEIF}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

const photos: PhotoItem[] = Object.entries(pictureModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, src], index) => {
    const filename = path.split("/").pop() ?? `Memory ${index + 1}`;
    const caption = filename.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim() || `Memory ${index + 1}`;

    return { src, caption };
  });

const fallbackPhotos: PhotoItem[] = [
  { src: "/placeholder.svg", caption: "Add photos to the pictures folder" },
];

const hasPhotos = photos.length > 0;
const galleryPhotos = hasPhotos ? photos : fallbackPhotos;
const ROTATE_INTERVAL_MS = 4500;

const PhotoGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalPhotos = galleryPhotos.length;
  const activePhoto = galleryPhotos[activeIndex] ?? galleryPhotos[0];

  useEffect(() => {
    if (totalPhotos < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalPhotos);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [totalPhotos]);

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <Heart className="w-8 h-8 text-primary fill-primary mx-auto mb-4 animate-pulse-soft" />
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-romantic-gradient mb-4">
            My Memories
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Here are some of the pictures that I like to look back at when I miss you.
          </p>
        </div>

        {/* Rotating photo display */}
        <div className="relative overflow-hidden rounded-3xl bg-card/70 shadow-[var(--shadow-card)]">
          <div className="aspect-[4/3] md:aspect-[16/9]">
            <img
              key={activePhoto.src}
              src={activePhoto.src}
              alt={activePhoto.caption}
              className="h-full w-full object-cover animate-fade-in"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-rose-dark/80 via-rose-dark/30 to-transparent p-6">
            <div className="text-primary-foreground">
              <Heart className="w-5 h-5 fill-current mb-2" />
              <p className="font-display text-lg">{activePhoto.caption}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {galleryPhotos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative aspect-square overflow-hidden rounded-xl border transition ${
                index === activeIndex ? "border-primary ring-2 ring-primary/40" : "border-border/50"
              }`}
              aria-label={`Show photo ${index + 1}`}
            >
              <img
                src={photo.src}
                alt=""
                className={`h-full w-full object-cover transition duration-300 ${
                  index === activeIndex ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                }`}
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {!hasPhotos && (
          <p className="text-center text-muted-foreground mt-8 text-sm italic">
            Add images to src/Pictures and rebuild to update the slideshow.
          </p>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
