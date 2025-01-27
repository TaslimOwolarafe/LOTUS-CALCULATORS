import React, { useState, useEffect, ChangeEvent } from "react";
// import Cookies from 'js-cookie';
import Image from 'next/image';

import { RoundedTextField } from "../../input/Input";
import { RButton } from '../../nav/Button';
import { UseFormReturn } from "react-hook-form";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { styled } from '@mui/material/styles';
import AddButton from "../add";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ItemCard from "../item";
import { formatPrice } from "@/utils/formatPrice";

import dotenv from 'dotenv';
dotenv.config();

const FormAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: '#F0F0F0',
    boxShadow: 'none',
    padding: `${theme.spacing(1.125)} 0`,
}));

const FormAccordionSummary = styled(AccordionSummary)(({ }) => ({
    paddingLeft: 0,
    paddingRight: 0,
    '.MuiAccordionSummary-expandIconWrapper': {
        transform: 'none !important', // Prevent rotation
    },
}));

interface ZakatCashProps {
    handleNext: () => void;
    handleBack: () => void;
    methods: UseFormReturn;
}

const nisab = process.env.NISAB ? Number(process.env.NISAB) : 11810080;
const nisabDate = process.env.NISAB_DATE ? String(process.env.NISAB_DATE) : "26th January 2025";

