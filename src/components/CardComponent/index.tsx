import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardComponentType } from './types/CardComponent';
import { StyleCard, HeaderContentCard, ContentCard } from './StylesObjects/styles';

export const CardComponent: React.FC<CardComponentType> = ({ title, icon, value, color }: CardComponentType) => {
    return (
        <Card
            sx={StyleCard}
            style={{
                backgroundColor: color
            }}
        >
            <CardContent>
                <Box
                    sx={HeaderContentCard}
                >
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="span"
                        color={grey[50]}
                    >
                        {title}
                    </Typography>
                    <Typography
                        color={grey[50]}
                    >
                        {icon}
                    </Typography>
                </Box>
                <Typography variant="h4" color={grey[50]}>
                    R$ {value}
                </Typography>
            </CardContent>
        </Card>
    );
};
