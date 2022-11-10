import { FC } from "react";
import { Logo, SearchBar } from "@/components/index";
import { HeaderStyle, ContainerStyle } from "@/styles/index";

/* Header Main Component */
const Header: FC = (): JSX.Element => {
	return (
		<HeaderStyle>
			<ContainerStyle>
				<div className="container">
					<header className="page-header">
						<div className="container-row">
							<Logo />
							<SearchBar />
						</div>
					</header>
				</div>
			</ContainerStyle>
		</HeaderStyle>
	);
};
export default Header;
