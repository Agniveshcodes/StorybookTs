import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../Buttons/Button";
import "../index.css";

const ButtonStory = {
  title: "My Button",
  component: Button,
  argTypes : {
    size : {
      options : ["small" , "medium" , "large"] ,
      control : {type : "radio"},
    },
  }
} as ComponentMeta<typeof Button>;

export default ButtonStory;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args}>Sign Up</Button> 
);

export const myPrimaryButton = Template.bind({});
export const mySecondaryButton = Template.bind({});

myPrimaryButton.args = {
  theme: "primary",
};
mySecondaryButton.args = {
  theme: "secondary",
};
