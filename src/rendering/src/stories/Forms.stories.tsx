import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Forms from '../components/Forms';

export default {
  title: 'Components/Forms',
  component: Forms,
} as ComponentMeta<typeof Forms>;

const Template: ComponentStory<typeof Forms> = (args) => <Forms {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Forms',
  },
  rendering: {
    componentName: 'Forms',
    dataSource: '/sitecore',
  },
};
