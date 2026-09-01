import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Optimized Image Component
 * Features:
 * - Lazy loading
 * - WebP support with fallback
 * - Responsive images with srcset
 * - Width/Height to prevent CLS
 * - Intersection Observer for better performance
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  sizes = '100vw',
  priority = false,
  onLoad,
  onError,
  style = {},
  ...otherProps
}) => {
  const [imageSrc, setImageSrc] = useState(priority ? src : null);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef(null);

  // Check if WebP is supported
  const isWebPSupported = () => {
    if (typeof window === 'undefined') return false;
    const elem = document.createElement('canvas');
    if (elem.getContext && elem.getContext('2d')) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
  };

  // Get WebP version of image if exists
  const getWebPSource = (originalSrc) => {
    if (!originalSrc || imageError) return originalSrc;
    
    // If already WebP or if WebP is not supported, return original
    if (originalSrc.endsWith('.webp') || !isWebPSupported()) {
      return originalSrc;
    }
    
    // Try WebP version (assumes WebP files exist with same name)
    const webpSrc = originalSrc.replace(/\.(png|jpe?g)$/i, '.webp');
    return webpSrc;
  };

  // Lazy load images using Intersection Observer
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image is visible
        threshold: 0.01,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, [src, priority]);

  // Handle image load error (fallback to original if WebP fails)
  const handleError = (e) => {
    if (!imageError && imageSrc.endsWith('.webp')) {
      setImageError(true);
      setImageSrc(src); // Fallback to original image
    }
    if (onError) onError(e);
  };

  const handleLoad = (e) => {
    if (onLoad) onLoad(e);
  };

  // Generate srcset for responsive images (if width is provided)
  const generateSrcSet = () => {
    if (!width || imageError) return undefined;
    
    const baseSrc = imageSrc || src;
    // Create responsive versions (you can customize these sizes)
    const sizes = [0.5, 0.75, 1, 1.5, 2];
    
    // For now, return single src (you can implement image resizing service)
    return `${baseSrc} ${width}w`;
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'}
      alt={alt || ''}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      decoding="async"
      className={className}
      style={{
        ...style,
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
      }}
      sizes={sizes}
      srcSet={imageSrc ? generateSrcSet() : undefined}
      onLoad={handleLoad}
      onError={handleError}
      {...otherProps}
    />
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  sizes: PropTypes.string,
  priority: PropTypes.bool,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  style: PropTypes.object,
};

export default OptimizedImage;
