import React from 'react'
import type { WebsiteType } from '@/lib/types/WebsiteType'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import StatusBadge from '@/app/components/ui/StatusBadge'
import Link from 'next/link'
import { nunito_sans, poppins } from '@/app/styles/fonts'

type WebsiteCardProps = WebsiteType & {
    status: string;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({websiteName, websiteDescription, websiteUrl, websiteThumbnail, status}) => {

    return (
        <Card className={`${poppins.variable} bg-primary text-foreground shadow-lg`}>
        <CardHeader className='p-3'>
            <CardTitle  className='font-medium md:text-3xl sm:text-xl'>{websiteName}</CardTitle>
            <CardDescription className={`${nunito_sans.variable} sm:justify-start text-primary-foreground`}>{websiteDescription}</CardDescription>
            <Link href={websiteUrl} className='hover:underline sm:text-xs md:text-lg italic'>{websiteUrl}</Link>
        </CardHeader>
        <CardFooter className='p-2'>
            <StatusBadge status={status}/>
        </CardFooter>
        </Card>
      )
  };
export default WebsiteCard

