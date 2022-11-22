import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

export const ProfileComponent: React.FC = () => {
    return (
        <Box >
            <Avatar sx={{ bgcolor: deepOrange[500] }}>U</Avatar>
        </Box>
    );
};