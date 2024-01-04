import type { WebsiteType } from "@/lib/types/WebsiteType";

export const checkWebsiteStatus = async (website: WebsiteType): Promise<string> => {
    try {
      const response = await fetch(website.proxyUrl);
      return response.ok ? 'Online' : 'Offline';
    } catch (error) {
      return 'Error';
    }
};