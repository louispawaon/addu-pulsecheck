// services/WebsiteStatusChecker.ts

import { useState, useEffect } from 'react';
import { WebsiteType } from '@/lib/types/WebsiteType';

export const useWebsiteStatusChecker = (websites: WebsiteType[], interval: number = 10 * 60 * 1000) => {
  const [statuses, setStatuses] = useState<string[]>(Array(websites.length).fill('Checking...'));

  useEffect(() => {
    const checkAllWebsites = async () => {
      const newStatuses = await Promise.all(websites.map(checkWebsiteStatus));
      setStatuses(newStatuses);

      console.log('Websites rechecked:', new Date());
    };

    // Initial check
    checkAllWebsites();

    // Schedule checks every X minutes
    const intervalId = setInterval(checkAllWebsites, interval);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [websites, interval]);

  return statuses;
};

const checkWebsiteStatus = async (website: WebsiteType): Promise<string> => {
  try {
    const response = await fetch(website.proxyUrl);
    return response.ok ? 'Online' : 'Offline';
  } catch (error) {
    return 'Error';
  }
};
