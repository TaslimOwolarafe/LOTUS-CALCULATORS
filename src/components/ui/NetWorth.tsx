import React from "react";

import { Badge } from "@/components/ui/badge"


interface NetWorthCardProps {
    title: string;
    amount: string;
    graphSrc: string;
    imageSrc: string;
}

const NetWorthCard: React.FC<NetWorthCardProps> = ({
    amount,
}) => {
    return (
        <div
            style={{
                backgroundImage: `url('/assets/images/RED.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="h-[281px] w-[695px] text-white rounded-lg p-10 shadow-lg flex flex-col md:flex-row justify-between items-center relative">
            <div className="h-[281px] w-[695px] absolute z-10 left-0 top-0">
                <img src="/assets/images/offCut.png" alt="" className="w-full"/>
            </div>
            <div className="relative h-full flex flex-col justify-between items-start z-20">
                <div>
                    <p className="mb-7 text-lg font-[700px]">Your net worth</p>
                    <h1 className="text-4xl font-bold mt-2">{amount}</h1>
                </div>
                <div className="w-[252px]">
                    <img src="/assets/images/graphLine.png" alt="" className="relative from-slate-300 w-full top-8" />
                    <img src="/assets/images/graph.png" alt="" className="w-full" />
                </div>
            </div>
            <div className="flex flex-col h-full items-end justify-between relative z-20">
                <Badge variant="default" className="bg-white bg-opacity-40 text-white rounded-full px-4 py-2 font-light shadow-md">Hide Net Worth</Badge>
                <img src="/assets/images/moneyBag.svg" alt="" className="w-[245px] color-white" />
            </div>
            {/* Left Section */}
            {/* <div className="mb-4 md:mb-0">
        <h3 className="text-lg font-medium">{title}</h3>
        <h1 className="text-3xl font-bold mt-2">{amount}</h1>
        <img
          src={graphSrc}
          alt="Graph"
          className="w-full max-w-[200px] mt-4"
        />
      </div> */}

            {/* Right Section */}
            {/* <div>
        <img src={imageSrc} alt="Illustration" className="w-[100px] h-[100px]" />
      </div> */}
        </div>
    );
};

export default NetWorthCard;
