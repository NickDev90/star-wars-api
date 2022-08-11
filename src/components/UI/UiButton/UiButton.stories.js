import React from 'react';
import UiButton from "./UiButton";

export default {
    title: "Ui-Kit/UiButton",
    component: UiButton
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <UiButton {...args} />;

const props = {
    onClick: ()=> console.log(),
    disabled: false, 
    text: 'Click me', 
    theme: 'dark', 
    classes: ''
}

//👇 Each story then reuses that template
export const Light = Template.bind({});
Light.args = {
   ...props,
   theme: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
   ...props,
   theme: 'dark',
};

export const Disabled = Template.bind({});
Disabled.args = {
   ...props,
   disabled: true,
};