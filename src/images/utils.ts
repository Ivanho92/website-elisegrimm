import type {ImageMetadata} from "astro";
import {getImage} from "astro:assets";

export const getOptimizedImage = async (bgImage: any) => {
    const optimizedBackgroundImage = await getImage({
        src: bgImage(),
        format: "jpeg",
    });
    return optimizedBackgroundImage;
};

export const getHighResImage = async (bgImageName: string) => {
    const images = import.meta.glob<{default: ImageMetadata}>(
        `/src/images/*.{jpeg,jpg,png,gif}`,
    );
    const bgImage = images[`/src/images/${bgImageName}`];
    const highResImage = await getOptimizedImage(bgImage);
    return highResImage;
};

export const getLowResImage = async (bgImageName: string) => {
    const images = import.meta.glob<{default: ImageMetadata}>(
        `/src/images/lowres/*.{jpeg,jpg,png,gif}`,
    );
    const bgImage = images[`/src/images/lowres/${bgImageName}`];
    const lowResImage = await getOptimizedImage(bgImage);
    return lowResImage;
};
