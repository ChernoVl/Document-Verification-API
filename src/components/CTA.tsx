import {Button} from "./ui/Button"
import {Calendar} from 'lucide-react'

export default function CTA() {
	return (
		<section id="book-demo" className="py-20 px-4 text-center">
			<h2 className="text-3xl font-bold mb-4">Ready to See It in Action?</h2>
			<p className="text-xl mb-8">Experience the power of our Document Verification API today!</p>
			<p className="text-lg mb-8">
				<Calendar className="inline-block mr-2"/>
				Book a Free Demo Now
			</p>
			<p className="mb-8">Click the button below to schedule your personalized demo and see how our solution can
				elevate your operations.</p>
			<a href="https://calendly.com/vladyslav-dev" target="_blank">
				<Button size="lg">Book Demo</Button>
			</a>
		</section>
	)
}

