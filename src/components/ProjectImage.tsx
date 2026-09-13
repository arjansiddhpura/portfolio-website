import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
};

export function ProjectImage({
  src,
  alt,
  className = "placeholder",
  fallback = "Image",
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={className}>{fallback}</div>;
  }

  return (
    <div className={className}>
      <img src={src} alt={alt} onError={() => setFailed(true)} />
    </div>
  );
}
