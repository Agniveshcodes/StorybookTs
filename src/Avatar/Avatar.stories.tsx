import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.css";
import AvatarGroup from "./Avatar";
import { avatarUrls } from "../App";

const ButtonStory = {
  title: "My Avatar",
  component: AvatarGroup,
  // argTypes : {
  //   size : {
  //     options : ["small" , "medium" , "large"] ,
  //     control : {type : "radio"},
  //   },
  // }
} as ComponentMeta<typeof AvatarGroup>;

export default ButtonStory;

const Template: ComponentStory<typeof AvatarGroup> = (args: any) => (
  <AvatarGroup {...args} avatars={avatarUrls}></AvatarGroup>
);

export const myCollapsedAvatar = Template.bind({});
export const myExpandedAvatar = Template.bind({});

myCollapsedAvatar.args = {
  maxVisible: 3,
  collapsed: true,
};
myExpandedAvatar.args = {
  maxVisible: 3,
  collapsed: false,
};
