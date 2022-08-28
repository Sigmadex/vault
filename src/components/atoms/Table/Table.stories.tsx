import { ComponentMeta, Story } from '@storybook/react';
import Table from './Table';
import { HeaderType, ITableProps, RowType } from './Table.types';

export default {
  title: 'Core/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const header: HeaderType[] = [
  {
    key: 'token',
    display: 'Token',
  },
  {
    key: 'active_duration',
    display: 'Active Duration',
  },
  {
    key: 'maturity',
    display: 'Maturity',
  },
  {
    key: 'units_staked',
    display: 'Units Staked',
  },
  {
    key: 'nfty_apy',
    display: 'NFT APY',
  },
];
const rows: RowType[] = [
  {
    token: 'SDEX',
    active_duration: '720 days',
    maturity: '82 days remaining',
    units_staked: '45,000 SDEX',
    nfty_apy: '112%',
  },
  {
    token: 'SDEX',
    active_duration: '365 days',
    maturity: 'Matured',
    units_staked: '10,000 SDEX',
    nfty_apy: '42%',
  },
  {
    token: 'SDEX LP',
    active_duration: '365 days',
    maturity: '4 days remaining',
    units_staked: '55 JLP',
    nfty_apy: '200%',
  },
  {
    token: 'SDEX LP',
    active_duration: '365 days',
    maturity: '4 days remaining',
    units_staked: '55 JLP',
    nfty_apy: '200%',
  },
  {
    token: 'SDEX LP',
    active_duration: '365 days',
    maturity: '4 days remaining',
    units_staked: '55 JLP',
    nfty_apy: '200%',
  },
  {
    token: 'SDEX LP',
    active_duration: '365 days',
    maturity: '4 days remaining',
    units_staked: '55 JLP',
    nfty_apy: '200%',
  },
  {
    token: 'SDEX LP',
    active_duration: '365 days',
    maturity: '4 days remaining',
    units_staked: '55 JLP',
    nfty_apy: '200%',
  },
  {
    token: 'SDEX LP',
    active_duration: '365 days',
    maturity: '4 days remaining',
    units_staked: '55 JLP',
    nfty_apy: '200%',
  },
  {
    token: 'SDEX LP',
    active_duration: '365 days',
    maturity: '4 days remaining',
    units_staked: '55 JLP',
    nfty_apy: '200%',
  },
  {
    token: 'SDEX LP',
    active_duration: '365 days',
    maturity: '4 days remaining',
    units_staked: '55 JLP',
    nfty_apy: '200%',
  },
  {
    token: 'SDEX LP',
    active_duration: '365 days',
    maturity: '4 days remaining',
    units_staked: '55 JLP',
    nfty_apy: '200%',
  },
  {
    token: 'SDEX LP',
    active_duration: '365 days',
    maturity: '4 days remaining',
    units_staked: '55 JLP',
    nfty_apy: '200%',
  },
  {
    token: 'SDEX LP',
    active_duration: '365 days',
    maturity: '4 days remaining',
    units_staked: '55 JLP',
    nfty_apy: '200%',
  },
  {
    token: 'SDEX LP',
    active_duration: '365 days',
    maturity: '4 days remaining',
    units_staked: '55 JLP',
    nfty_apy: '200%',
  },
  {
    token: 'SDEX LP',
    active_duration: '365 days',
    maturity: '4 days remaining',
    units_staked: '55 JLP',
    nfty_apy: '200%',
  },
];

const Template: Story<ITableProps> = (args) => <Table {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  header,
  rows,
  selected: {
    firstTitle: 'Actions:',
    caption: '0.0014% per SDEX',
    secondTitle: 'Daily APY Rate:',
    buttons: [{ variant: 'outlined', children: 'Mint APY NFT' }],
  },
};
