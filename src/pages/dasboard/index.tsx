import React from 'react';
import { CardComponent } from '../../components/CardComponent';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export const DashboardPage: React.FC = () => {
    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <div className='container-cards'>
                <CardComponent
                    title='Vendas'
                    value={1000}
                    icon={<AccessibilityNewIcon />}
                />
                <CardComponent
                    title='Receitas'
                    value={1000}
                    icon={<AccessibilityNewIcon />}
                />
                <CardComponent
                    title='Saldo'
                    value={1000}
                    icon={<AccessibilityNewIcon />}
                />
            </div>
        </div>
    );
};
