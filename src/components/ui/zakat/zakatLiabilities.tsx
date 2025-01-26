import React, { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";

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

interface ZakatLiabilitiesProps {
    handleNext: () => void;
    handleBack: () => void;
    methods: UseFormReturn;
}

const ZakatLiabilities: React.FC<ZakatLiabilitiesProps> = ({
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


    // BORROWED MONEY
    interface BorrowedMoney {
        lenderName: string;
        description: string;
        valueDate: string;
        amount: string;
    }

    const [borrowedMoney, setBorrowedMoney] = useState<BorrowedMoney[]>(() => {
        const storedBorrowedMoney = localStorage.getItem("borrowedMoney");
        return storedBorrowedMoney ? JSON.parse(storedBorrowedMoney) : [];
    });
    const [borrowedMoneyFormValues, setBorrowedMoneyFormValues] = useState<BorrowedMoney>({
        lenderName: "",
        description: "",
        valueDate: "",
        amount: "",
    });

    useEffect(() => {
        localStorage.setItem("borrowedMoney", JSON.stringify(borrowedMoney));
    }, [borrowedMoney]);

    const handleBorrowedMoneyInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBorrowedMoneyFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleBorrowedMoneyUpdate = () => {
        if (borrowedMoneyFormValues.lenderName.trim() && borrowedMoneyFormValues.amount.trim()) {
            const newBorrowedMoneyEntries = [...borrowedMoney, borrowedMoneyFormValues];
            setBorrowedMoney(newBorrowedMoneyEntries);

            setBorrowedMoneyFormValues({
                lenderName: "",
                description: "",
                valueDate: "",
                amount: "",
            });
        } else {
            alert("Lender Name and Amount are required!");
        }
    };

    const handleDeleteBorrowedMoney = (index: number) => {
        const updatedBorrowedMoney = borrowedMoney.filter((_, i) => i !== index);
        setBorrowedMoney(updatedBorrowedMoney);
    };

    // GOODS BOUGHT ON CREDIT
    interface GoodsBoughtOnCredit {
        goodNames: string;
        description: string;
        dateBought: string;
        amount: string;
        store: string;
    }

    const [goods, setGoods] = useState<GoodsBoughtOnCredit[]>(() => {
        const storedGoods = localStorage.getItem("goodsBoughtOnCredit");
        return storedGoods ? JSON.parse(storedGoods) : [];
    });
    const [goodsFormValues, setGoodsFormValues] = useState<GoodsBoughtOnCredit>({
        goodNames: "",
        description: "",
        dateBought: "",
        amount: "",
        store: "",
    });

    useEffect(() => {
        localStorage.setItem("goodsBoughtOnCredit", JSON.stringify(goods));
    }, [goods]);

    const handleGoodsInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setGoodsFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleGoodsUpdate = () => {
        if (goodsFormValues.goodNames.trim() && goodsFormValues.amount.trim()) {
            const newGoodsEntries = [...goods, goodsFormValues];
            setGoods(newGoodsEntries);

            setGoodsFormValues({
                goodNames: "",
                description: "",
                dateBought: "",
                amount: "",
                store: "",
            });
        } else {
            alert("Name of Goods and Amount are required!");
        }
    };

    const handleDeleteGoods = (index: number) => {
        const updatedGoods = goods.filter((_, i) => i !== index);
        setGoods(updatedGoods);
    };


    // TAXES DUE
    interface TaxesDue {
        lenderName: string;
        description: string;
        valueDate: string;
        amount: string;
    }

    const [taxesDue, setTaxesDue] = useState<TaxesDue[]>(() => {
        const storedTaxes = localStorage.getItem('taxesDue');
        return storedTaxes ? JSON.parse(storedTaxes) : [];
    });
    const [taxesDueFormValues, setTaxesDueFormValues] = useState<TaxesDue>({
        lenderName: "",
        description: "",
        valueDate: "",
        amount: "",
    });

    useEffect(() => {
        localStorage.setItem("taxesDue", JSON.stringify(taxesDue));
    }, [taxesDue]);

    const handleTaxesDueInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTaxesDueFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // RENT DUE
    interface RentDue {
        liabilityName: string;
        description: string;
        dateAcquired: string;
        liabilityValue: string;
        liabilityLocation: string;
    }

    const [rentDue, setRentDue] = useState<RentDue[]>(() => {
        const storedRentDue = localStorage.getItem("rentDue");
        return storedRentDue ? JSON.parse(storedRentDue) : [];
    });
    const [rentDueFormValues, setRentDueFormValues] = useState<RentDue>({
        liabilityName: "",
        description: "",
        dateAcquired: "",
        liabilityValue: "",
        liabilityLocation: "",
    });

    useEffect(() => {
        localStorage.setItem("rentDue", JSON.stringify(rentDue));
    }, [rentDue]);

    const handleRentDueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRentDueFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRentDueUpdate = () => {
        if (rentDueFormValues.liabilityName.trim() && rentDueFormValues.liabilityValue.trim()) {
            const newRentDueEntries = [...rentDue, rentDueFormValues];
            setRentDue(newRentDueEntries);


            setRentDueFormValues({
                liabilityName: "",
                description: "",
                dateAcquired: "",
                liabilityValue: "",
                liabilityLocation: "",
            });
        } else {
            alert("Liability Name and Value are required!");
        }
    };

    const handleDeleteRentDue = (index: number) => {
        const updatedRentDue = rentDue.filter((_, i) => i !== index);
        setRentDue(updatedRentDue);
    };


    const handleAddTaxesDue = () => {
        if (taxesDueFormValues.lenderName.trim() && taxesDueFormValues.amount.trim()) {
            setTaxesDue((prev) => [...prev, taxesDueFormValues]);
            setTaxesDueFormValues({
                lenderName: "",
                description: "",
                valueDate: "",
                amount: "",
            });
        } else {
            alert("Lender Name and Amount are required!");
        }
    };

    const handleDeleteTaxesDue = (index: number) => {
        setTaxesDue((prev) => prev.filter((_, i) => i !== index));
    };


    // OTHER BILLS
    interface OtherBill {
        liabilityName: string;
        description: string;
        dateAcquired: string;
        liabilityValue: string;
        liabilityLocation: string;
    }

    const [otherBills, setOtherBills] = useState<OtherBill[]>(() => {
        const storedOtherBills = localStorage.getItem("otherBills");
        return storedOtherBills ? JSON.parse(storedOtherBills) : [];
    });

    const [otherBillsFormValues, setOtherBillsFormValues] = useState<OtherBill>({
        liabilityName: "",
        description: "",
        dateAcquired: "",
        liabilityValue: "",
        liabilityLocation: "",
    });

    useEffect(() => {
        localStorage.setItem("otherBills", JSON.stringify(otherBills));
    }, [otherBills]);

    const handleOtherBillsInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setOtherBillsFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleOtherBillsUpdate = () => {
        if (otherBillsFormValues.liabilityName.trim() && otherBillsFormValues.liabilityValue.trim()) {
            const newOtherBillsEntries = [...otherBills, otherBillsFormValues];
            setOtherBills(newOtherBillsEntries);


            setOtherBillsFormValues({
                liabilityName: "",
                description: "",
                dateAcquired: "",
                liabilityValue: "",
                liabilityLocation: "",
            });
        } else {
            alert("Liability Name and Value are required!");
        }
    };

    const handleDeleteOtherBill = (index: number) => {
        const updatedOtherBills = otherBills.filter((_, i) => i !== index);
        setOtherBills(updatedOtherBills);
    };


    return (
        <div className="flex flex-row w-full px-[36px] py-[40px] items-top justify-between">
            <div>
                <div className="w-[450px] h-[414px] flex items-center justify-center rounded-xl bg-[#FFFFFF] mb-7">
                    <Image width={323.34} height={314} src="/assets/images/zakatBox.png" alt="ZAKAT" className="w-[323.24px] h-[314px]" />
                </div>
            </div>

            <div className="w-[446px]">
                <div className="pb-6">
                    <h2 className="text-[24px] font-[500] pb-4 text-[#000]">Liabilities</h2>

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
                                <Typography>Borrowed money</Typography>
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
                                    <Image width={23} height={23}
                                        src="/assets/images/exit.png"
                                        alt="Close"
                                        className="absolute cursor-pointer w-[23px] h-[23px] right-3"
                                        onClick={() => handleAccordionToggle("panel1")}
                                    />
                                    <RoundedTextField
                                        name="lenderName"
                                        label="Lender Name *"
                                        placeholder="Jonathan"
                                        control={methods.control}
                                        forminput
                                        value={borrowedMoneyFormValues.lenderName}
                                        onChange={handleBorrowedMoneyInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={borrowedMoneyFormValues.description}
                                        onChange={handleBorrowedMoneyInputChange}
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
                                                value={borrowedMoneyFormValues.valueDate}
                                                onChange={handleBorrowedMoneyInputChange}
                                            ></RoundedTextField>
                                        </div>
                                        <div className="inline-block w-[179px]">
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
                                                error={!/^\d*$/.test(borrowedMoneyFormValues.amount || "")}
                                                errorMessage="Amount must be a number"
                                                forminput
                                                halfwidth
                                                value={borrowedMoneyFormValues.amount}
                                                onChange={handleBorrowedMoneyInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RButton style={{ display: 'block' }} onClick={handleBorrowedMoneyUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {borrowedMoney.map((entry, index) => (
                                <ItemCard key={index} amount={Number(entry.amount)} onDelete={() => handleDeleteBorrowedMoney(index)} title={entry.lenderName} />
                            ))}
                        </FormAccordion>

                        {/* GOODS BOUGHT ON CREDIT */}
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
                                <Typography>Goods bought on credit</Typography>
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
                                    <Image width={23} height={23} src="/assets/images/exit.png" alt="ZAKAT" className="absolute cursor-pointer w-[23px] h-[23px] right-3" onClick={() => handleAccordionToggle("panel2")} />
                                    <RoundedTextField
                                        name="goodNames"
                                        label="Name of Goods *"
                                        placeholder="Jonathan"
                                        control={methods.control}
                                        forminput
                                        value={goodsFormValues.goodNames}
                                        onChange={handleGoodsInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={goodsFormValues.description}
                                        onChange={handleGoodsInputChange}
                                    ></RoundedTextField>
                                    <div className="flex w-full justify-between">
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="dateBought"
                                                label="Date bought"
                                                placeholder="dd/mm/yy"
                                                control={methods.control}
                                                forminput
                                                halfwidth
                                                value={goodsFormValues.dateBought}
                                                onChange={handleGoodsInputChange}
                                            ></RoundedTextField>
                                        </div>
                                        <div className="inline-block w-[179px]">
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
                                                error={!/^\d*$/.test(goodsFormValues.amount || "")}
                                                errorMessage="Amount must be a number"
                                                forminput
                                                halfwidth
                                                value={goodsFormValues.amount}
                                                onChange={handleGoodsInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RoundedTextField
                                        name="store"
                                        label="Store"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={goodsFormValues.store}
                                        onChange={handleGoodsInputChange}
                                    ></RoundedTextField>
                                    <RButton style={{ display: 'block' }} onClick={handleGoodsUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {goods.map((item, index) => (
                                <ItemCard key={index} amount={Number(item.amount)} onDelete={() => handleDeleteGoods(index)} title={item.goodNames} />
                            ))}
                        </FormAccordion>

                        {/* TAXES DUE */}
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
                                <Typography sx={{ flexShrink: 0 }}>
                                    Taxes Due
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
                                    <Image width={23} height={23} src="/assets/images/exit.png" alt="ZAKAT" className="absolute cursor-pointer w-[23px] h-[23px] right-3" onClick={() => handleAccordionToggle("panel3")} />
                                    <RoundedTextField
                                        name="lenderName"
                                        label="Lender Name *"
                                        placeholder="Jonathan"
                                        control={methods.control}
                                        forminput
                                        value={taxesDueFormValues.lenderName}
                                        onChange={handleTaxesDueInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={taxesDueFormValues.description}
                                        onChange={handleTaxesDueInputChange}
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
                                                value={taxesDueFormValues.valueDate}
                                                onChange={handleTaxesDueInputChange}
                                            ></RoundedTextField>
                                        </div>
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="amount"
                                                label="Amount"
                                                placeholder={formatPrice(5028480)}
                                                control={methods.control}
                                                forminput
                                                halfwidth
                                                value={taxesDueFormValues.amount}
                                                onChange={handleTaxesDueInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RButton style={{ display: 'block' }} onClick={handleAddTaxesDue} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {taxesDue.map((tax, index) => (
                                <ItemCard key={index} amount={Number(tax.amount)} onDelete={() => handleDeleteTaxesDue(index)} title={tax.lenderName} />
                            ))}
                        </FormAccordion>

                        {/* RENT DUE */}
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
                                <Typography>Rent Due</Typography>
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
                                    <Image width={23} height={23} src="/assets/images/exit.png" alt="ZAKAT" className="absolute cursor-pointer w-[23px] h-[23px] right-3" onClick={() => handleAccordionToggle("panel4")} />
                                    <RoundedTextField
                                        name="liabilityName"
                                        label="Liability Name *"
                                        placeholder="Jonathan"
                                        control={methods.control}
                                        forminput
                                        value={rentDueFormValues.liabilityName}
                                        onChange={handleRentDueInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={rentDueFormValues.description}
                                        onChange={handleRentDueInputChange}
                                    ></RoundedTextField>
                                    <div className="flex w-full justify-between">
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="dateAcquired"
                                                label="Date Acquired"
                                                placeholder="dd/mm/yy"
                                                control={methods.control}
                                                forminput
                                                halfwidth
                                                value={rentDueFormValues.dateAcquired}
                                                onChange={handleRentDueInputChange}
                                            ></RoundedTextField>
                                        </div>
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="liabilityValue"
                                                label="Valuie of Liability"
                                                placeholder={formatPrice(5028480)}
                                                control={methods.control}
                                                rules={{
                                                    required: "Value is required",
                                                    pattern: {
                                                        value: /^[0-9]*$/,
                                                        message: "Value must be a number",
                                                    },
                                                }}
                                                error={!/^\d*$/.test(rentDueFormValues.liabilityValue || "")}
                                                errorMessage="Value must be a number"
                                                forminput
                                                halfwidth
                                                value={rentDueFormValues.liabilityValue}
                                                onChange={handleRentDueInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RoundedTextField
                                        name="liabilityLocation"
                                        label="Liability Location"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={rentDueFormValues.liabilityLocation}
                                        onChange={handleRentDueInputChange}
                                    ></RoundedTextField>
                                    <RButton style={{ display: 'block' }} onClick={handleRentDueUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {rentDue.map((item, index) => (
                                <ItemCard key={index} amount={Number(item.liabilityValue)} onDelete={() => handleDeleteRentDue(index)} title={item.liabilityName} />
                            ))}
                        </FormAccordion>

                        {/* OTHER BILLS */}
                        <FormAccordion
                            disableGutters
                            expanded={expandedPanels['panel5']}
                            onChange={() => handleAccordionToggle('panel5')}
                        >
                            <FormAccordionSummary
                                expandIcon={!expandedPanels['panel5'] && <AddButton />}
                                aria-controls="panel5-content"
                                id="panel5-header"
                            >
                                <Typography component='div'>
                                    Other bills
                                    <p className="text-[12px]">(For services rendered due immediately)</p>
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
                                    <Image width={23} height={23} src="/assets/images/exit.png" alt="ZAKAT" className="absolute cursor-pointer w-[23px] h-[23px] right-3" onClick={() => handleAccordionToggle("panel4")} />
                                    <RoundedTextField
                                        name="liabilityName"
                                        label="Liability Name *"
                                        placeholder="Jonathan"
                                        control={methods.control}
                                        forminput
                                        value={otherBillsFormValues.liabilityName}
                                        onChange={handleOtherBillsInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={otherBillsFormValues.description}
                                        onChange={handleOtherBillsInputChange}
                                    ></RoundedTextField>
                                    <div className="flex w-full justify-between">
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="dateAcquired"
                                                label="Date Acquired"
                                                placeholder="dd/mm/yy"
                                                control={methods.control}
                                                forminput
                                                halfwidth
                                                value={otherBillsFormValues.dateAcquired}
                                                onChange={handleOtherBillsInputChange}
                                            ></RoundedTextField>
                                        </div>
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="liabilityValue"
                                                label="Valuie of Liability"
                                                placeholder={formatPrice(5028480)}
                                                control={methods.control}
                                                rules={{
                                                    required: "Value is required",
                                                    pattern: {
                                                        value: /^[0-9]*$/,
                                                        message: "Value must be a number",
                                                    },
                                                }}
                                                error={!/^\d*$/.test(otherBillsFormValues.liabilityValue || "")}
                                                errorMessage="Value must be a number"
                                                forminput
                                                halfwidth
                                                value={otherBillsFormValues.liabilityValue}
                                                onChange={handleOtherBillsInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RoundedTextField
                                        name="liabilityLocation"
                                        label="Liability Location"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={otherBillsFormValues.liabilityLocation}
                                        onChange={handleOtherBillsInputChange}
                                    ></RoundedTextField>
                                    <RButton style={{ display: 'block' }} onClick={handleOtherBillsUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {otherBills.map((item, index) => (
                                <ItemCard key={index} amount={Number(item.liabilityValue)} onDelete={() => handleDeleteOtherBill(index)} title={item.liabilityName} />
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

export default ZakatLiabilities;
