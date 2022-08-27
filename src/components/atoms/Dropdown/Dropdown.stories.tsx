import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import Button from '../Button/Button';
import TypoGraphy from '../Typography/Typography';

export default {
  title: 'Core/DropDown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const [position, closeDropdown] = useState(true);
  return (
    <div className="flex">
      <div className="relative">
        <Button
          variant="outlined"
          type="button"
          onClick={() => closeDropdown(true)}
        >
          Click to open dropdown
        </Button>
        <Dropdown
          {...args}
          open={position}
          onClose={() => {
            closeDropdown(false);
          }}
        />
      </div>
    </div>
  );
};

const DropdownContent = (
  <div className="pb-2 pr-16">
    <TypoGraphy variant="body2">Dropdown content can be anything</TypoGraphy>
    <div className="mt-5">
      <TypoGraphy variant="body2">Dropdown content can be anything</TypoGraphy>
    </div>
  </div>
);

export const Standard = Template.bind({});
Standard.args = {
  children: DropdownContent,
  hasCloseIcon: false,
};
