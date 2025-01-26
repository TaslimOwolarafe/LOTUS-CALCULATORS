import React from "react";
import { RButton } from '../../nav/Button';
import { UseFormReturn } from "react-hook-form";


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


interface HajjResultsProps {
    handleNext: () => void;
    handleBack: () => void;
    handleReset: () => void;
    methods: UseFormReturn;
}

const HajjResults: React.FC<HajjResultsProps> = ({
    handleNext,
    handleBack,
    // handleReset,
    // methods
}) => {


    return (
        <div className="flex flex-row w-[1200px] px-[0px] py-0 items-top justify-between">
            {/* <div className="w-full absolute z-10 bottom-0">
                <img src={hajjBG} alt="ZAKAT" className="w-full" />
            </div> */}

            <div className="w-[540px] z-20">
                <h2 className="w-[346px] font-[500] text-[24px] leading-[25px]">Your Hajj monthly investment</h2>
                <Box sx={{
                    marginTop: '50px',
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end'
                }}>
                    <Box>
                        <Box sx={{
                            marginBottom: '20px',
                        }}>
                            <p className="font-[300] text-[12px] leading-[11.48px] leading-[11.48px]">Hajj Plan</p>
                            <h1 className="font-[500] text-[22.04px] leading-[34.44px]">Intermediate</h1>
                        </Box>
                        <Box sx={{
                            marginBottom: '20px',
                        }}>
                            <p className="font-[300] text-[12px] leading-[11.48px]">Hajj Cost</p>
                            <h1 className="font-[500] text-[24px] leading-[34.44px]">₦ 2,866,667.00</h1>
                        </Box>
                        <Box sx={{
                            marginBottom: '20px',
                        }}>
                            <p className="font-[300] text-[12px] leading-[11.48px]">Hajj Cost at time of Journey i.e in 48 months</p>
                            <h1 className="font-[500] text-[24px] leading-[34.44px]">₦ 5,204,017.85</h1>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{
                            marginBottom: '20px',
                        }}>
                            <p className="font-[300] text-[12px] leading-[11.48px]">Your total contribution for 12 months</p>
                            <h1 className="font-[500] text-[24px] leading-[34.44px]">₦ 4,781,543.56</h1>
                        </Box>
                        <Box sx={{
                            marginBottom: '20px',
                        }}>
                            <p className="font-[300] text-[12px] leading-[11.48px]">Estimated month payment</p>
                            <h1 className="font-[500] text-[24px] leading-[34.44px]">₦ 398,461.96</h1>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    margin: '10px 0',
                    border: '0px solid transparent',
                    borderRadius: '11.02px',
                    padding: '22px 20px',
                    backgroundColor: '#FFD2D1',
                }}>
                    <p className="font-[300] text-[12px] leading-[11.48px] leading-[11.48px]">Expected Withdrawal Year</p>
                    <h1 className="font-[500] text-[22.04px] leading-[34.44px]">Tuesday 1 February, 2028</h1>
                </Box>
                <Typography sx={{
                    width: '430px',
                    fontWeight: 300,
                    fontSize: '9.93px',
                    lineHeight: '13.78px',
                    marginBottom: '40px',
                }}>
                Disclaimer: This calculator is an approximation of expectations based on assumptions which may not be exactly the same as actual investment returns. The calculator&apos;s results are for information only
                </Typography>
                <RButton onClick={handleBack} mdWidth variant="outlined">Back</RButton>
                <RButton onClick={handleNext} style={{ marginLeft: '10px', width: '265px' }}>Email me this result</RButton>
            </div>
        </div>
    );
};

export default HajjResults;
