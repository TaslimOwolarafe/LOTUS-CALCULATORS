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

interface ZakatOtherProps {
    handleNext: () => void;
    handleBack: () => void;
    methods: UseFormReturn;
}

const ZakatOther: React.FC<ZakatOtherProps> = ({
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
            [panel]: !prev[panel], // Toggle the specific panel
        }));
    };


    // GOLD AND SILVER
    interface Asset {
        name: string;
        description: string;
        dateAcquired: string;
        value: string;
    }

    const [assetEntries, setAssetEntries] = useState<Asset[]>(() => {
        const storedAssets = localStorage.getItem("assets");
        return storedAssets ? JSON.parse(storedAssets) : [];
    });
    const [assetFormValues, setAssetFormValues] = useState<Asset>({
        name: "",
        description: "",
        dateAcquired: "",
        value: "",
    });

    useEffect(() => {
        localStorage.setItem("assets", JSON.stringify(assetEntries));
    }, [assetEntries]);

    const handleAssetInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAssetFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAssetUpdate = () => {
        if (assetFormValues.name.trim() && assetFormValues.value.trim()) {
            const newAssetEntries = [...assetEntries, assetFormValues];
            setAssetEntries(newAssetEntries);


            setAssetFormValues({
                name: "",
                description: "",
                dateAcquired: "",
                value: "",
            });
        } else {
            alert("Asset Name and Value are required!");
        }
    };

    const handleDeleteAsset = (index: number) => {
        const updatedAssetEntries = assetEntries.filter((_, i) => i !== index);
        setAssetEntries(updatedAssetEntries);
    };


    // TRADE INVENTORY
    interface TradeInventory {
        name: string;
        description: string;
        dateAcquired: string;
        value: string;
    }

    const [tradeInventoryEntries, setTradeInventoryEntries] = useState<TradeInventory[]>(() => {
        const storedInventory = localStorage.getItem("tradeInventory");
        return storedInventory ? JSON.parse(storedInventory) : [];
    });
    const [tradeInventoryFormValues, setTradeInventoryFormValues] = useState<TradeInventory>({
        name: "",
        description: "",
        dateAcquired: "",
        value: "",
    });

    useEffect(() => {
        localStorage.setItem("tradeInventory", JSON.stringify(tradeInventoryEntries));
    }, [tradeInventoryEntries]);

    const handleTradeInventoryInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTradeInventoryFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleTradeInventoryUpdate = () => {
        if (tradeInventoryFormValues.name.trim() && tradeInventoryFormValues.value.trim()) {
            const newEntries = [...tradeInventoryEntries, tradeInventoryFormValues];
            setTradeInventoryEntries(newEntries);


            setTradeInventoryFormValues({
                name: "",
                description: "",
                dateAcquired: "",
                value: "",
            });
        } else {
            alert("Asset Name and Value are required!");
        }
    };

    const handleDeleteTradeInventory = (index: number) => {
        const updatedEntries = tradeInventoryEntries.filter((_, i) => i !== index);
        setTradeInventoryEntries(updatedEntries);
    };


    // OTHERS
    interface OtherAssets {
        name: string;
        description: string;
        dateAcquired: string;
        value: string;
    }

    const [otherAssetsEntries, setOtherAssetsEntries] = useState<OtherAssets[]>(() => {
        const storedOtherAssets = localStorage.getItem("otherAssets");
        return storedOtherAssets ? JSON.parse(storedOtherAssets) : [];
    });

    const [otherAssetsFormValues, setOtherAssetsFormValues] = useState<OtherAssets>({
        name: "",
        description: "",
        dateAcquired: "",
        value: "",
    });

    useEffect(() => {
        localStorage.setItem("otherAssets", JSON.stringify(otherAssetsEntries));
    }, [otherAssetsEntries]);

    const handleOtherAssetsInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setOtherAssetsFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleOtherAssetsUpdate = () => {
        if (otherAssetsFormValues.name.trim() && otherAssetsFormValues.value.trim()) {
            const newEntries = [...otherAssetsEntries, otherAssetsFormValues];
            setOtherAssetsEntries(newEntries);


            setOtherAssetsFormValues({
                name: "",
                description: "",
                dateAcquired: "",
                value: "",
            });
        } else {
            alert("Asset Name and Value are required!");
        }
    };

    const handleDeleteOtherAsset = (index: number) => {
        const updatedEntries = otherAssetsEntries.filter((_, i) => i !== index);
        setOtherAssetsEntries(updatedEntries);
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
                    <h2 className="text-[24px] font-[500] pb-4 text-[#000]">Assets</h2>

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
                                <Typography>Gold and Silver</Typography>
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
                                        value={assetFormValues.name}
                                        onChange={handleAssetInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={assetFormValues.description}
                                        onChange={handleAssetInputChange}
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
                                                value={assetFormValues.dateAcquired}
                                                onChange={handleAssetInputChange}
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
                                                error={!/^\d*$/.test(assetFormValues.value || "")}
                                                errorMessage="Value must be a number"
                                                forminput
                                                halfwidth
                                                value={assetFormValues.value}
                                                onChange={handleAssetInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RButton style={{ display: 'block' }} onClick={handleAssetUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {assetEntries.map((item, index) => (
                                <ItemCard key={index} amount={Number(item.value)} onDelete={() => handleDeleteAsset(index)} title={item.name} />
                            ))}

                        </FormAccordion>


                        {/* TRADE INVENTORY */}
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
                                <Typography>Trade Inventory</Typography>
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
                                        value={tradeInventoryFormValues.name}
                                        onChange={handleTradeInventoryInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={tradeInventoryFormValues.description}
                                        onChange={handleTradeInventoryInputChange}
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
                                                value={tradeInventoryFormValues.dateAcquired}
                                                onChange={handleTradeInventoryInputChange}
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
                                                error={!/^\d*$/.test(tradeInventoryFormValues.value || "")}
                                                errorMessage="Value must be a number"
                                                forminput
                                                halfwidth
                                                value={tradeInventoryFormValues.value}
                                                onChange={handleTradeInventoryInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RButton style={{ display: 'block' }} onClick={handleTradeInventoryUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {tradeInventoryEntries.map((item, index) => (
                                <ItemCard key={index} amount={Number(item.value)} onDelete={() => handleDeleteTradeInventory(index)} title={item.name} />
                            ))}

                        </FormAccordion>


                        {/* OTHERS */}
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
                                    Others
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
                                        value={otherAssetsFormValues.name}
                                        onChange={handleOtherAssetsInputChange}
                                    ></RoundedTextField>
                                    <RoundedTextField
                                        name="description"
                                        label="Description"
                                        placeholder="Doe"
                                        control={methods.control}
                                        forminput
                                        value={otherAssetsFormValues.description}
                                        onChange={handleOtherAssetsInputChange}
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
                                                value={otherAssetsFormValues.dateAcquired}
                                                onChange={handleOtherAssetsInputChange}
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
                                                error={!/^\d*$/.test(otherAssetsFormValues.value || "")}
                                                errorMessage="Value must be a number"
                                                forminput
                                                halfwidth
                                                value={otherAssetsFormValues.value}
                                                onChange={handleOtherAssetsInputChange}
                                            ></RoundedTextField>
                                        </div>
                                    </div>
                                    <RButton style={{ display: 'block' }} onClick={handleOtherAssetsUpdate} variant="contained" mdWidth>Update</RButton>
                                </Box>
                            </AccordionDetails>
                            {otherAssetsEntries.map((item, index) => (
                                <ItemCard key={index} amount={Number(item.value)} onDelete={() => handleDeleteOtherAsset(index)} title={item.name} />
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

export default ZakatOther;
