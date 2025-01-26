import React from "react";

import { RButton } from '../../nav/Button';
import { UseFormReturn } from "react-hook-form";

import Box from '@mui/material/Box';
import Image from "next/image";

interface HajjOptionsProps {
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
    methods: UseFormReturn;
    handleOptionSelect: (option: 'investment' | 'contribution') => void;
}

const HajjOptions: React.FC<HajjOptionsProps> = ({
    // open,
    // handleOpen,
    // handleClose,
    // methods,
    handleOptionSelect,
}) => {
    return (
        <div className="flex flex-col w-full px-[150px] py-[100px] items-center justify-between">
            <div className="text-center flex justify-center">
                <Image width={237} height={230} src="/assets/images/HajjHero.png" alt="ZAKAT" className="w-[237px] h-[230px]" />
            </div>
            <div className="w-[383px] mt-[40px] text-center flex-col items-center justify-center">
                <div className="pb-6 flex flex-col items-center">
                    <h2 className="text-[24px] text-center font-[700] pb-4 text-[#BF0401] w-[240px] leading-[23px]">Let&apos;s help you compute  your Hajj!</h2>
                    <p className="text-[16px] w-[268px] font-[400] text-[#505050] pb-4 leading-[18px]">Calculate your Monthly Investment or the number of Monthly Contributions to make your your next Hajj</p>
                </div>
                <Box>
                    <RButton onClick={() => handleOptionSelect('investment')} fullWidth danger style={{marginBottom: '15px'}}>Calculate monthly investment</RButton>
                    <RButton onClick={() => handleOptionSelect('contribution')} fullWidth danger variant="outlined">Calculate monthly contribution</RButton>
                </Box>
            </div>
        </div>
    );
};

export default HajjOptions;
