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
import { formatPrice } from "@/utils/formatPrice";
import ItemCard from "../item";

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

interface ZakatInvestmentProps {
    handleNext: () => void;
    handleBack: () => void;
    methods: UseFormReturn;
}

interface Share {
    name: string;
    description: string;
    date: string;
    value: string;
    location: string;
}

const ZakatInvestment: React.FC<ZakatInvestmentProps> = ({
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


    // shares form
    const [shares, setShares] = useState<Share[]>(() => {
        const storedShares = localStorage.getItem("shares");
        return storedShares ? JSON.parse(storedShares) : [];
    });
    const [sharesFormValues, setsharesFormValues] = useState<Share>({
        name: "",
        description: "",
        date: "",
        value: "",
        location: "",
    });

    useEffect(() => {
        localStorage.setItem("shares", JSON.stringify(shares));
    }, [shares]);

    const handleSharesInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(e.target.name)
        console.log(name, value)
        setsharesFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSharesUpdate = () => {
        if (sharesFormValues.name.trim() && sharesFormValues.value.trim()) {
            const newShares = [...shares, sharesFormValues];
            setShares(newShares);

            setsharesFormValues({
                name: "",
                description: "",
                date: "",
                value: "",
                location: "",
            });
        } else {
            alert("Asset Name and Value are required!");
        }
    };

    const handleDeleteShare = (index: number) => {
        const updatedShares = shares.filter((_, i) => i !== index);
        setShares(updatedShares);
    };


    // pension form
    interface Pension {
        name: string;
        description: string;
        date: string;
        value: string;
        location: string;
    }

    const [pensions, setPensions] = useState<Pension[]>(() => {
        const storedPensions = localStorage.getItem("pensions");
        return storedPensions ? JSON.parse(storedPensions) : [];
    });
    const [pensionsFormValues, setPensionsFormValues] = useState<Pension>({
        name: "",
        description: "",
        date: "",
        value: "",
        location: "",
    });

    useEffect(() => {
        localStorage.setItem("pensions", JSON.stringify(pensions));
    }, [pensions]);

    const handlePensionsInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPensionsFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePensionsUpdate = () => {
        if (pensionsFormValues.name.trim() && pensionsFormValues.value.trim()) {
            const newPensions = [...pensions, pensionsFormValues];
            setPensions(newPensions);


            setPensionsFormValues({
                name: "",
                description: "",
                date: "",
                value: "",
                location: "",
            });
        } else {
            alert("Asset Name and Value are required!");
        }
    };

    const handleDeletePension = (index: number) => {
        const updatedPensions = pensions.filter((_, i) => i !== index);
        setPensions(updatedPensions);
    };


    // MUTUAL FUNDS
    interface MutualFund {
        name: string;
        description: string;
        date: string;
        value: string;
        location: string;
    }

    const [mutualFunds, setMutualFunds] = useState<MutualFund[]>(() => {
        const storedMutualFunds = localStorage.getItem("mutualFunds");
        return storedMutualFunds ? JSON.parse(storedMutualFunds) : [];
    });
    const [mutualFundsFormValues, setMutualFundsFormValues] = useState<MutualFund>({
        name: "",
        description: "",
        date: "",
        value: "",
        location: "",
    });

    useEffect(() => {
        localStorage.setItem("mutualFunds", JSON.stringify(mutualFunds));
    }, [mutualFunds]);

    const handleMutualFundsInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMutualFundsFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleMutualFundsUpdate = () => {
        if (
            mutualFundsFormValues.name.trim() &&
            mutualFundsFormValues.value.trim()
        ) {
            const newMutualFunds = [...mutualFunds, mutualFundsFormValues];
            setMutualFunds(newMutualFunds);

            setMutualFundsFormValues({
                name: "",
                description: "",
                date: "",
                value: "",
                location: "",
            });
        } else {
            alert("Asset Name and Value are required!");
        }
    };

    const handleDeleteMutualFund = (index: number) => {
        const updatedMutualFunds = mutualFunds.filter((_, i) => i !== index);
        setMutualFunds(updatedMutualFunds);
    };

    // Other Investments
    interface OtherInvestment {
        name: string;
        description: string;
        date: string;
        value: string;
        location: string;
    }

    const [otherInvestments, setOtherInvestments] = useState<OtherInvestment[]>(() => {
        const storedOtherInvestments = localStorage.getItem("otherInvestments");
        return storedOtherInvestments ? JSON.parse(storedOtherInvestments) : [];
    });
    const [otherInvestmentFormValues, setOtherInvestmentFormValues] = useState<OtherInvestment>({
        name: "",
        description: "",
        date: "",
        value: "",
        location: "",
    });

    useEffect(() => {
        localStorage.setItem("otherInvestments", JSON.stringify(otherInvestments));
    }, [otherInvestments]);

    const handleOtherInvestmentInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setOtherInvestmentFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleOtherInvestmentUpdate = () => {
        if (
            otherInvestmentFormValues.name.trim() &&
            otherInvestmentFormValues.value.trim()
        ) {
            const newOtherInvestments = [
                ...otherInvestments,
                otherInvestmentFormValues,
            ];
            setOtherInvestments(newOtherInvestments);

            setOtherInvestmentFormValues({
                name: "",
                description: "",
                date: "",
                value: "",
                location: "",
            });
        } else {
            alert("Asset Name and Value are required!");
        }
    };

    const handleDeleteOtherInvestment = (index: number) => {
        const updatedOtherInvestments = otherInvestments.filter((_, i) => i !== index);
        setOtherInvestments(updatedOtherInvestments);
    };


    //   Real Estate
    interface RealEstateProperty {
        name: string;
        description: string;
        date: string;
        value: string;
        location: string;
    }

    const [realEstateProperties, setRealEstateProperties] = useState<RealEstateProperty[]>(() => {
        const storedProperties = localStorage.getItem("realEstateProperties");
        return storedProperties ? JSON.parse(storedProperties) : [];
    });
    const [realEstateFormValues, setRealEstateFormValues] = useState<RealEstateProperty>({
        name: "",
        description: "",
        date: "",
        value: "",
        location: "",
    });

    useEffect(() => {
        localStorage.setItem("realEstateProperties", JSON.stringify(realEstateProperties));
    }, [realEstateProperties]);

    const handleRealEstateInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRealEstateFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRealEstateUpdate = () => {
        if (realEstateFormValues.name.trim() && realEstateFormValues.value.trim()) {
            const newProperties = [...realEstateProperties, realEstateFormValues];
            setRealEstateProperties(newProperties);

            setRealEstateFormValues({
                name: "",
                description: "",
                date: "",
                value: "",
                location: "",
            });
        } else {
            alert("Property Name and Value are required!");
        }
    };

    const handleDeleteRealEstateProperty = (index: number) => {
        const updatedProperties = realEstateProperties.filter((_, i) => i !== index);
        setRealEstateProperties(updatedProperties);
    };

    return (
        <div className="flex flex-row w-full px-[36px] py-[40px] items-top justify-between">
            <div>
                <div className="w-[450px] h-[414px] flex items-center justify-center rounded-xl bg-[#FFFFFF] mb-7">
                    <Image width={323.24} height={314} src="/assets/images/zakatBox.png" alt="ZAKAT" className="w-[323.24px] h-[314px]" />
                </div>
            </div>

            <div className="w-[446px]">
                <div className="pb-6">
                    <h2 className="text-[24px] font-[500] pb-4 text-[#000]">Investments</h2>

                    <Box sx={{
                        width: '430px',
                        backgroundColor: '#F0F0F0',
                        marginBottom: '40px',
                        color: '#272727',
                    }}>

                        {/* SHARES */}
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
                                <Typography>Total value of Shares</Typography>
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
                                    <RoundedTextField
                                        name="name"
                                        label="Asset Name *"
                                        placeholder="Jonathan"
                                        control={methods.control}
                                        forminput
                                        value={sharesFormValues.name || ""}
                                        onChange={handleSharesInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={sharesFormValues.description || ""}
                                        onChange={handleSharesInputChange}
                                    ></RoundedTextField>
                                    <div className="flex w-full justify-between">
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="date"
                                                label="Date Acquired"
                                                placeholder="₦ 5,028,480.00"
                                                control={methods.control}
                                                forminput
                                                halfwidth
                                                value={sharesFormValues.date || ""}
                                                onChange={handleSharesInputChange}
                                            ></RoundedTextField>
                                        </div>
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="value"
                                                label="Value of asset"
                                                placeholder={formatPrice(5028480)}
                                                control={methods.control}
                                                rules={{
                                                    required: "Amount is required",
                                                    pattern: {
                                                        value: /^[0-9]*$/,
                                                        message: "Amount must be a number",
                                                    },
                                                }}
                                                error={!/^\d*$/.test(sharesFormValues.value || "")}
                                                errorMessage="Amount must be a number"
                                                forminput
                                                halfwidth
                                                value={sharesFormValues.value || ""}
                                                onChange={handleSharesInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RoundedTextField
                                        name="location"
                                        label="Asset Location"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={sharesFormValues.location || ""}
                                        onChange={handleSharesInputChange}
                                    ></RoundedTextField>
                                    <RButton style={{ display: 'block' }} onClick={handleSharesUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            <Box>
                                {shares.map((share, index) => (
                                    <ItemCard key={index} amount={Number(share.value)} onDelete={() => handleDeleteShare(index)} title={share.name} />
                                ))}
                            </Box>
                        </FormAccordion>

                        {/* PENSIONS */}
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
                                <Typography>Pensions</Typography>
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
                                        name="name"
                                        label="Asset Name *"
                                        placeholder="Jonathan"
                                        control={methods.control}
                                        forminput
                                        value={pensionsFormValues.name || ""}
                                        onChange={handlePensionsInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={pensionsFormValues.description || ""}
                                        onChange={handlePensionsInputChange}
                                    ></RoundedTextField>
                                    <div className="flex w-full justify-between">
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="date"
                                                label="Date Acquired"
                                                placeholder="mm/dd/yy"
                                                control={methods.control}
                                                forminput
                                                halfwidth
                                                value={pensionsFormValues.date || ""}
                                                onChange={handlePensionsInputChange}
                                            ></RoundedTextField>
                                        </div>
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="value"
                                                label="Value of asset"
                                                placeholder={formatPrice(5028480)}
                                                control={methods.control}
                                                rules={{
                                                    required: "Value is required",
                                                    pattern: {
                                                        value: /^[0-9]*$/,
                                                        message: "Value must be a number",
                                                    },
                                                }}
                                                error={!/^\d*$/.test(sharesFormValues.value || "")}
                                                errorMessage="Value must be a number"
                                                forminput
                                                halfwidth
                                                value={pensionsFormValues.value || ""}
                                                onChange={handlePensionsInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RoundedTextField
                                        name="location"
                                        label="Asset Location"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                    ></RoundedTextField>
                                    <RButton style={{ display: 'block' }} onClick={handlePensionsUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {pensions.map((pension, index) => (
                                <ItemCard key={index} amount={Number(pension.value)} onDelete={() => handleDeletePension(index)} title={pension.name} />
                            ))}
                        </FormAccordion>

                        {/* MUTUAL FUNDS */}
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
                                    Mutual Funds
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
                                        name="name"
                                        label="Asset Name *"
                                        placeholder="Jonathan"
                                        control={methods.control}
                                        forminput
                                        value={mutualFundsFormValues.name || ""}
                                        onChange={handleMutualFundsInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={mutualFundsFormValues.description || ""}
                                        onChange={handleMutualFundsInputChange}
                                    ></RoundedTextField>
                                    <div className="flex w-full justify-between">
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="date"
                                                label="Date Acquired"
                                                placeholder="dd/mm/yy"
                                                control={methods.control}
                                                forminput
                                                halfwidth
                                                value={mutualFundsFormValues.date || ""}
                                                onChange={handleMutualFundsInputChange}
                                            ></RoundedTextField>
                                        </div>
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="value"
                                                label="Value of asset"
                                                placeholder={formatPrice(5028480)}
                                                control={methods.control}
                                                rules={{
                                                    required: "Value is required",
                                                    pattern: {
                                                        value: /^[0-9]*$/,
                                                        message: "Value must be a number",
                                                    },
                                                }}
                                                error={!/^\d*$/.test(sharesFormValues.value || "")}
                                                errorMessage="Value must be a number"
                                                forminput
                                                halfwidth
                                                value={mutualFundsFormValues.value || ""}
                                                onChange={handleMutualFundsInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RoundedTextField
                                        name="location"
                                        label="Asset Location"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={mutualFundsFormValues.location || ""}
                                        onChange={handleMutualFundsInputChange}
                                    ></RoundedTextField>
                                    <RButton style={{ display: 'block' }} onClick={handleMutualFundsUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {mutualFunds.map((fund, index) => (
                                <ItemCard key={index} amount={Number(fund.value)} onDelete={() => handleDeleteMutualFund(index)} title={fund.name} />
                            ))}
                        </FormAccordion>

                        {/* Other Cash Investments/Savings Plan */}
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
                                <Typography>Other cash investments/savings plans</Typography>
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
                                        name="name"
                                        label="Asset Name *"
                                        placeholder="Jonathan"
                                        control={methods.control}
                                        forminput
                                        value={otherInvestmentFormValues.name || ""}
                                        onChange={handleOtherInvestmentInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={otherInvestmentFormValues.description || ""}
                                        onChange={handleOtherInvestmentInputChange}
                                    ></RoundedTextField>
                                    <div className="flex w-full justify-between">
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="date"
                                                label="Date Acquired"
                                                placeholder="dd/mm/yy"
                                                control={methods.control}
                                                forminput
                                                halfwidth
                                                value={otherInvestmentFormValues.date || ""}
                                                onChange={handleOtherInvestmentInputChange}
                                            ></RoundedTextField>
                                        </div>
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="value"
                                                label="Value of asset"
                                                placeholder={formatPrice(5028480)}
                                                control={methods.control}
                                                rules={{
                                                    required: "Value is required",
                                                    pattern: {
                                                        value: /^[0-9]*$/,
                                                        message: "Value must be a number",
                                                    },
                                                }}
                                                error={!/^\d*$/.test(sharesFormValues.value || "")}
                                                errorMessage="Value must be a number"
                                                forminput
                                                halfwidth
                                                value={otherInvestmentFormValues.value || ""}
                                                onChange={handleOtherInvestmentInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RoundedTextField
                                        name="location"
                                        label="Asset Location"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={otherInvestmentFormValues.location || ""}
                                        onChange={handleOtherInvestmentInputChange}
                                    ></RoundedTextField>
                                    <RButton style={{ display: 'block' }} onClick={handleOtherInvestmentUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {otherInvestments.map((other, index) => (
                                <ItemCard key={index} amount={Number(other.value)} onDelete={() => handleDeleteOtherInvestment(index)} title={other.name} />
                            ))}
                        </FormAccordion>

                        {/* Real Estate Properties for rent ot sale. */}
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
                                <Typography>Real Estate Properties for rent/sale</Typography>
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
                                    <Image width={23} height={23} src="/assets/images/exit.png" alt="ZAKAT" className="absolute cursor-pointer w-[23px] h-[23px] right-0" onClick={() => handleAccordionToggle("panel5")} />
                                    <RoundedTextField
                                        name="name"
                                        label="Asset Name *"
                                        placeholder="Jonathan"
                                        control={methods.control}
                                        forminput
                                        value={realEstateFormValues.name || ""}
                                        onChange={handleRealEstateInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={realEstateFormValues.description || ""}
                                        onChange={handleRealEstateInputChange}
                                    ></RoundedTextField>
                                    <div className="flex w-full justify-between">
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="date"
                                                label="Date Acquired"
                                                placeholder="dd/mm/yy"
                                                control={methods.control}
                                                forminput
                                                halfwidth
                                                value={realEstateFormValues.date || ""}
                                                onChange={handleRealEstateInputChange}
                                            ></RoundedTextField>
                                        </div>
                                        <div className="inline-block w-[179px]">
                                            <RoundedTextField
                                                name="value"
                                                label="Value of asset"
                                                placeholder={formatPrice(5028480)}
                                                control={methods.control}
                                                rules={{
                                                    required: "Value is required",
                                                    pattern: {
                                                        value: /^[0-9]*$/,
                                                        message: "Value must be a number",
                                                    },
                                                }}
                                                error={!/^\d*$/.test(sharesFormValues.value || "")}
                                                errorMessage="Value must be a number"
                                                forminput
                                                halfwidth
                                                value={realEstateFormValues.value || ""}
                                                onChange={handleRealEstateInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RoundedTextField
                                        name="location"
                                        label="Asset Location"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={realEstateFormValues.location || ""}
                                        onChange={handleRealEstateInputChange}
                                    ></RoundedTextField>
                                    <RButton onClick={handleRealEstateUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {realEstateProperties.map((properties, index) => (
                                <ItemCard key={index} amount={Number(properties.value)} onDelete={() => handleDeleteRealEstateProperty(index)} title={properties.name} />
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

export default ZakatInvestment;
