import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
	test("Home page", () => {
		render(<Home />);

		const header = screen.getByRole("heading", { name: /home page/i });
		expect(header).toBeInTheDocument();
	});
});
