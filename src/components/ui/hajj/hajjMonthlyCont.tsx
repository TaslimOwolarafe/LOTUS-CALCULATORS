'use client';
import React from "react";
import { RButton } from '../../nav/Button';
import { RoundedTextField } from "@/components/input/Input";
import { Typography } from "@mui/material";
import { UseFormReturn } from "react-hook-form";


interface HajjMonthlyContributionsProps {
    handleNext: () => void;
    handleBack: () => void;
    methods: UseFormReturn;
}

const HajjMonthlyContributions: React.FC<HajjMonthlyContributionsProps> = ({
    handleNext,
    handleBack,
    methods
}) => {


    return (
        <div className="flex flex-row w-[495px] py-[40px] items-center justify-center">
            <div className="w-full">
                <div className="pb-6 w-full flex flex flex-col items-center">
                    <h2 className="text-[24px] w-[340px] font-[500] pb-4 text-[#000] leading-[25px] text-center">Monthly Contributions</h2>
                    <div className="flex w-full flex-col items-center justify-center py-10 pb-40">
                        <div className="w-full flex justify-between items-center mb-6">
                               <RoundedTextField
                                    name="monthNumberTerminate"
                                    label="How many months from now do you plan to terminate your investment?"
                                    placeholder="20"
                                    control={methods.control}
                                    variant="big"
                                ></RoundedTextField>
                                <Typography sx={{
                                    border: '0px solid transparent',
                                    width: '95px',
                                    height: '47px',
                                    borderRadius: '44px',
                                    backgroundColor: '#FFF',
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    marginTop: '5px',
                                    color: '#A0A3BD',
                                    textAlign: 'center',
                                    alignContent: 'center'
                                }}>
                                  Months  
                                </Typography>
                        </div>
                        <div className="w-full flex justify-between items-center">
                               <RoundedTextField
                                    name="monthNumberContributions"
                                    label="How many monthly contributions are you planning to make?"
                                    placeholder="20"
                                    control={methods.control}
                                    variant="big"
                                ></RoundedTextField>
                                <Typography sx={{
                                    border: '0px solid transparent',
                                    width: '95px',
                                    height: '47px',
                                    borderRadius: '44px',
                                    backgroundColor: '#FFF',
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    marginTop: '5px',
                                    color: '#A0A3BD',
                                    textAlign: 'center',
                                    alignContent: 'center'
                                }}>
                                  Months  
                                </Typography>
                        </div>
                    </div>
                    <div className="mr-0 inline w-[270px] flex justify-between mt-40">
                        <RButton onClick={handleBack} variant="outlined" mdWidth>Back</RButton>
                        <RButton onClick={handleNext} variant="contained" mdWidth>Start</RButton>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HajjMonthlyContributions;
