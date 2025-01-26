import React from 'react';
import { Box, Typography } from '@mui/material';

interface ListItemProps {
    label: string | React.ReactNode;
    value: string | number;
}

const ListItem: React.FC<ListItemProps> = ({ label, value }) => {
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '11px 0px'
            }}
        >
            <Typography sx={{ fontSize: '16px', color: '#272727', fontWeight: '300' }}>
                {label}
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '300', color: '#272727' }}>
                {value}
            </Typography>
        </Box>
    );
};

export default ListItem;
