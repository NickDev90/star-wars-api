import React from 'react';
import UiVideo from "./UiVideo";
import video from './video/video.mp4'

export default {
    title: "Ui-Kit/UiVideo",
    component: UiVideo
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <UiVideo {...args} />;

const props = {
    src: video,
    classes: '',
    playbackRate: 1.0,
}


export const Default = Template.bind({});
Default.args = {
   ...props
};
