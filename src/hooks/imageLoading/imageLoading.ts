import { useEffect, useState } from "react";

const imageLoadingDelay = (animationDuration: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, animationDuration);
  });
};

const loadImage = (image: string) => {
  return new Promise((resolve) => {
    var img = new Image();
    img.src = image;
    img.onload = () => resolve(true);
  });
};

const imageLoader = (image: string, animationDuration: number) => {
  let isCanceled = false;

  const promise = new Promise((resolve, reject) => {
    Promise.all([imageLoadingDelay(animationDuration), loadImage(image)]).then(
      () => {
        if (isCanceled === true) {
          return reject();
        }

        return resolve(true);
      }
    );
  });

  const cancel = () => {
    isCanceled = true;
  };

  return {
    loader: promise,
    cancel: cancel,
  };
};

export const useImageLoading = (
  image: string | null,
  animationDuration: number
) => {
  const [loadedImage, setLoadedImage] = useState<string | null>(null);
  const [loadingImage, setLoadingImage] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [loader, setLoader] = useState<ReturnType<typeof imageLoader>>();

  useEffect(() => {
    if (image && image !== loadingImage) {
      setImageLoading(true);
      setLoadingImage(image);

      if (loader) {
        loader.cancel();
      }

      const _loader = imageLoader(image, animationDuration);

      _loader.loader
        .then(() => {
          setImageLoading(false);
          setLoadedImage(image);
        })
        .catch(() => {});

      setLoader(_loader);
    }
  }, [animationDuration, image, loadedImage, loader, loadingImage]);

  return {
    image: loadedImage,
    isLoading: imageLoading,
  };
};
export default useImageLoading;
