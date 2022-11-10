import type { AppProps } from "next/app";
import { AppProvider } from "@/store/index";
import "@/styles/css/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<Component {...pageProps} />
		</AppProvider>
	);
}

export default MyApp;
