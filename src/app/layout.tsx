import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";
import "@/server/schedulers/bootstrap";

export const metadata: Metadata = {
	title: "Autonome",
	description: "Autonomous AI Trading Platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`antialiased`}
			>
				<Providers>
					<div className="grid grid-rows-[auto_1fr] h-svh">
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
