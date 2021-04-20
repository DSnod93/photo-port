import React from "react";
import { render, cleanup } from "@testing-library/react"; // render the component in a simulated DOM in a Node js environment. cleanup removes components from the DOM to prevent memory leaks
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup); // ensure that we won't' have any leftover memory after each test

// declare component we're testing
describe("About component", () => {
    // First Test verifies that the component is rendered
    it("renders", () => {
        render(<About />);
    });

    // Second Test
    it("matches snapshot DOM node structure", () => {
        // render About
        const { asFragment } = render(<About />); // asFragment returns a snapshot of the About component
        expect(asFragment()).toMatchSnapshot();
    });
});