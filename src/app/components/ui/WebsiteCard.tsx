import React from 'react'
import { WebsiteType } from '@/lib/types/WebsiteType'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface WebsiteCardProps {
    websites: WebsiteType
}

function WebsiteCard({}: WebsiteType) {
  return (
    <Card>
    <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
        <p>Card Content</p>
    </CardContent>
    <CardFooter>
        <p>Card Footer</p>
    </CardFooter>
    </Card>
  )
}

export default WebsiteCard