'use client'

import React, { FC, useState, useEffect } from 'react'
import WebsiteCard from '@/app/components/ui/WebsiteCard';
import { WebsiteData } from '@/data/WebsiteData';
import { checkWebsiteStatus } from '@/services/WebsiteStatusChecker';

const WebsiteCardSection: FC = () => {

    const [statuses, setStatuses] = useState<string[]>(Array(WebsiteData.length).fill('Checking...'));

  useEffect(() => {
    const checkAllWebsites = async () => {
      const newStatuses = await Promise.all(WebsiteData.map(checkWebsiteStatus));
      setStatuses(newStatuses);
    };

    checkAllWebsites();
  }, []);

    return (
        <section className="website-section">
          <h2>Ateneo de Davao University Websites</h2>
          <div className="card-container">
            {WebsiteData.map((website, index) => (
              <WebsiteCard key={index} {...website} status={statuses[index]}/>
            ))}
          </div>
        </section>
      );
}

export default WebsiteCardSection