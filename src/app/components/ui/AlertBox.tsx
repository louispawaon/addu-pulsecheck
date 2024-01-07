import { poppins } from '@/app/styles/fonts';
import React from 'react';
import { BiPulse, BiCheck, BiSolidErrorCircle } from "react-icons/bi";

interface AlertProps {
  status: 'Checking' | 'Online' | 'Offline';
}

const AlertBox: React.FC<AlertProps> = ({ status }) => {
  let message = '';
  let icon = null;
  let bgColor = '';

  switch (status) {
    case 'Checking':
      message = "Checking for pulse...";
      icon = <BiPulse size={32}/>;
      bgColor = 'bg-orange-400 text-orange-700';
      break;
    case 'Online':
      message = "All websites stable!";
      icon = <BiCheck size={32}/>
      bgColor = 'bg-green-400 text-green-700';
      break;
    case 'Offline':
      message = "There's something wrong with some websites.";
      icon = <BiSolidErrorCircle size={32}/>
      bgColor = 'bg-red-400 text-red-700';
      break;
    default:
      break;
  }

  return (
    <div className={`${bgColor} p-4 ${poppins.variable} font-bold text-2xl rounded-md`}>
       <div className="flex items-center">
        {icon}
        <span className="ml-2">{message}</span>
      </div>
    </div>
  );
};

export default AlertBox;