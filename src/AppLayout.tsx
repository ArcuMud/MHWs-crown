import { NavLink, Outlet } from 'react-router';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function AppLayout() {
  return (
    <div className="m-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink to="/crown">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Crown</NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink to="/mission">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Mission</NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex flex-col m-4 gap-10">
        <Outlet />
      </div>
    </div>
  );
}
