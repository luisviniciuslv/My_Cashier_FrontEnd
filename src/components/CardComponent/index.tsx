import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardComponentType } from './types/CardComponent';

export const CardComponent: React.FC<CardComponentType> = ({ title, icon, value }: CardComponentType) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <div>
                    <Typography gutterBottom variant="h5" component="span">
                        {title}
                    </Typography>
                    {icon}
                </div>
                <Typography variant="body2" color="text.secondary">
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
};
