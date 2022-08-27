import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import Button from '../Button/Button';
import TypoGraphy from '../Typography/Typography';

export default {
  title: 'Core/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [position, closeModal] = useState(true);

  return (
    <div>
      <Button variant="outlined" type="button" onClick={() => closeModal(true)}>
        Click to open modal
      </Button>

      <Modal {...args} open={position} onClose={() => closeModal(false)} />
    </div>
  );
};

const ModalContent = (
  <div className="pb-16">
    <TypoGraphy variant="h6">Modal content can be anything</TypoGraphy>
    <TypoGraphy centered variant="body2">
      Click outside of this box to close
    </TypoGraphy>
  </div>
);

export const Standard = Template.bind({});
Standard.args = {
  children: ModalContent,
  hasCloseIcon: false,
};
