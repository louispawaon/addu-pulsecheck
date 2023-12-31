import type { StaticImageData } from "next/image";

export type WebsiteType = {
    websiteName: string;
    websiteDescription: string;
    websiteUrl: string;
    websiteThumbnail?: StaticImageData;
}