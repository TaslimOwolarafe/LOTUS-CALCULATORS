import React, { useState, useEffect } from "react";
import { RButton } from '../../nav/Button';
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

interface HajjStartProps {
    handleNext: () => void;
    handleBack: () => void;
}

const HajjStart: React.FC<HajjStartProps> = ({
    handleNext,
    handleBack,
}) => {
    const [dates, setDates] = useState<Nullable<(Date | null)[]>>(null);

    useEffect(() => {
        const buttons = document.querySelectorAll('.p-datepicker-header > button.p-datepicker-prev');
    
        buttons.forEach((button) => {
          const img = document.createElement('img');
          img.src = '/assets/images/arrowLeft.png';
          img.alt = 'Previous';
          button.innerHTML = '';
          button.appendChild(img);
        });
      }, []);

    return (
        <div className="flex flex-row w-full px-[36px] py-[20px] items-center justify-center">
            <div className="w-[446px]">
                <div className="pb-6 w-full flex flex flex-col items-center">
                    <h2 className="text-[24px] w-[340px] font-[500] pb-4 text-[#000] leading-[25px] text-center">When will you like to start your investment plan?</h2>
                    <div className="flex w-[472.89px] flex-col items-center justify-center py-10">
                        <div className="card w-full flex justify-content-center">
                            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput inline hideOnRangeSelection className="w-full"/>
                        </div>
                    </div>
                    <div className="mr-5 inline w-[270px] flex justify-between">
                        <RButton onClick={handleBack} variant="outlined" mdWidth>Back</RButton>
                        <RButton onClick={handleNext} variant="contained" mdWidth>Start</RButton>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HajjStart;
