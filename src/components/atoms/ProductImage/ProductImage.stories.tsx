import { useState } from "@storybook/addons";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect, useMemo } from "react";
import LanguageDecorator from "../../../testing/decorators/config/config";

import { ProductImage } from "./ProductImage";

export default {
  title: "atoms/ProductImage",
  component: ProductImage,
  decorators: [LanguageDecorator],
} as ComponentMeta<typeof ProductImage>;

export const Default: ComponentStory<typeof ProductImage> = (args) => {
  const images = useMemo(
    () => [
      "https://via.placeholder.com/150/0000FF",
      "https://via.placeholder.com/150/00FFFF",
      "https://via.placeholder.com/150/FFFFFF",
    ],
    []
  );
  const [image, setImage] = useState<number>(0);

  const currentImage = useMemo(
    () => images[image % images.length],
    [image, images]
  );

  useEffect(() => {
    setInterval(() => {
      setImage((imageIndex) => imageIndex + 1);
    }, 2000);
  }, []);

  return <ProductImage {...args} src={currentImage} />;
};
