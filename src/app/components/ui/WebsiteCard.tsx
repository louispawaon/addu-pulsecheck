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

type WebsiteCardProps = WebsiteType & {
    status: string;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({websiteName, websiteDescription, websiteUrl, websiteThumbnail, status}) => {

    return (
        <Card>
        <CardHeader>
            <CardTitle>{websiteName}</CardTitle>
            <CardDescription>{websiteDescription}</CardDescription>
        </CardHeader>
        <CardContent>
            <p>{websiteUrl}</p>
        </CardContent>
        <CardFooter>
            <p>Status: {status}</p>
        </CardFooter>
        </Card>
      )
  };
export default WebsiteCard

