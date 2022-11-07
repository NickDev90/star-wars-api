import { useState } from "react";
import UiInput from "./UiInput";


export default {
    title: 'Ui-Kit/UiInput',
    component: UiInput
}

const Template = arg => {
    const [value, setValue] = useState('');

    const handleInputChange  = val => {
        setValue(val)
    }
    
    return (
        <UiInput 
            {...arg}
            value={value}
            handleInputChange={handleInputChange}
        />
    )
}

const props = {
    value: '',
    handlerInputChange: console.log('input changed'),
    placeholder: 'Placeholder',
    classes: '',
}

export const Default = Template.bind({});
Default.args = {
    ...props
}