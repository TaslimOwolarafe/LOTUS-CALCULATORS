'use client';
import React from "react";
import { RButton } from '../../nav/Button';
import { UseFormReturn } from "react-hook-form";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import Image from "next/image";


interface HajjIntroProps {
    handleNext: () => void;
    handleBack: () => void;
    methods: UseFormReturn;
}


const HajjIntro: React.FC<HajjIntroProps> = ({
    handleNext,
    handleBack,
    // methods
}) => {


    return (
        <div className="flex flex-row w-full px-[36px] py-[40px] items-top justify-between">
            <div>
                <div className="w-[450px] h-[414px] flex items-center justify-center rounded-xl bg-[#FFFFFF] mb-7">
                    <Image width={323.24} height={314} src="/assets/images/HajjHero.png" alt="ZAKAT" className="w-[323.24px] h-[314px]" />
                </div>
            </div>

            <div className="w-[482px] ml-[45px]">
                <h2 className="w-[409px] font-[500] text-[24px] leading-[25px]">Calculate your monthly investment</h2>
                <Box sx={{
                    margin: "30px 0px",
                    fontSize: '16px',
                    fontWeight: '300',
                    lineHeight: '25px',
                    textAlign: 'justify'
                }}>
                    <Typography sx={{
                        margin: "30px 0px",
                        fontSize: '16px',
                        fontWeight: '300',
                        lineHeight: '25px'
                    }}>
                        This calendar is an approximation of expenses based on assumptions which may not be exactly the same as actual investment returns. The calculator&apos;s results are for information purpose only and does not constitute a legal contract
                    </Typography>
                    <Typography sx={{
                        margin: "30px 0px",
                        fontSize: '16px',
                        fontWeight: '300',
                        lineHeight: '25px'
                    }}>
                        Based on our last survey of hajj operators in Nigeria in 3021, the average estimated costs for hajj for basic, intermediate and premium packages have been provided in this calculator to ease your planning.
                    </Typography>
                    <Typography sx={{
                        margin: "30px 0px",
                        fontSize: '16px',
                        fontWeight: '300',
                        lineHeight: '25px'
                    }}>
                        Please note that the actual cost of hajj may vary depending on your chosen operator, the amenities covered in your package and your expected travel date.
                    </Typography>
                    <Typography sx={{
                        margin: "30px 0px",
                        fontSize: '16px',
                        fontWeight: '300',
                        lineHeight: '25px'
                    }}>
                        Lotus Capital is not a hajj operator and is not responsible for securing hajj packages at the indicated rates in the calculator.
                    </Typography>
                </Box>
                <RButton onClick={handleBack} danger mdWidth variant="outlined">Back</RButton>
                <RButton onClick={handleNext} danger mdWidth style={{ marginLeft: '10px'}}>Start</RButton>
            </div>
        </div>
    );
};

export default HajjIntro;
