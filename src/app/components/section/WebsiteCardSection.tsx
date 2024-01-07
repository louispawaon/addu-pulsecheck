'use client'

import React, { FC, useState, useEffect } from 'react'
import WebsiteCard from '@/app/components/ui/WebsiteCard';
import { WebsiteData } from '@/data/WebsiteData';
import { useWebsiteStatusChecker } from '@/services/WebsiteStatusChecker';
import { getStatusMessage } from '@/services/GetStatusMessage';
import AlertBox from '@/app/components/ui/AlertBox';

const WebsiteCardSection: FC = () => {

  const statuses = useWebsiteStatusChecker(WebsiteData);
  const alertStatus = getStatusMessage(statuses);
      
    return (
        <section>
          <div className="flex flex-col gap-4 p-4">
            <AlertBox status={alertStatus}/>
            {WebsiteData.map((website, index) => (
              <WebsiteCard key={index} {...website} status={statuses[index]}/>
            ))}
          </div>
        </section>
      );
}

export default WebsiteCardSection