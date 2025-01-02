import {Card, CardContent, CardHeader, CardTitle} from "./ui/Card"
import {Globe, LineChart, Lock, ShieldCheck, Upload} from 'lucide-react'

const features = [
	{
		title: "Upload Any Document Type",
		description: "Compatible with PDFs, images, and other document formats for maximum flexibility.",
		icon: Upload
	},
	{
		title: "Fraud Detection You Can Trust",
		description: "Our advanced AI analyzes documents for tampering, inconsistencies, and other fraudulent activities.",
		icon: ShieldCheck
	},
	{
		title: "Multilingual and Cross-Industry",
		description: "Verify documents in any language and adapt to a wide range of industries like finance, insurance, healthcare, and more.",
		icon: Globe
	},
	{
		title: "Actionable Insights",
		description: "Receive clear, actionable results for faster and smarter decision-making.",
		icon: LineChart
	},
	{
		title: "Secure and Customizable",
		description: "Built with enterprise-grade security and customizable settings to fit your business needs.",
		icon: Lock
	}
]

export default function Features() {
	return (
		<section className="py-20 px-4">
			<h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Document Verification API?</h2>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{features.map((feature, index) => (
					<Card key={index}>
						<CardHeader>
							<CardTitle className="flex items-center">
								<feature.icon className="mr-2 h-6 w-6"/>
								{feature.title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>{feature.description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}

