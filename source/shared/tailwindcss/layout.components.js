import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { css } from '@emotion/core';

const DefaultBorderValues = css`
  ${tw`rounded p-2`}
`;



const TotalRows__small_vp = css`
  ${tw`
    sm:font-md
    items-baseline
  `}
`;

const TotalsRow = styled.div`
  ${DefaultBorderValues}
  ${TotalRows__small_vp}
  ${tw`
  border-4
  font-lg
  flex
  sm:flex-col bg-blue-500 justify-around
  sm:items-center
  md:flex-row
  text-white font-mono px-4 py-2 rounded`}
    :hover {
    ${tw`bg-blue-700`}s
  }
`;

const StyledTabled = styled.table`
  ${tw`table-auto`}
`;

const tdStyle = css`
  ${tw` border-2 px-4 py-2 bg-blue-400`} :hover {
    ${tw`bg-blue-700`}
  }
`;

const TableData = styled.td`
  ${tdStyle}
`;

const Header = styled('div')`
  ${tw`font-mono
  bg-gray-200
  p-2
  sm:text-sm sm:text-blue-500
  md:text-md md:text-yellow-800 md:bg-teal-600
  lg:text-2xl lg:text-orange-600`}
`;

const Button = styled.button`
  ${tw`bg-blue-500 text-white font-mono px-4 py-2 rounded`} :hover {
    ${tw`bg-blue-700`}
  }
`;

const Wrapper = styled.div`
  ${tw`bg-teal-700`}
`;

const CardStyle = css`
  ${tw`p-4 border-solid border border-gray-300  rounded p-4 shadow-xl`}
`;

const Card = styled.div`
  ${CardStyle}
  ${tw`bg-teal-400 lg:bg-yellow-200`}
`;

const ColumnCentered = styled.div`
  ${tw`bg-teal-400 flex flex-col items-center`}
`;

const StyledFooter = styled.footer`
  ${tw`bg-indigo-300 sm:text-small text-lg antialiased p-0`}
`;

export {
  ColumnCentered,
  StyledFooter,
  StyledTabled,
  TableData,
  Header,
  Button,
  CardStyle,
  Card,
  TotalsRow,
  Wrapper
};
