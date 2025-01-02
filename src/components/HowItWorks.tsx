import {Card, CardContent, CardHeader, CardTitle} from "./ui/Card"

const steps = [
	{
		title: "Upload the Document",
		description: "Users can upload their files via our API or user-friendly interface."
	},
	{
		title: "AI Analysis in Seconds",
		description: "Our system scans for tampering, edits, and other anomalies in real-time."
	},
	{
		title: "Receive Detailed Results",
		description: "Get instant, actionable feedback on document authenticity."
	}
]

export default function HowItWorks() {
	return (
		<section className="py-20 px-4 bg-muted">
			<h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
			<div className="flex flex-col md:flex-row justify-center items-center gap-6">
				{steps.map((step, index) => (
					<Card key={index} className="w-full md:w-1/3">
						<CardHeader>
							<CardTitle className="flex items-center">
                <span
					className="mr-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  {index + 1}
                </span>
								{step.title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>{step.description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}

