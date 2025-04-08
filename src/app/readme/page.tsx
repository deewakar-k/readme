"use client"

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
	const { data: session } = useSession()
	const router = useRouter()

	useEffect(() => {
		if (session) {
			const username = session.user.email.split('@')[0]
			router.push(`/readme/${username}`)
		} else {
			router.push('/')
		}
	}, [session])
}
