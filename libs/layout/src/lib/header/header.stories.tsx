import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from './header';
import { withRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';

export default {
  component: Header,
  title: 'Header',
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

Template.story = {
  parameters: {
    nextRouter: {
      path: '/blog',
      asPath: '/blog',
    },
  },
};

export const Primary = Template.bind({});
Primary.args = {};
