import React from "react";
import { RButton } from '../../nav/Button';
import PricingCard from "../pricingCard";

const pricingData = [
    {
        title: 'Basic',
        price: '₦ 2,000,000',
        features: [
            'Three Star Hotel (4 in a room)',
            'Breakfast & Dinner Tickets',
            'B-Tent',
            'Hajj Visa',
            'Medical expenses',
            'Mini Banking Service',
            'Guided Tours/Ziyarat',
            'Seminars/ Lectures and Souvenirs',
            'Flight Cost inclusive',
        ],
        isHighlighted: false,
        color: '#FFFFFF',
        priceColor: '#272727',
    },
    {
        title: 'Intermediate',
        price: '₦ 2,866,667',
        features: [
            'Three Star Hotel (3 in a room)',
            'Breakfast & Dinner Tickets',
            'A Tent',
            'Hajj Visa',
            'Medical expenses',
            'Mini Banking Service',
            'Guided Tours/Ziyarat',
            'Seminars/ Lectures and Souvenirs',
            'Flight Cost inclusive',
        ],
        isHighlighted: true,
        color: '#272727',
        priceColor: '#FFFFFF'
    },
    {
        title: 'Premium',
        price: '₦ 4,233,333',
        features: [
            'Five Star Hotel (3 in a room)',
            'Breakfast & Dinner Tickets',
            'A Tent',
            'Hajj Visa',
            'Medical expenses',
            'Mini Banking Service',
            'Guided Tours/Ziyarat',
            'Seminars/ Lectures and Souvenirs',
            'Flight Cost inclusive',
        ],
        isHighlighted: false,
        color: '#BF0401',
        priceColor: '#FFFFFF',
    },
];

interface HajjExpensesProps {
    handleNext: () => void;
    handleBack: () => void;
}

const HajjExpenses: React.FC<HajjExpensesProps> = ({
    handleNext,
    handleBack,
}) => {

    const [selectedPlan, setSelectedPlan] = React.useState<string>("");
    const handleSelectPlan = (title: string) => {
        setSelectedPlan(title);
    };

    return (
        <div className="flex flex-row w-[1500px] py-[20px] items-center justify-center">
            <div className="w-full">
                <div className="pb-6 w-full flex flex flex-col items-center">
                    <h2 className="text-[24px] w-[340px] font-[500] pb-4 text-[#000] leading-[25px] text-center">Select Package</h2>
                    <div className="flex w-full flex-col items-center justify-center py-20">
                        <div className="card w-full flex justify-content-center">
                            {pricingData.map((plan) => (
                                <div key={plan.title} className="cursor-pointer" onClick={() => handleSelectPlan(plan.title)}>
                                    <PricingCard
                                        title={plan.title}
                                        price={plan.price}
                                        features={plan.features}
                                        isHighlighted={selectedPlan === plan.title}
                                        color={plan.color}
                                        priceColor={plan.priceColor}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mr-0 inline w-[270px] flex justify-between">
                        <RButton onClick={handleBack} variant="outlined" mdWidth>Back</RButton>
                        <RButton onClick={handleNext} variant="contained" mdWidth>Start</RButton>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HajjExpenses;
