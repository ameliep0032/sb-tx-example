import type { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "../components/LinkButton/LinkButton";
import React from "react";
import { ChevronRight } from "../SVG/ChevronRight";
import { GreenSparkSVGLogo } from "../SVG/GreenSparkSVGLogo";

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof LinkButton>;
/**
 The LinkButton component is a styled anchor tag in React, resembling a button. 
 It combines the familiar behavior of an HTML anchor (<a>) tag with custom styles for
 a button-like appearance. By using this component, developers can create interactive links
 while ensuring accessibility and consistent user experience. 🚀
 */

export const Basic: Story = {
  args: {
    text: "Read more",
  },
};

export const WithIcon: Story = {
  args: {
    text: "Read much more",
    icon: <ChevronRight />,
  },
  render: function Render(args) {
    return (
      <div style={{ width: "200px", gap: "1rem" }}>
        <p> Lorem ipsum...</p>
        <LinkButton {...args} />
      </div>
    );
  },
};

export const WithComplexIcon: Story = {
  args: {
    text: "Explore",
    icon: <GreenSparkSVGLogo />,
  },
  render: function Render(args) {
    return <LinkButton {...args} />;
  },
};
