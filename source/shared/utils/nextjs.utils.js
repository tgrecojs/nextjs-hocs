import Link from 'next/link';
import { Router } from 'next/router';

const onCustomLinkClicked = ({ href = '', as = href, isShallow = false }) =>
  Router.push(href, as, { shallow: isShallow });

const onShallowRouteNavigation = ({ href = '', as = '' }) =>
  onCustomLinkClicked(href, as, true);

const CustomLink = ({ href = '', as = href, label = 'Default Link Label' }) => (
  <Link href={href} as={as}>
    <a>{label}</a>
  </Link>
);

export { onCustomLinkClicked, onShallowRouteNavigation, CustomLink };
