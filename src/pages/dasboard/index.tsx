import React from 'react';
import { CardComponent } from '../../components/CardComponent';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

import './style.css'

export const DashboardPage: React.FC = () => {
    return (
        <div className='dashboard'>
            <div className='dashboard-header'>
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
            <div className='dashboard-table'>
                <table>
                    <thead>
                        <tr>campo</tr>
                    </thead>
                    <tbody>
                        <td>Vinicus</td>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
