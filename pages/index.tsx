import type { NextPage } from "next";
import { Header , VideosList } from "@/components/index";

const App: NextPage = (): JSX.Element => {
	return (
		<section>
			<Header />
			<VideosList />
		</section>
	);
};

export default App;
