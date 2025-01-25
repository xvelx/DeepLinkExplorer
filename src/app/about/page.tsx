'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

export default function About() {
    const [isAndroid, setIsAndroid] = useState(false)
    useEffect(() => {
        const userAgent = window.navigator.userAgent
        console.log(userAgent);
        setIsAndroid(userAgent.toLowerCase().includes("android"))
    }, [])

    const appLinkBanner = isAndroid ? (
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
               Use our app for better experience &nbsp; <Link href="/deeplink/about" >open</Link>
            </p>
        </div>
    ) : <></>

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {appLinkBanner}
            <div>
                <p>This is sample app to explore app link scalable solution.</p>
            </div>
        </main>
    )
}

