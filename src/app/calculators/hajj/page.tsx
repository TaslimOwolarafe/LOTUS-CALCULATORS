/* eslint-disable @next/next/no-img-element */
'use client';
import * as React from 'react';
import Navbar from "../../../components/nav/Header";
import { useForm } from "react-hook-form";

import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';


import HajjIntro from '@/components/ui/hajj/hajjIntro';
import HajjOptions from '@/components/ui/hajj/hajjOptions';
import HajjStart from '@/components/ui/hajj/hajjStart';
import HajjExpenses from '@/components/ui/hajj/hajjExpenses';
import HajjMonthlyContributions from '@/components/ui/hajj/hajjMonthlyCont';
import HajjResults from '@/components/ui/hajj/hajjResults';

import ZakatCash from '@/components/ui/zakat/zakatCash';
import ZakatInvestment from '@/components/ui/zakat/zakatInvestment';
import ZakatOther from '@/components/ui/zakat/zakatOther';
import ZakatLiabilities from '@/components/ui/zakat/zakatLiabilities';
import ZakatResults from '@/components/ui/zakat/zakatResults';

import Image from 'next/image';

const steps = ['Introduction', 'Start Date', 'Expenses', 'Monthly Contributions', 'Results']

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#BF0401',
        borderRadius: 1,
        ...theme.applyStyles('dark', {
            borderColor: '#BF0401',
        }),
    },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme }) => ({
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        width: 'fit-content',
        alignItems: 'center',
        gap: '8px',
        // '& .QontoStepIcon-completedIcon': {
        //     color: '#784af4',
        //     zIndex: 1,
        //     fontSize: 18,
        // },
        // '& .QontoStepIcon-circle': {
        //     width: 8,
        //     height: 8,
        //     borderRadius: '50%',
        //     backgroundColor: 'currentColor',
        // },
        ...theme.applyStyles('dark', {
            color: theme.palette.grey[700],
        }),
        variants: [
            {
                props: ({ ownerState }) => ownerState.active,
                style: {
                    color: '#784af4',
                },
            },
        ],
    }),
);

function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed || active ? (
                <div
                    style={{
                        backgroundImage: `url('/assets/images/bgIcon.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className='w-[35px] h-[35px] flex items-center justify-center'>
                    <Image width={21.3} height={21.3}
                        src="/assets/images/activeStep.png"
                        alt="Welcome"
                        className="QontoStepIcon-completedIcon w-[21.3px] h-[21.3px]" />
                </div>

            ) : (
                <div
                    style={{
                        backgroundImage: `url('/assets/images/bgIcon.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className='w-[35px] h-[35px] flex items-center justify-center'>
                    <Image width={21.3} height={21.3}
                        src="/assets/images/inactiveStep.png"
                        alt="Welcome"
                        className="QontoStepIcon-circle w-[21.3px] h-[21.3px]" />
                </div>

            )}
        </QontoStepIconRoot>
    );
}


const HajjPage = () => {
    const methods = useForm();
    const [activeStep, setActiveStep] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedOption, setSelectedOption] = React.useState<'investment' | 'contribution' | null>(null);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleOptionSelect = (option: 'investment' | 'contribution') => {
        setSelectedOption(option);
        handleNext();
    };

    return (
        <div className="flex relative items-center flex-col px-[55px] min-h-screen w-[1440px] bg-[#F0F0F0]">
            <div className="top-0 w-[100%]">
                <Navbar />
            </div>
            <div className="pt-9">
                <div className="flex absolute flex-row items-center justify-between h-[35px] w-[195px] left-[60px] top-[80px]">
                    <div>
                        <Image width={34} height={34} src="/assets/images/back.png" alt="back" className="w-[34px] h-[34px]" />
                    </div>
                    <div>
                        <h2 className="text-[20px] font-semibold text-[#BF0401]">Hajj Calculator</h2>
                    </div>
                </div>

                <Box sx={{ width: '1018.43px', margin: 'auto', paddingY: '40px' }}>
                    {activeStep !== 0 && (
                        <Stepper activeStep={activeStep - 1} connector={<QontoConnector />}>
                            {steps.map((label) => {
                                const stepProps: { completed?: boolean } = {};
                                const labelProps: {
                                    optional?: React.ReactNode;
                                } = {};


                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel StepIconComponent={QontoStepIcon} {...labelProps}
                                            sx={{
                                                '& .MuiStepLabel-label': {
                                                    fontSize: '20px',
                                                    fontWeight: '300px',
                                                    paddingLeft: '3px'
                                                },
                                            }}
                                        >{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>)}
                    <React.Fragment>
                        {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                        <Box sx={{ mt: 4, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {activeStep === 0 && <HajjOptions open={open} handleOpen={handleOpen} handleClose={handleClose} methods={methods} handleOptionSelect={handleOptionSelect} />}
                            {selectedOption === "investment" && (
                                <>
                                    {activeStep === 1 && <HajjIntro handleNext={handleNext} handleBack={handleBack} methods={methods} />}
                                    {activeStep === 2 && <HajjStart handleNext={handleNext} handleBack={handleBack} />}
                                    {activeStep === 3 && <HajjExpenses handleNext={handleNext} handleBack={handleBack} />}
                                    {activeStep === 4 && <HajjMonthlyContributions handleNext={handleNext} handleBack={handleBack} methods={methods} />}
                                    {activeStep === 5 && <HajjResults handleNext={handleNext} handleBack={handleBack} methods={methods} handleReset={handleReset} />}
                                </>
                            )}
                            {selectedOption === "contribution" && (
                                <>
                                    {activeStep === 1 && <ZakatCash handleNext={handleNext} handleBack={handleBack} methods={methods} />}
                                    {activeStep === 2 && <ZakatInvestment handleNext={handleNext} handleBack={handleBack} methods={methods} />}
                                    {activeStep === 3 && <ZakatOther handleNext={handleNext} handleBack={handleBack} methods={methods} />}
                                    {activeStep === 4 && <ZakatLiabilities handleNext={handleNext} handleBack={handleBack} methods={methods} />}
                                    {activeStep === 5 && <ZakatResults handleNext={handleNext} handleBack={handleBack} methods={methods} handleReset={handleReset} />}
                                </>
                            )}
                        </Box>
                    </React.Fragment>
                </Box>
            </div>

                {activeStep === 5 && <div className="w-full absolute z-10 bottom-0">
                    <img src="/assets/images/hajjBG.png" alt="ZAKAT" className="w-full" />
                </div>}
        </div>

    );
};

export default HajjPage;