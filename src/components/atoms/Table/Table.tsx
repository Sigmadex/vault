import { useState } from 'react';
import Button from '../Button/Button';
import TypoGraphy from '../Typography/Typography';
import { ITableProps } from './Table.types';

const Table = ({
  header,
  rows,
  selected: { buttons, caption, firstTitle, secondTitle },
}: ITableProps) => {
  const [activeRow, setActiveRow] = useState(-1);
  return (
    <table className="w-full text-left">
      <thead className="border-b-2">
        <tr>
          {header.map((item) => (
            <th key={item.key} className="pb-4">
              <TypoGraphy variant="body2">{item.display}</TypoGraphy>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr
            onClick={() => setActiveRow(activeRow === idx ? -1 : idx)}
            key={idx}
            className="cursor-pointer relative"
          >
            {header.map((data) => (
              <td className="py-4" key={data.key}>
                <TypoGraphy variant="body2">{row[data.key]}</TypoGraphy>
              </td>
            ))}
            {activeRow === idx && (
              <div className="absolute flex z-10 items-center w-[calc(100%-100px)] right-0 bg-[#F2F6FA] rounded-[10px] py-3 px-5">
                <div className="mr-3">
                  <TypoGraphy variant="body2" isbold>
                    {firstTitle}
                  </TypoGraphy>
                </div>
                {buttons?.length
                  ? buttons.map((button, idx) => (
                      <div key={idx} className="ml-3">
                        <Button {...button}></Button>
                      </div>
                    ))
                  : null}

                <div className="ml-6">
                  <TypoGraphy variant="body2" isbold>
                    {secondTitle}
                  </TypoGraphy>
                </div>
                <div className="ml-6">
                  <TypoGraphy variant="caption">{caption}</TypoGraphy>
                </div>
              </div>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
