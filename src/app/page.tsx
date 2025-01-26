'use client';
import Navbar from "../components/nav/Header";
import ActionCard from "@/components/ui/cards";
import NetWorthCard from "@/components/ui/NetWorth";

import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { Box } from '@mui/material';
import Image from "next/image";

const DashboardPage = () => {

  const assetSeries = [
    {
      innerRadius: 0,
      outerRadius: 0,
      id: 'platform-series',
      data: [
        { value: 10, color: 'orange', label: '25M' },
      ],
      arcLabel: (item: { label?: string; }) => `₦${item.label}`,
    },
    {
      innerRadius: 60,
      outerRadius: 90,
      id: 'assets-series',
      data: [
        { value: 96, color: '#BF0401', label: 'Investments' },
        { value: 15, color: '#505050', label: 'Cash' },
        { value: 10, color: '#1C1C1C', label: 'Other' },
      ],
    },
  ];

  const liabilitySeries = [
    {
      innerRadius: 0,
      outerRadius: 0,
      id: 'platform-series',
      data: [
        { value: 10, color: 'orange', label: '25M' },
      ],
      arcLabel: (item: { label?: string; }) => `₦${item.label}`,
    },
    {
      innerRadius: 60,
      outerRadius: 90,
      id: 'assets-series',
      data: [
        { value: 96, color: '#1C1C1C', label: 'Other Bills' },
        { value: 7, color: '#BF0401', label: 'Debts' },
      ],
    },
  ];


  return (
    <div className="flex flex-col px-[55px] min-h-screen w-[1440px] bg-[#F0F0F0]">
      <div className="top-0 w-[100%]">
        <Navbar />
      </div>


      {/* Main Content */}
      <div className="flex-1 w-[100%]">
        <div className="p-6 px-0">
          {/* Net Worth and Metrics */}
          <div className="flex flex-row justify-between mb-8 w-full">
            {/* Net Worth Card */}
            <NetWorthCard
              title="Your Net Worth"
              amount="₦2,500,321.01"
              graphSrc="/path/to/graph.png"
              imageSrc="/path/to/image.png"
            />
            {/* Metrics */}
            <div className="h-[279px] ps-5 w-[600px] flex flex-row justify-between">
              <div className="bg-white w-[279px] rounded-lg shadow-md p-6 flex flex-col justify-center items-center text-center">
                <div className='flex justify-between w-full items-center'>
                  <h3 className="text-lg font-[500] text-[12px]">Assets</h3>
                  <p className="text-[9.1px] text-[#BF0401]">Click to see details<Image width={8} height={6} src="/assets/images/Arrow 1.png" alt="" className="w-[8px] ml-[3px] inline mb-1" /></p>
                </div>
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                  <PieChart
                    series={assetSeries}
                    width={235}
                    height={190}
                    slotProps={{
                      legend: { hidden: true },
                    }}
                    margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                    sx={{
                      [`& .${pieArcLabelClasses.root}`]: {
                        fontWeight: '700',
                        fontSize: '20px'
                      },
                    }}
                  />
                </Box>
              </div>
              <div className="bg-white w-[279px] rounded-lg shadow-md p-6 flex flex-col justify-center items-center text-center">
                <div className='flex justify-between w-full items-center'>
                  <h3 className="text-lg font-[500] text-[12px]">Liabilities</h3>
                  <p className="text-[9.1px] text-[#BF0401]">Click to see details<Image width={8} height={6} src="/assets/images/Arrow 1.png" alt="" className="w-[8px] ml-[3px] inline mb-1" /></p>
                </div>
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                  <PieChart
                    series={liabilitySeries}
                    width={235}
                    height={190}
                    slotProps={{
                      legend: { hidden: true },
                    }}
                    margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                    sx={{
                      [`& .${pieArcLabelClasses.root}`]: {
                        fontWeight: '700',
                        fontSize: '20px'
                      },
                    }}
                  />
                </Box>
              </div>
            </div>

          </div>

          {/* Actions Section */}
          <h2 className="text-xl font-semibold text-gray-800">Actions</h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {/* Action Cards */}
            <ActionCard
              icon="/assets/images/globalAssests.png"
              title="Manage Global Assets"
              description="Oversee assets like cash, personal assets, and investments."
              disabled
            />
            <ActionCard
              icon="/assets/images/family.png"
              title="Add family members"
              description="Add any of your family members or some other critical contacts."
              disabled
            />
            <ActionCard
              icon="/assets/images/calNetWorth.png"
              title="Calculate your Net Worth"
              description="Compute and see how your finances are performing."
              disabled
            />
            <ActionCard
              icon="/assets/images/bequest.png"
              title="Prepare a Bequest"
              description="Get assistance in capturing some data."
              disabled
            />
            <ActionCard
              icon="/assets/images/hajj.png"
              title="Hajj"
              afterBreak="Calculator"
              description="Number of monthly contributions to make your next Hajj."
              disabled
            />
            <ActionCard
              icon="/assets/images/calculators.png"
              title="Financial Health Plan Calculator"
              description="Assess your spending pattern by updating your income and expenses."
              disabled
            />
            <ActionCard
              icon="/assets/images/zakat.png"
              title="Zakat"
              afterBreak="Calculator"
              description="Compute and manage your Zakat donation."
              to="calculators/zakat"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
