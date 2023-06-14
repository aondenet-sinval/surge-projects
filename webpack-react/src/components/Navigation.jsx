import React from 'react'
import { useMediaQuery } from 'react-responsive';
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

export default function Navigation() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <MobileMenu /> : <DesktopMenu />;
}
