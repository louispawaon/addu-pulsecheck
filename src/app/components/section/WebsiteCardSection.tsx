'use client'

import React, { FC, useState, useEffect } from 'react'
import WebsiteCard from '@/app/components/ui/WebsiteCard';
import { WebsiteData } from '@/data/WebsiteData';
import { useWebsiteStatusChecker } from '@/services/WebsiteStatusChecker';

const WebsiteCardSection: FC = () => {

  const statuses = useWebsiteStatusChecker(WebsiteData);
      
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