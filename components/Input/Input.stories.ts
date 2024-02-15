import {Meta, StoryObj} from "@storybook/react"

import Input, {InputProps} from "./Input"

const meta:Meta<InputProps> = {
    title: "Moleculas/Input",
    component: Input,
    argTypes: {
        label: {
            type: "string"
        },
        multiline: {
            type: "boolean"
        },
        className: {
            type: "string"
        }
    }
}

export default meta

export const Primary:StoryObj<InputProps> = {
    args: {
        value: "input"
    }
    
}


export const PrimaryDisabled:StoryObj<InputProps> = {
    args: {
        value: "input",
        disabled: true
    }
    
}


export const PrimaryLabel:StoryObj<InputProps> = {
    args: {
        value: "input",
        label: "Label"
    }
    
}
export const PrimaryLabelDisabled:StoryObj<InputProps> = {
    args: {
        value: "input",
        label: "Label",
        disabled: true
    }
    
}

export const Multiline:StoryObj<InputProps> = {
    args: {
        value: "input",
        multiline: true
    }
    
}

export const MultiLineDisabled:StoryObj<InputProps> = {
    args: {
        value: "input",
        disabled: true,
        multiline: true
    }
    
}


export const MultilineLabel:StoryObj<InputProps> = {
    args: {
        value: "input",
        label: "Label",
        multiline: true
        
    }
    
}
export const MultilineLabelDisabled:StoryObj<InputProps> = {
    args: {
        value: "input",
        label: "Label",
        disabled: true,
        multiline: true
    }
    
}