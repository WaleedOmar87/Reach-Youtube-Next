import type { NextPage } from "next";
import { Header, VideosList, Filter } from "@/components/index";
const App: NextPage = (): JSX.Element => {
	return (
		<section>
			<Header />
			<Filter />
			<VideosList />
		</section>
	);
};

export default App;
