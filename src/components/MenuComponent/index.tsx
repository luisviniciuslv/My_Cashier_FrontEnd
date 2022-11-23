import React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { MenuStyle } from './StylesObjects/style';

export const MenuComponent: React.FC = () => {
    return (
        <Paper sx={MenuStyle}>
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <DashboardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Dasboard</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <CreditScoreIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Vendas</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Clientes</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <LocalGroceryStoreIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Produtos</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <StackedBarChartIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Caixa</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    );
};
