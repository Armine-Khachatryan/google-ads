import React from "react";
// Styles
import { ChartWrapper, StaticDate, Wrapper } from "./OverallResults.styles";
import TitleTwoColor from "../../components/TitleTwoColor/TitleTwoColor";
import ChartItem from "../../components/ChartItem";
import MultiAxis from "../../components/MultiAxis";
import VerticalChart from "../../components/VerticalChart/VerticalChart";
import HorizontalChart from "../../components/HorizontalChart/HorizontalChart";
import DoughnutChart from "../../components/DoughnutChart/DoughnutChart";
import OverallFooter from "../../components/OverallFooter/OverallFooter";
import CardStatic from "../../components/CardStatic/CardStatic";
import WastedSpending from "../../components/WastedSpending/WastedSpending";
import KeyMetrics from "../../components/KeyMetrics/KeyMetrics";
const OverallResults = () => {
  return (
    <Wrapper>
      <TitleTwoColor
        title="Overall"
        titleSec="Results"
        desc="This free assessment grades your account against 17 key metrics and offers deep insights, actionable next steps, and an overall account score to help you understand what’s working and where you can improve."
      />
      <ChartWrapper>
        <ChartItem
          title={"quality score"}
          desc={
            "Compare yours with industry benchmarks and learn how to improve it so you can raise your Ad Rank and lower your CPC."
          }
          chart={<MultiAxis />}
        />
        <ChartItem
          title={"impressions share"}
          desc={
            "Make sure you’re getting the exposure you need to stay profitable with budget weighted impression share metrics."
          }
          chart={<DoughnutChart />}
        />
        <ChartItem
          title={"wasted spending"}
          desc={
            "Save thousands of dollars and improve your ROI with negative keywords."
          }
          chart={<HorizontalChart />}
        />
        <ChartItem
          title={"account activities"}
          desc={
            "Stay ahead of competitors by keeping up with specific actions in your account."
          }
          chart={<VerticalChart />}
        />
      </ChartWrapper>
      <StaticDate>
        <ChartWrapper>
          <ChartItem
            colorMode="light"
            title={"BENCHMARKS"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            chart={<HorizontalChart />}
          />
            <ChartItem
              colorMode="light"
              title={"Best Practices Compliance"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
              chart={<DoughnutChart />}
            />
            <ChartItem
              colorMode="light"
              title={"Best & Worst Performing Text Ads"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
              chart={<VerticalChart />}
            />
        <ChartItem
          colorMode="light"
          title={"Click-Through Rate (CTR)"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          chart={<MultiAxis/>}
        />
        </ChartWrapper>
        {/* <CardStatic/>
        <WastedSpending />
      <KeyMetrics /> */}
      </StaticDate>
      <OverallFooter />
    </Wrapper>
  );
};

export default OverallResults;
