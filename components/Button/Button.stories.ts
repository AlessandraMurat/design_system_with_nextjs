import { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonProps } from "./Button"

const meta: Meta<ButtonProps> = {
    title: 'Moleculas/Botão',
    component: Button,
    argTypes: {
        children: {
            type: "string"
        },
        disabled: {
            type: "boolean"
        },
        className: {
            type: "string"
        }
    }
}

export default meta

export const Primary:StoryObj<ButtonProps> = {
    args: {
        children: "Primary Button",
    }
}

export const Violet:StoryObj<ButtonProps> = {
    args: {
        children: "Violet Button",
        className: "theme-violet"
    }
}