import React from 'react';
import { CardComponent } from '../../components/CardComponent';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

import './style.css'
import { ProfileComponent } from '../../components/ProfileComponent';
import { TableComponent } from '../../components/TableComponent';

export const DashboardPage: React.FC = () => {
    return (
        <div className='dashboard'>
            <div className='dashboard-header'>
                <h1>Dashboard</h1>
                <div className='box-profile'>
                    <ProfileComponent />
                </div>
                <div className='container-cards'>
                    <CardComponent
                        title='Vendas'
                        value={1000}
                        icon={<AccessibilityNewIcon />}
                        color='#34D399'
                    />
                    <CardComponent
                        title='Receitas'
                        value={1000}
                        icon={<AccessibilityNewIcon />}
                        color='#F87171'
                    />
                    <CardComponent
                        title='Saldo'
                        value={1000}
                        icon={<AccessibilityNewIcon />}
                        color='#A78BFA'
                    />
                </div>
            </div>
            <div className='dashboard-table'>
                <TableComponent />
            </div>
        </div>
    );
};
