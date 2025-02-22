'use client'

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";


export default function DeepLinkRedirector() {
    const router = useRouter()
    const pathName = usePathname()

    useEffect(()=> {
        setTimeout(()=>{
            router.push("/about")
        },2000)

    }, [router])
    // console.log(pathName)

    return (
        <h1> redirected in 2 sec</h1>
    )
}