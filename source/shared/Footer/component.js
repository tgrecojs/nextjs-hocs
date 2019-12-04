import { StyledFooter, ColumnCentered } from '../tailwindcss/layout.components';

const Footer = ({ text = 'Redux DSM Example' }) => (
  <StyledFooter>
    <ColumnCentered>
      <p>{text}</p>
      <p>
        <em>"Do one thing every day that scares you" - Marie Antoinette</em>
      </p>
    </ColumnCentered>
  </StyledFooter>
);

export default Footer;
