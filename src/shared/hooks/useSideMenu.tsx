import { useEffect, useState } from 'react'

export type UseSidebar = [
  boolean,
  () => void
]

const useSideMenu = (newOpenValue: boolean): UseSidebar => {
  const [showMenu, setShowMenu] = useState<boolean>(true);

  const toggleMenu = () => setShowMenu(!showMenu)

  useEffect(() => {
    setShowMenu(newOpenValue);
  }, [newOpenValue]);

  return [showMenu, toggleMenu];
}

export default useSideMenu
