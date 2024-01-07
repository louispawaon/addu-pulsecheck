import { nunito_sans } from '@/app/styles/fonts';
import React from 'react'

interface StatusBadgeProps {
    status: string;
  }

  const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const getStatusColor = () => {
      switch (status.toLowerCase()) {
        case 'online':
            return 'bg-green-500 text-green-800';
        case 'offline':
            return 'bg-red-500 text-red-800';
        case 'error':
            return 'bg-red-500 text-red-800';
        default:
            return 'bg-orange-500 text-orange-800';
      }
    };
  
    return (
      <span
        className={`ml-1 mt-1 w-fit text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${getStatusColor()} ${nunito_sans.variable} font-semibold`}
      >
        {status}
      </span>
    );
  };
  
  export default StatusBadge;