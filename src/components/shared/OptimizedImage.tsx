import { cn } from "@/lib/utils";

type OptimizedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "async" | "auto" | "sync";
  onError?: React.ReactEventHandler<HTMLImageElement>;
};

function toAvif(src: string): string | undefined {
  if (!/\.webp$/i.test(src)) return undefined;
  return src.replace(/\.webp$/i, ".avif");
}

/**
 * Serves AVIF when supported, WebP otherwise. Always set intrinsic
 * width/height to reduce CLS.
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  loading = "lazy",
  fetchPriority,
  decoding = "async",
  onError,
}: OptimizedImageProps) {
  const avif = toAvif(src);

  return (
    <picture className="contents">
      {avif ? <source srcSet={avif} type="image/avif" /> : null}
      {/\.webp$/i.test(src) ? (
        <source srcSet={src} type="image/webp" />
      ) : null}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(className)}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        onError={onError}
      />
    </picture>
  );
}
