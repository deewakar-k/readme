interface PageProps {
	params: Promise<{
		username: string
	}>
}

export default async function Page({ params }: PageProps) {
	const { username } = await params
	return (
		<h1>hi {username}</h1>
	)
}