const ZakatCash: React.FC<ZakatCashProps> = ({
    handleNext,
    handleBack,
    methods
}) => {

    const [expandedPanels, setExpandedPanels] = React.useState<Record<string, boolean>>({
        panel1: false,
        panel2: false,
        panel3: false,
        panel4: false,
    });

    const handleAccordionToggle = (panel: string) => {
        setExpandedPanels((prev) => ({
            ...prev,
            [panel]: !prev[panel],
        }));
    };


    // CASH IN HAND STORE
    interface CashInHand {
        amount: string;
    }

    const [cashInHand, setCashInHand] = useState<CashInHand[]>(() => {
        const storedCash = localStorage.getItem('cashInHand');
        return storedCash ? JSON.parse(storedCash) : [];
      });

    const [cashFormValues, setCashFormValues] = useState<CashInHand>({
        amount: "",
    });

    useEffect(() => {
    localStorage.setItem("cashInHand", JSON.stringify(cashInHand));
  }, [cashInHand]);

    const handleCashInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCashFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCashUpdate = () => {
        if (cashFormValues.amount.trim()) {
            const newCashEntries = [...cashInHand, cashFormValues];
            setCashInHand(newCashEntries);

            setCashFormValues({
                amount: "",
            });
        } else {
            alert("Amount is required!");
        }
    };

    const handleDeleteCash = (index: number) => {
        const updatedCash = cashInHand.filter((_, i) => i !== index);
        setCashInHand(updatedCash);
    };

    // CASH IN BANK
    interface CashInBank {
        bankName: string;
        description: string;
        valueDate: string;
        amount: string;
        bankBranch: string;
    }

    const [cashInBankEntries, setCashInBankEntries] = useState<CashInBank[]>(() => {
        const storedCashInBank = localStorage.getItem("cashInBank");
        return storedCashInBank ? JSON.parse(storedCashInBank) : [];
    });
    const [cashInBankFormValues, setCashInBankFormValues] = useState<CashInBank>({
        bankName: "",
        description: "",
        valueDate: "",
        amount: "",
        bankBranch: "",
    });

    useEffect(() => {
        localStorage.setItem("cashInBank", JSON.stringify(cashInBankEntries));
    }, [cashInBankEntries]);

    const handleCashInBankInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCashInBankFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCashInBankUpdate = () => {
        if (cashInBankFormValues.bankName.trim() && cashInBankFormValues.amount.trim()) {
            const newCashInBankEntries = [...cashInBankEntries, cashInBankFormValues];
            setCashInBankEntries(newCashInBankEntries);


            setCashInBankFormValues({
                bankName: "",
                description: "",
                valueDate: "",
                amount: "",
                bankBranch: "",
            });
        } else {
            alert("Bank Name and Amount are required!");
        }
    };

    const handleDeleteCashInBank = (index: number) => {
        const updatedCashInBankEntries = cashInBankEntries.filter((_, i) => i !== index);
        setCashInBankEntries(updatedCashInBankEntries);
    };

    // DEPOSITS
    interface Deposit {
        bankName: string;
        description: string;
        depositDate: string;
        amount: string;
        location: string;
    }

    const [depositEntries, setDepositEntries] = useState<Deposit[]>(() => {
        const storedDeposits = localStorage.getItem("deposits");
        return storedDeposits ? JSON.parse(storedDeposits) : [];
    });
    const [depositFormValues, setDepositFormValues] = useState<Deposit>({
        bankName: "",
        description: "",
        depositDate: "",
        amount: "",
        location: "",
    });

    useEffect(() => {
        localStorage.setItem("deposits", JSON.stringify(depositEntries));
    }, [depositEntries]);

    const handleDepositInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDepositFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleDepositUpdate = () => {
        if (depositFormValues.bankName.trim() && depositFormValues.amount.trim()) {
            const newDepositEntries = [...depositEntries, depositFormValues];
            setDepositEntries(newDepositEntries);


            setDepositFormValues({
                bankName: "",
                description: "",
                depositDate: "",
                amount: "",
                location: "",
            });
        } else {
            alert("Bank Name and Amount are required!");
        }
    };

    const handleDeleteDeposit = (index: number) => {
        const updatedDepositEntries = depositEntries.filter((_, i) => i !== index);
        setDepositEntries(updatedDepositEntries);
    };


    // LOANS
    interface Loan {
        beneficiary: string;
        memo: string;
        loanDate: string;
        amount: string;
        address: string;
    }

    const [loanEntries, setLoanEntries] = useState<Loan[]>(() => {
        const storedLoans = localStorage.getItem("loans");
        return storedLoans ? JSON.parse(storedLoans) : [];
    });
    const [loanFormValues, setLoanFormValues] = useState<Loan>({
        beneficiary: "",
        memo: "",
        loanDate: "",
        amount: "",
        address: "",
    });

    useEffect(() => {
        localStorage.setItem("loans", JSON.stringify(loanEntries));
    }, [loanEntries]);

    const handleLoanInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoanFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLoanUpdate = () => {
        if (loanFormValues.beneficiary.trim() && loanFormValues.amount.trim()) {
            const newLoanEntries = [...loanEntries, loanFormValues];
            setLoanEntries(newLoanEntries);

            setLoanFormValues({
                beneficiary: "",
                memo: "",
                loanDate: "",
                amount: "",
                address: "",
            });
        } else {
            alert("Beneficiary and Amount are required!");
        }
    };

    const handleDeleteLoan = (index: number) => {
        const updatedLoanEntries = loanEntries.filter((_, i) => i !== index);
        setLoanEntries(updatedLoanEntries);
    };

    return (
        <div className="flex flex-row w-full px-[36px] py-[40px] items-top justify-between">
            <div>
                <div className="w-[450px] h-[414px] flex items-center justify-center rounded-xl bg-[#FFFFFF] mb-7">
                    <Image width={323.24} height={414} src="/assets/images/zakatBox.png" alt="ZAKAT" className="w-[323.24px] h-[314px]" />
                </div>
                <RoundedTextField
                    name="nisab"
                    label="Nisab"
                    placeholder={formatPrice(nisab)}
                    control={methods.control}
                    disabled
                />
                <p className="pb-8">(As at {nisabDate})</p>
            </div>

            <div className="w-[446px]">
                <div className="pb-6">
                    <h2 className="text-[24px] font-[500] pb-4 text-[#000]">Cash</h2>

                    <Box sx={{
                        width: '430px',
                        backgroundColor: '#F0F0F0',
                        marginBottom: '40px',
                        color: '#272727',
                    }}>
                        <FormAccordion
                            disableGutters
                            expanded={expandedPanels['panel1']}
                            onChange={() => handleAccordionToggle('panel1')}
                        >
                            <FormAccordionSummary
                                expandIcon={!expandedPanels['panel1'] && <AddButton />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>Cash in hand</Typography>
                            </FormAccordionSummary>
                            <AccordionDetails sx={{
                                paddingX: '0px'
                            }}>
                                <Box sx={{
                                    paddingX: '15px',
                                    paddingY: '10px',
                                    paddingRight: '50px',
                                    border: '0px solid transparent',
                                    backgroundColor: '#F8F8F8',
                                    borderRadius: '16px',
                                    width: '446px',
                                    display: 'relative'
                                }}>
                                    <Image width={23} height={23} src="/assets/images/exit.png" alt="ZAKAT" className="absolute cursor-pointer w-[23px] h-[23px] right-0" onClick={() => handleAccordionToggle("panel1")} />
                                    {/* <RoundedTextField
                                            name="bank-name"
                                            label="Bank Name *"
                                            placeholder="Jonathan"
                                            control={methods.control}                                
                                            forminput
                                        ></RoundedTextField>
                                        <RoundedTextField
                                            name="description"
                                            label="Description"
                                            placeholder="Doe"
                                            control={methods.control}                                
                                            forminput
                                        ></RoundedTextField> */}
                                    {/* <div className="flex w-full justify-between">
                                            <div className="inline-block w-[179px]">
                                                <RoundedTextField
                                                    name="nisab"
                                                    label="Nisab"
                                                    placeholder="₦ 5,028,480.00"
                                                    control={methods.control}                                        
                                                    forminput
                                                    halfwidth
                                                ></RoundedTextField>
                                            </div>
                                            <div className="inline-block w-[179px]">
                                                <RoundedTextField
                                                    name="nisab"
                                                    label="Nisab"
                                                    placeholder="₦ 5,028,480.00"
                                                    control={methods.control}                                        
                                                    forminput
                                                    halfwidth
                                                ></RoundedTextField>
                                            </div>
                                        </div> */}
                                    <RoundedTextField
                                        name="amount"
                                        label="Amount"
                                        placeholder={formatPrice(5028480)}
                                        control={methods.control}
                                        rules={{
                                            required: "Amount is required",
                                            pattern: {
                                                value: /^[0-9]*$/,
                                                message: "Amount must be a number",
                                            },
                                        }}
                                        error={!/^\d*$/.test(cashFormValues.amount || "")}
                                        errorMessage="Amount must be a number"
                                        forminput
                                        value={cashFormValues.amount || ""}
                                        onChange={handleCashInputChange}
                                    ></RoundedTextField>
                                    <RButton style={{ display: 'block'}} onClick={handleCashUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {cashInHand.map((cash, index) => (
                                <ItemCard key={index} amount={Number(cash.amount)} onDelete={() => handleDeleteCash(index)} title="cash" />
                            ))}
                        </FormAccordion>

                        {/* CASH IN BANK */}
                        <FormAccordion
                            disableGutters
                            expanded={expandedPanels['panel2']}
                            onChange={() => handleAccordionToggle('panel2')}
                        >
                            <FormAccordionSummary
                                expandIcon={!expandedPanels['panel2'] && <AddButton />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography>Cash in bank</Typography>
                            </FormAccordionSummary>
                            <AccordionDetails sx={{
                                paddingX: '0px'
                            }}>
                                <Box sx={{
                                    paddingX: '15px',
                                    paddingY: '10px',
                                    paddingRight: '50px',
                                    border: '0px solid transparent',
                                    backgroundColor: '#F8F8F8',
                                    borderRadius: '16px',
                                    width: '446px',
                                    display: 'relative'
                                }}>
                                    <Image width={23} height={23} src="/assets/images/exit.png" alt="ZAKAT" className="absolute cursor-pointer w-[23px] h-[23px] right-0" onClick={() => handleAccordionToggle("panel2")} />
                                    <RoundedTextField
                                        name="bankName"
                                        label="Bank Name *"
                                        placeholder="Jonathan"
                                        control={methods.control}
                                        forminput
                                        value={cashInBankFormValues.bankName}
                                        onChange={handleCashInBankInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={cashInBankFormValues.description}
                                        onChange={handleCashInBankInputChange}
                                    ></RoundedTextField>
                                    <div className="flex w-full justify-between">
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="valueDate"
                                                label="Value Date"
                                                placeholder="dd/mm/yy"
                                                control={methods.control}
                                                forminput
                                                halfwidth
                                                value={cashInBankFormValues.valueDate}
                                                onChange={handleCashInBankInputChange}
                                            ></RoundedTextField>
                                        </div>
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="amount"
                                                label="Amount"
                                                placeholder="₦ 5,028,480.00"
                                                control={methods.control}
                                                rules={{
                                                    required: "Amount is required",
                                                    pattern: {
                                                        value: /^[0-9]*$/,
                                                        message: "Amount must be a number",
                                                    },
                                                }}
                                                error={!/^\d*$/.test(cashInBankFormValues.amount || "")}
                                                errorMessage="Amount must be a number"
                                                forminput
                                                halfwidth
                                                value={cashInBankFormValues.amount}
                                                onChange={handleCashInBankInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RoundedTextField
                                        name="bankBranch"
                                        label="Bank Branch"
                                        placeholder="Bank"
                                        control={methods.control}
                                        forminput
                                        value={cashInBankFormValues.bankBranch}
                                        onChange={handleCashInBankInputChange}
                                    ></RoundedTextField>
                                    <RButton style={{ display: 'block'}} onClick={handleCashInBankUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {cashInBankEntries.map((item, index) => (
                                <ItemCard key={index} amount={Number(item.amount)} onDelete={() => handleDeleteCashInBank(index)} title={item.bankName} />
                            ))}

                        </FormAccordion>


                        {/* DEPOSITS */}
                        <FormAccordion
                            disableGutters
                            expanded={expandedPanels['panel3']}
                            onChange={() => handleAccordionToggle('panel3')}
                        >
                            <FormAccordionSummary
                                expandIcon={!expandedPanels['panel3'] && <AddButton />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography sx={{ flexShrink: 0 }} component='div'>
                                    Deposit for some future purpose
                                    <p className="text-[12px]">(eg House, vehicle, Hajj etc)</p>

                                </Typography>
                            </FormAccordionSummary>
                            <AccordionDetails sx={{
                                paddingX: '0px'
                            }}>
                                <Box sx={{
                                    paddingX: '15px',
                                    paddingY: '10px',
                                    paddingRight: '50px',
                                    border: '0px solid transparent',
                                    backgroundColor: '#F8F8F8',
                                    borderRadius: '16px',
                                    width: '446px',
                                    display: 'relative'
                                }}>
                                    <Image width={23} height={23} src="/assets/images/exit.png" alt="ZAKAT" className="absolute cursor-pointer w-[23px] h-[23px] right-0" onClick={() => handleAccordionToggle("panel3")} />
                                    <RoundedTextField
                                        name="bankName"
                                        label="Bank Name *"
                                        placeholder="Jonathan"
                                        control={methods.control}
                                        forminput
                                        value={depositFormValues.bankName}
                                        onChange={handleDepositInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={depositFormValues.description}
                                        onChange={handleDepositInputChange}
                                    ></RoundedTextField>
                                    <div className="flex w-full justify-between">
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="deposit\date"
                                                label="Date Deposited"
                                                placeholder="dd/mm/yy"
                                                control={methods.control}
                                                forminput
                                                halfwidth
                                                value={depositFormValues.depositDate}
                                                onChange={handleDepositInputChange}
                                            ></RoundedTextField>
                                        </div>
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="amount"
                                                label="Amount"
                                                placeholder="₦ 5,028,480.00"
                                                control={methods.control}
                                                rules={{
                                                    required: "Amount is required",
                                                    pattern: {
                                                        value: /^[0-9]*$/,
                                                        message: "Amount must be a number",
                                                    },
                                                }}
                                                error={!/^\d*$/.test(depositFormValues.amount || "")}
                                        errorMessage="Amount must be a number"
                                                forminput
                                                halfwidth
                                                value={depositFormValues.amount}
                                                onChange={handleDepositInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RoundedTextField
                                        name="location"
                                        label="Location"
                                        placeholder="Location"
                                        control={methods.control}
                                        forminput
                                        value={depositFormValues.location}
                                        onChange={handleDepositInputChange}
                                    ></RoundedTextField>
                                    <RButton style={{ display: 'block'}} onClick={handleDepositUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {depositEntries.map((item, index) => (
                                <ItemCard key={index} amount={Number(item.amount)} onDelete={() => handleDeleteDeposit(index)} title={item.bankName} />
                            ))}
                        </FormAccordion>


                        {/* AMOUNTS GIVEN OUT AS LOAN */}
                        <FormAccordion
                            disableGutters
                            expanded={expandedPanels['panel4']}
                            onChange={() => handleAccordionToggle('panel4')}
                        >
                            <FormAccordionSummary
                                expandIcon={!expandedPanels['panel4'] && <AddButton />}
                                aria-controls="panel4-content"
                                id="panel4-header"
                            >
                                <Typography>Amounts given out as loans</Typography>
                            </FormAccordionSummary>
                            <AccordionDetails sx={{
                                paddingX: '0px'
                            }}>
                                <Box sx={{
                                    paddingX: '15px',
                                    paddingY: '10px',
                                    paddingRight: '50px',
                                    border: '0px solid transparent',
                                    backgroundColor: '#F8F8F8',
                                    borderRadius: '16px',
                                    width: '446px',
                                    display: 'relative'
                                }}>
                                    <Image width={23} height={23} src="/assets/images/exit.png" alt="ZAKAT" className="absolute cursor-pointer w-[23px] h-[23px] right-0" onClick={() => handleAccordionToggle("panel4")} />
                                    <RoundedTextField
                                        name="beneficiary"
                                        label="Beneficiary *"
                                        placeholder="Jonathan"
                                        control={methods.control}
                                        forminput
                                        value={loanFormValues.beneficiary}
                                        onChange={handleLoanInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="memo"
                                        label="Memo"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={loanFormValues.memo}
                                        onChange={handleLoanInputChange}
                                    ></RoundedTextField>
                                    <div className="flex w-full justify-between">
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="loanDate"
                                                label="Date of Loan"
                                                placeholder="dd/mm/yy"
                                                control={methods.control}
                                                forminput
                                                halfwidth
                                                value={loanFormValues.loanDate}
                                                onChange={handleLoanInputChange}
                                            ></RoundedTextField>
                                        </div>
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="amount"
                                                label="Amount"
                                                placeholder="₦ 5,028,480.00"
                                                control={methods.control}
                                                rules={{
                                                    required: "Amount is required",
                                                    pattern: {
                                                      value: /^[0-9]*$/,
                                                      message: "Amount must be a number",
                                                    },
                                                  }}
                                                error={!/^\d*$/.test(loanFormValues.amount || "")}
                                        errorMessage="Amount must be a number"
                                                forminput
                                                halfwidth
                                                value={loanFormValues.amount}
                                                onChange={handleLoanInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RoundedTextField
                                        name="address"
                                        label="Beneficiary's address"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={loanFormValues.address}
                                        onChange={handleLoanInputChange}
                                    ></RoundedTextField>
                                    <RButton style={{ display: 'block'}} onClick={handleLoanUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {loanEntries.map((item, index) => (
                                <ItemCard key={index} amount={Number(item.amount)} onDelete={() => handleDeleteLoan(index)} title={item.beneficiary} />
                            ))}

                        </FormAccordion>

                    </Box>

                    <div className="mr-5 inline">
                        <RButton onClick={handleBack} variant="outlined" mdWidth>Back</RButton>
                    </div>
                    <div className="inline">
                        <RButton onClick={handleNext} variant="contained" halfwidth>Continue</RButton>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ZakatCash;
