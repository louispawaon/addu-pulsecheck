import React from 'react'

interface StatusBadgeProps {
    status: string;
  }

  const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const getStatusColor = () => {
      switch (status.toLowerCase()) {
        case 'online':
          return 'bg-green-500';
        case 'offline':
          return 'bg-red-500';
        default:
          return 'bg-gray-500';
      }
    };
  
    return (
      <span
        className={`inline-block px-2 py-1 text-white rounded-full ${getStatusColor()}`}
      >
        {status}
      </span>
    );
  };
  
  export default StatusBadge;