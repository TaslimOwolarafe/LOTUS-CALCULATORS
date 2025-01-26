import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Image from 'next/image';

interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
    isHighlighted?: boolean;
    color: string;
    priceColor: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, isHighlighted = false, color, priceColor }) => {
    return (
        <Card
            sx={{
                border: '0px solid #ddd',
                borderRadius: '16.63px',
                marginLeft: '30px',
                marginRight: '30px',
                boxShadow: isHighlighted ? `0px 0px 6px 35px rgba(1, 1, 1, 0.1)` : 'none',
                backgroundColor: '#F0F0F0',
                position: 'relative',
                width: '337.5px',
                zIndex: '2',
                overflow: 'visible',
            }}
        >
            <Box
                sx={{
                    backgroundColor: color,
                    color: '#FFF',
                    textAlign: 'left',
                    padding: '20px 20px',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    height: '77.31px',
                    marginBottom: '5px',
                }}
            >
                <Typography variant="subtitle1" sx={{ fontWeight: '300', color: priceColor, fontSize: '14.12px', lineHeight: '14.71px', letterSpacing: '23%' }}>
                    {title.toUpperCase()}
                </Typography>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        color: priceColor,
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                    }}
                >
                    {price}
                </Typography>
            </Box>

            <CardContent sx={{
                backgroundColor: '#FFF',
                height: '321.7px',
                paddingY: '10px',
                borderBottomRightRadius: '16px',
                borderBottomLeftRadius: '16px',
            }}>
                <Box component="ul" sx={{ paddingLeft: '2rem', listStyleType: 'disc'}}>
                    {features.map((feature, index) => (
                        <Typography
                            component="li"
                            key={index}
                            sx={{ marginBottom: '0.5rem', color: '#333', fontSize: '16.67px' }}
                        >
                            {feature}
                        </Typography>
                    ))}
                </Box>
            </CardContent>

            {isHighlighted && (
                <div
                    style={{
                        position: 'absolute',
                        top: '-20px',
                        right: '-20px',
                        zIndex: '10'
                    }}
                >
                    <Image width={24} height={24} src="/assets/images/accept 1.png" alt="accept" className='w-[24px] h-[24px]' />
                </div>
            )}
        </Card>
    );
};

export default PricingCard;
