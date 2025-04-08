"use client"

import { useSession } from "@/lib/auth-client"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export const Header = () => {

	const { data: session } = useSession()

	return (
		<div className="flex items-center gap-6">
			<div>
				<Avatar className="w-[92px] h-[92px]">
					<AvatarImage src={session?.user.image || ""} alt={session?.user.name} width={"92"} height={"92"} />
					<AvatarFallback>U</AvatarFallback>
				</Avatar>
			</div>
			<div>
				<h1 className="text-xl">deewakar</h1>
				<p className="text-muted-foreground text-sm">full stack engineer</p>
			</div>
		</div>
	)
}
