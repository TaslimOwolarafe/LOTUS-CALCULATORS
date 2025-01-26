import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RButton } from '../../nav/Button';
import { UseFormReturn } from "react-hook-form";
import { Divider } from "@mui/material";
import InfoCard from "../infoCard";
import ListItem from "../listItem";
import { formatDateTime } from "@/utils/dateUtil";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { formatPrice } from "@/utils/formatPrice";


interface ZakatResultsProps {
    handleNext: () => void;
    handleBack: () => void;
    handleReset: () => void;
    methods: UseFormReturn;
}

const nisab = Number(process.env.NISAB) || 11810080;

const ZakatResults: React.FC<ZakatResultsProps> = ({
    handleBack,
    handleReset,
}) => {
    const [currentDateTime, setCurrentDateTime] = useState(formatDateTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(formatDateTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const getTotalAmount = (data: { amount: string }[]): number => {
        return data.reduce((total, item) => total + parseFloat(item.amount || "0"), 0);
    };

    const getTotalCashInHand = (): number => {
        const storedCashInHand = localStorage.getItem("cashInHand");
        const cashInHand = storedCashInHand ? JSON.parse(storedCashInHand) : [];
        return getTotalAmount(cashInHand);
    };

    const getTotalCashInBank = (): number => {
        const storedCashInBank = localStorage.getItem("cashInBank");
        const cashInBank = storedCashInBank ? JSON.parse(storedCashInBank) : [];
        return getTotalAmount(cashInBank);
    };

    const getTotalDeposits = (): number => {
        const storedDeposits = localStorage.getItem("deposits");
        const deposits = storedDeposits ? JSON.parse(storedDeposits) : [];
        return getTotalAmount(deposits);
    };

    const getTotalLoans = (): number => {
        const storedLoans = localStorage.getItem("loans");
        const loans = storedLoans ? JSON.parse(storedLoans) : [];
        return getTotalAmount(loans);
    };

    const totalCashInHand = getTotalCashInHand();
    const totalCashInBank = getTotalCashInBank();
    const totalDeposits = getTotalDeposits();
    const totalLoans = getTotalLoans();

    // INVESTMENTS
    const getTotalInvestmentValue = (investments: { value: string }[]): number => {
        return investments.reduce((total, investment) => total + parseFloat(investment.value || "0"), 0);
    };

    const getTotalShares = (): number => {
        const storedShares = localStorage.getItem("shares");
        const shares = storedShares ? JSON.parse(storedShares) : [];
        return getTotalInvestmentValue(shares);
    };

    const getTotalPensions = (): number => {
        const storedPensions = localStorage.getItem("pensions");
        const pensions = storedPensions ? JSON.parse(storedPensions) : [];
        return getTotalInvestmentValue(pensions);
    };

    const getTotalMutualFunds = (): number => {
        const storedMutualFunds = localStorage.getItem("mutualFunds");
        const mutualFunds = storedMutualFunds ? JSON.parse(storedMutualFunds) : [];
        return getTotalInvestmentValue(mutualFunds);
    };

    const getTotalOtherInvestments = (): number => {
        const storedOtherInvestments = localStorage.getItem("otherInvestments");
        const otherInvestments = storedOtherInvestments ? JSON.parse(storedOtherInvestments) : [];
        return getTotalInvestmentValue(otherInvestments);
    };

    const getTotalRealEstate = (): number => {
        const storedRealEstateProperties = localStorage.getItem("realEstateProperties");
        const realEstateProperties = storedRealEstateProperties ? JSON.parse(storedRealEstateProperties) : [];
        return getTotalInvestmentValue(realEstateProperties);
    };

    const totalShares = getTotalShares();
    const totalPensions = getTotalPensions();
    const totalMutualFunds = getTotalMutualFunds();
    const totalOtherInvestments = getTotalOtherInvestments();
    const totalRealEstate = getTotalRealEstate();


    //   OTHER ASSETS
    const getTotalAssetValue = (assets: { value: string }[]): number => {
        return assets.reduce((total, asset) => total + parseFloat(asset.value || "0"), 0);
    };

    const getTotalGoldAndSilver = (): number => {
        const storedAssets = localStorage.getItem("assets");
        const assets = storedAssets ? JSON.parse(storedAssets) : [];
        return getTotalAssetValue(assets);
    };

    const getTotalTradeInventory = (): number => {
        const storedTradeInventory = localStorage.getItem("tradeInventory");
        const tradeInventory = storedTradeInventory ? JSON.parse(storedTradeInventory) : [];
        return getTotalAssetValue(tradeInventory);
    };

    const getTotalOtherAssets = (): number => {
        const storedOtherAssets = localStorage.getItem("otherAssets");
        const otherAssets = storedOtherAssets ? JSON.parse(storedOtherAssets) : [];
        return getTotalAssetValue(otherAssets);
    };

    const totalGoldAndSilver = getTotalGoldAndSilver();
    const totalTradeInventory = getTotalTradeInventory();
    const totalOtherAssets = getTotalOtherAssets();

    //   LIABILITIES
    const getTotalLiabilityValue = (liabilities: { amount?: string, liabilityValue?: string }[]): number => {
        return liabilities.reduce((total, liability) => total + parseFloat(liability.amount || liability.liabilityValue || "0"), 0);
    };

    const getTotalBorrowedMoney = (): number => {
        const storedBorrowedMoney = localStorage.getItem("borrowedMoney");
        const borrowedMoney = storedBorrowedMoney ? JSON.parse(storedBorrowedMoney) : [];
        return getTotalLiabilityValue(borrowedMoney);
    };

    const getTotalGoodsBoughtOnCredit = (): number => {
        const storedGoods = localStorage.getItem("goodsBoughtOnCredit");
        const goods = storedGoods ? JSON.parse(storedGoods) : [];
        return getTotalLiabilityValue(goods);
    };

    const getTotalTaxesDue = (): number => {
        const storedTaxes = localStorage.getItem("taxesDue");
        const taxesDue = storedTaxes ? JSON.parse(storedTaxes) : [];
        return getTotalLiabilityValue(taxesDue);
    };

    const getTotalRentDue = (): number => {
        const storedRentDue = localStorage.getItem("rentDue");
        const rentDue = storedRentDue ? JSON.parse(storedRentDue) : [];
        return getTotalLiabilityValue(rentDue);
    };

    const getTotalOtherBills = (): number => {
        const storedOtherBills = localStorage.getItem("otherBills");
        const otherBills = storedOtherBills ? JSON.parse(storedOtherBills) : [];
        return getTotalLiabilityValue(otherBills);
    };

    const totalBorrowedMoney = getTotalBorrowedMoney();
    const totalGoodsBoughtOnCredit = getTotalGoodsBoughtOnCredit();
    const totalTaxesDue = getTotalTaxesDue();
    const totalRentDue = getTotalRentDue();
    const totalOtherBills = getTotalOtherBills();


    // Constants
    const ZAKAT_RATE = 0.025;

    const totalAssets = () => {
        const totalCashInHand = getTotalCashInHand();
        const totalCashInBank = getTotalCashInBank();
        const totalDeposits = getTotalDeposits();
        const totalShares = getTotalShares();
        const totalPensions = getTotalPensions();
        const totalMutualFunds = getTotalMutualFunds();
        const totalOtherInvestments = getTotalOtherInvestments();
        const totalRealEstate = getTotalRealEstate();
        const totalGoldAndSilver = getTotalGoldAndSilver();
        const totalTradeInventory = getTotalTradeInventory();
        const totalOtherAssets = getTotalOtherAssets();

        const totalAssets = totalCashInHand + totalCashInBank + totalDeposits + totalShares + totalPensions + totalMutualFunds
            + totalOtherInvestments + totalRealEstate + totalGoldAndSilver + totalTradeInventory + totalOtherAssets;

        return totalAssets;
    };

    const totalLiabilities = () => {
        const totalBorrowedMoney = getTotalBorrowedMoney();
        const totalGoodsBoughtOnCredit = getTotalGoodsBoughtOnCredit();
        const totalTaxesDue = getTotalTaxesDue();
        const totalRentDue = getTotalRentDue();
        const totalOtherBills = getTotalOtherBills();

        const totalLiabilities = totalBorrowedMoney + totalGoodsBoughtOnCredit + totalTaxesDue + totalRentDue + totalOtherBills;

        return totalLiabilities;
    };

    const calculateZakat = () => {
        const totalAssetsValue = totalAssets();
        const totalLiabilitiesValue = totalLiabilities();
        const netWorth = totalAssetsValue - totalLiabilitiesValue;

        if (netWorth >= nisab) {
            const zakatAmount = netWorth * ZAKAT_RATE;
            console.log("Zakat Due: ", zakatAmount);
            return zakatAmount;
        } else {
            console.log("You do not meet the nisab threshold, no zakat due.");
            return 0;
        }
    };

    const zakat = calculateZakat();

    return (
        <div className="flex flex-row w-[1200px] px-[0px] py-[40px] items-top justify-between">
            <Box>
                <Box sx={{
                    width: '509px',
                    height: '351px',
                    border: '0px solid transparent',
                    borderRadius: '12.5px',
                    backgroundColor: '#272727',
                    padding: '25px',
                    color: '#FFF',
                }}>
                    <Box sx={{
                        marginBottom: '15px',
                    }}>
                        <Image width={155} height={150} src="/assets/images/zakat2.png" alt="ZAKAT" className="w-[155px] h-[150px]" color="#000" />
                    </Box>
                    <Box>
                        <Typography sx={{
                            fontWeight: '300',
                            fontSize: '22.26px',
                            lineHeight: '26.43px'
                        }} component='div'>
                            Your Zakat payable as at today,
                            <Box sx={{
                                fontWeight: '600',
                            }}>{currentDateTime} <span className="font-[300]">is</span></Box>
                        </Typography>
                        <Typography sx={{
                            fontSize: '65px',
                            fontWeight: '700',
                        }}>
                            <span className="text-[32px]">₦</span>{formatPrice(zakat).substring(1)}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Box sx={{
                        backgroundColor: '#FFE0DF',
                        width: '243.44px',
                        height: '99.15px',
                        border: '0px solid transparent',
                        borderRadius: '12.09px',
                        padding: '20px',
                        margin: '20px 0 40px'
                    }}>
                        <Typography sx={{
                            fontWeight: '300',
                            fontSize: '11.22px',
                        }}>
                            Nisab for calculator is:
                        </Typography>
                        <Typography sx={{
                            fontSize: '25px',
                            fontWeight: '700',
                        }}>
                            <span className="text-[19.25px]">₦</span>{formatPrice(nisab).substring(1)}
                        </Typography>
                    </Box>
                    <Box sx={{
                        backgroundColor: '#BF0401',
                        width: '243.44px',
                        height: '99.15px',
                        border: '0px solid transparent',
                        borderRadius: '12.09px',
                        padding: '20px',
                        color: '#FFF',
                        margin: '20px 0'
                    }}>
                        <Typography sx={{
                            fontWeight: '300',
                            fontSize: '11.22px',
                        }}>
                            Your total asset is:
                        </Typography>
                        <Typography sx={{
                            fontSize: '25px',
                            fontWeight: '700',
                        }}>
                            <span className="text-[19.25px]">₦</span>{formatPrice(totalAssets()).substring(1)}
                        </Typography>
                    </Box>
                </Box>

                <Box>
                    <Box sx={{
                        marginBottom: '20px'
                    }}>
                        <Typography sx={{
                            fontWeight: '700',
                            fontSize: '26.67px',
                            lineHeight: '25.52px',
                        }}>
                            Your zakat calculator<br /> result have been saved!
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <RButton variant="outlined" mdWidth danger onClick={handleBack}>Back</RButton>
                        <RButton mdWidth>Yes</RButton>
                        <RButton halfwidth dark onClick={handleReset}>New calculator</RButton>
                    </Box>
                </Box>
            </Box>


            <Box sx={{
                marginLeft: '35px',
            }}>
                <InfoCard title="Cash">
                    <ListItem label="Cash in hand" value={formatPrice(totalCashInHand)} />
                    <Divider />
                    <ListItem label="Cash in bank" value={formatPrice(totalCashInBank)} />
                    <Divider />
                    <ListItem label={
                        <Typography sx={{ flexShrink: 0 }} component="div">
                            Deposit for some future purpose
                            <p className="text-[12px]">(eg House, vehicle, Hajj etc)</p>

                        </Typography>
                    } value={formatPrice(totalDeposits)} />
                    <Divider />
                    <ListItem label="Amounts given out as loans" value={formatPrice(totalLoans)} />
                </InfoCard>
                <Divider sx={{ margin: '15px 0px', backgroundColor: '#C2C2C2', borderBottomWidth: '0.1px' }} />
                <InfoCard title="Investments">
                    <ListItem label="Pensions" value={formatPrice(totalPensions)} />
                    <Divider />
                    <ListItem label="Total value of Shares" value={formatPrice(totalShares)} />
                    <Divider />
                    <ListItem label="Mutual Funds" value={formatPrice(totalMutualFunds)} />
                    <Divider />
                    <ListItem label="Other cash investments/savings plans" value={formatPrice(totalOtherInvestments)} />
                    <Divider />
                    <ListItem label="Real Estate Properties for rent/sale" value={formatPrice(totalRealEstate)} />
                </InfoCard>
                <Divider sx={{ margin: '15px 0px', backgroundColor: '#C2C2C2', borderBottomWidth: '0.1px' }} />
                <InfoCard title="Other Assets">
                    <ListItem label="Gold and Silver" value={formatPrice(totalGoldAndSilver)} />
                    <Divider />
                    <ListItem label="Trade Inventory" value={formatPrice(totalTradeInventory)} />
                    <Divider />
                    <ListItem label="Others" value={formatPrice(totalOtherAssets)} />
                </InfoCard>
                <Divider sx={{ margin: '15px 0px', backgroundColor: '#C2C2C2', borderBottomWidth: '0.1px' }} />
                <InfoCard title="Liabilities">
                    <ListItem label="Borrowed money" value={formatPrice(totalBorrowedMoney)} />
                    <Divider />
                    <ListItem label="Goods bought on credit" value={formatPrice(totalGoodsBoughtOnCredit)} />
                    <Divider />
                    <ListItem label="Taxes Due" value={formatPrice(totalTaxesDue)} />
                    <Divider />
                    <ListItem label="Rent Due" value={formatPrice(totalRentDue)} />
                    <Divider />
                    <ListItem
                        label={
                            <Typography sx={{ flexShrink: 0 }} component="div">
                                Other bills for services rendered
                                <p className="text-[12px]">due immediately</p>
                            </Typography>
                        }
                        value={formatPrice(totalOtherBills)}
                    />
                </InfoCard>
            </Box>
        </div>
    );
};

export default ZakatResults;
