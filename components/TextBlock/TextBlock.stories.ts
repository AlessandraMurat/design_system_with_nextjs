import {Meta, StoryObj} from '@storybook/react'

import TextBlock, {TextBlockProps} from './TextBlock'

const meta: Meta<TextBlockProps> ={
    title: 'Moleculas/TextBlock',
    component: TextBlock,
    argTypes: {
        title: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        className: {
            type: 'string'
        }
    }
}

export default meta

export const TextBlockPrimary: StoryObj<TextBlockProps> = {
    args:{
        title: 'Title',
        description: 'lore ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',   
    }
}