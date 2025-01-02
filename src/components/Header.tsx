import {Button} from "./ui/Button"

export default function Header() {
	return (
		<section className="py-20 px-4 text-center bg-primary text-primary-foreground">
			<h1 className="text-4xl font-bold mb-4">Document Verification API</h1>
			<p className="text-xl mb-8">Fast, Secure, and Reliable File Verification at Your Fingertips</p>
			<a href="#book-demo">
				<Button size="lg">Get Started</Button>
			</a>
		</section>
	)
}

