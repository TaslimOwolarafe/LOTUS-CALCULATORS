import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface InfoCardProps {
    title: string;
    children: ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => {
    return (
        <Box sx={{
            width: '579px',
            padding: '22px 30px',
            backgroundColor: '#FFFFFF',
            border: '0px solid #E0E0E0',
            borderRadius: '12.5px',
            // marginBottom: '30px',
        }}>
            <Typography 
                sx={{
                    fontSize: '24px',
                    lineHeight: '25px',
                    fontWeight: '500', 
                    color: "#D32F2F",
                    marginBottom: '16px' 
                }}
            >
                {title}
            </Typography>
            {children}
        </Box>
    );
};

export default InfoCard;
