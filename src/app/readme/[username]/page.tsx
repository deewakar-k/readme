import { Header } from "@/components/profile/header"

interface PageProps {
	params: Promise<{
		username: string
	}>
}

export default async function Page({ params }: PageProps) {
	return (
		<div className="flex flex-col items-center justify-center">
			<Header />
		</div>
	)
}
