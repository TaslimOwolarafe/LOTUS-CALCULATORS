import React from "react";
import Image from 'next/image';
import { RoundedTextField } from "../../input/Input";
import { RButton } from '../../nav/Button';
import { UseFormReturn } from "react-hook-form";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { formatPrice } from "@/utils/formatPrice";
import dotenv from 'dotenv';
dotenv.config();

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '646px',
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '34px',
    paddingTop: '50px'
};

interface ZakatIntroProps {
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
    handleNext: () => void;
    methods: UseFormReturn;
}

const nisab = process.env.NISAB ? Number(process.env.NISAB) : 11810080;
const nisabDate = process.env.NISAB_DATE ? String(process.env.NISAB_DATE) : "26th January 2025";

const ZakatIntro: React.FC<ZakatIntroProps> = ({
    open,
    handleOpen,
    handleClose,
    handleNext,
    methods
}) => {
    return (
        <div className="flex flex-row w-full px-[150px] py-[100px] items-top justify-between">
            <div>
                <Image width={245} height={244} src="/assets/images/zakatBox.png" alt="ZAKAT" className="w-[245px] h-[244px]" />
            </div>
            <div className="w-[383px]">
                <div className="pb-6">
                    <h2 className="text-[20px] font-semibold pb-4 text-[#BF0401]">Let&lsquo;s help you compute <br /> your Zakat!</h2>
                    <p className="text-[15px] font-normal text-[#505050] pb-4">Please enter all assets that you have in your possession over a lunar year along with your liabilities to calculate your Zakat. Click the start button when ready</p>
                    <p>Enter your <span className="font-bold text-[#505050]">Nisab</span><Image onClick={handleOpen} src="/assets/images/info.png" width={12} height={12} alt='info' className="inline cursor-pointer w-[12px] h-[12px] ml-2" /></p>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} className="relative">
                            <Image width={32} height={32} onClick={handleClose} src="/assets/images/exit.png" alt="ZAKAT" className="absolute cursor-pointer w-[32px] h-[32px] right-5 top-5" />
                            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontSize: '24px', fontWeight: 700, lineHeight: '29.26px' }}>
                                Nisab
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Nisab is the minimum amount of wealth that you must have in your possession for a lunar year before you are obligated to pay Zakat. <br /><br />

                                The Nisab was set by the Prophet Muhammad (peace be upon him) at a rate equivalent to 87.48 grams of gold or 612.36 grams of silver. The monetary equivalent varies yearly. As at 7th April 2023, it was N2,528,480.00 as reported by the National Moonsighting Committee Nigeria. <br /><br />

                                Please check the Nisab with your local Islamic organizations or authorities before calculating and paying.
                            </Typography>
                        </Box>
                    </Modal>
                </div>
                <div>
                    <RoundedTextField
                        name="nisab"
                        label="Nisab"
                        placeholder={formatPrice(nisab)}
                        control={methods.control}
                        rules={{ required: "First name is required" }}
                        disabled
                    />
                    <p className="pb-8">(As at {nisabDate})</p>
                    <RButton onClick={handleNext} halfwidth danger>Get Started</RButton>
                </div>
            </div>
        </div>
    );
};

export default ZakatIntro;
