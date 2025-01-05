import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';

import { DrawerOption } from './DefaultDrawer.types';
import { ADD_LOGGED_IN_ROUTES } from '../../constants/routes';
import { useAuth } from '../../components/AppEntry/hooks/useAuth';

type useDefaultDrawerOptionsProps = {
  isOpen: boolean;
};

export const useDefaultDrawerOptions = ({
  isOpen,
}: useDefaultDrawerOptionsProps) => {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();

  const DRAWER_OPTIONS: Array<DrawerOption> = useMemo(() => {
    return [
      {
        title: 'Dashboard',
        Icon: <DashboardIcon />,
        onClick: () => navigate(ADD_LOGGED_IN_ROUTES.TODOS),
      },
      {
        title: 'Settings',
        Icon: <SettingsIcon />,
        onClick: () => console.log('Settings'),
        shouldDivider: true,
      },
      {
        title: 'Logout',
        Icon: <LogoutIcon />,
        onClick: () => handleLogout(),
      },
    ];
  }, []);

  const renderDrawerListItem = () => (
    <>
      {DRAWER_OPTIONS.map(({ Icon, onClick, title, shouldDivider }) => (
        <React.Fragment key={title}>
          {isOpen ? (
            <ListItem onClick={onClick} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ margin: '-6px' }}>{Icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ) : (
            <Tooltip title={title} placement="right">
              <ListItem onClick={onClick} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ margin: '-6px' }}>{Icon}</ListItemIcon>
                  <ListItemText primary={title} />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          )}
          {shouldDivider && <Divider />}
        </React.Fragment>
      ))}
    </>
  );

  return renderDrawerListItem;
};
