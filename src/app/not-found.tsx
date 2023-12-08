'use client'

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function NotFound() {
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    const pathName = usePathname()

    useEffect(()=> {
        if(pathName.includes("/deeplink/")) {
            const components = pathName.split("/")
            const destination = components[2]
            router.push("/" + destination)
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                {
                    isLoading ? <p>Loading...</p> : <p>Page not found</p>
                }
            </div>
        </main>
    )
}