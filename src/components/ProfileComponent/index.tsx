import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { ProfileStyle } from './StylesObjects/style';

export const ProfileComponent: React.FC = () => {
    return (
        <Box >
            <Avatar sx={ProfileStyle}>U</Avatar>
        </Box>
    );
};
