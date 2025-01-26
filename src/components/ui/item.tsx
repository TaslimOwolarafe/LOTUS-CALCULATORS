import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { formatPrice } from '@/utils/formatPrice';

interface ItemCardProps {
    amount: number;
    title: string;
    onDelete?: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ amount, title, onDelete }) => {
    return (
        <Box
            sx={{
                padding: "30px 30px",
                backgroundColor: "#FFF",
                border: "0px solid #E0E0E0",
                borderRadius: "9px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: '59px',
                width: '446px'
            }}
        >
            <Typography component={'div'}>
                <h1 className='font-500 text-[16px] leading-[19px]'>
                    {formatPrice(amount)}
                </h1>
                <p className='font-300 text-[10px] text-[#949494]'>
                    {title}
                </p>
            </Typography>
            <Image
                width={11.67}
                height={14}
                src="/assets/images/delete.png"
                alt="Delete"
                className="cursor-pointer w-[11.67] h-[14px]"
                onClick={onDelete}
            />
        </Box>
    );
};

export default ItemCard;
