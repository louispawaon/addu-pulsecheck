import React from 'react'
import { FaGithub, FaBug, FaQuestionCircle, FaPlus } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link';

const FooterIcons = () => {
  return (
    <div className="flex flex-row space-x-4">
        {/* GitHub */}
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
                <Link href='https://github.com/louispawaon/addu-pulsecheck'>
                    <FaGithub className="text-white text-2xl" />
                </Link>
            </TooltipTrigger>
            <TooltipContent>
            <p>GitHub Repository</p>
            </TooltipContent>
        </Tooltip>
        </TooltipProvider>

        {/* Bug */}
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
                <FaBug className="text-white text-2xl" />
            </TooltipTrigger>
            <TooltipContent>
            <p>Report a Bug</p>
            </TooltipContent>
        </Tooltip>
        </TooltipProvider>

        {/* FAQ */}
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
                <FaQuestionCircle className="text-white text-2xl" />
            </TooltipTrigger>
            <TooltipContent>
            <p>Frequently Asked Questions</p>
            </TooltipContent>
        </Tooltip>
        </TooltipProvider>

        {/* Website Request */}
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
                <FaPlus className="text-white text-2xl" />
            </TooltipTrigger>
            <TooltipContent>
            <p>Request a Website</p>
            </TooltipContent>
        </Tooltip>
        </TooltipProvider>
  
    </div>
  )

}

export default FooterIcons