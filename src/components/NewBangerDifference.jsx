import React from "react";
import "./newbangerdifference.css";
import campaignOne from "../assets/musicanalytic.png";
import campaignTwo from "../assets/campaign.png";
import campaignThree from "../assets/repair.png";

const NewBangerDifference = () => {
  return (
    <>
      <section className="difference-section">
        <h2 className="difference-title">
          What Makes <span>NewBanger</span> <br /> Different
        </h2>

        <p className="difference-subtitle">
          NewBanger stands out by giving artists real, targeted music promotion
          that builds genuine listeners—not just numbers.
        </p>

        <div className="difference-cards">
          {/* Card 1 */}
          <div className="difference-card">
            <img
              src={campaignOne}
              alt="Cost Efficient Promotion"
              className="difference-image"
            />
            <h3>Cost-Efficient Promotion</h3>
            <p>
              NewBanger offers affordable promo packages designed for emerging
              artists on any budget.
            </p>
          </div>

          {/* Card 2 */}
          <div className="difference-card">
            <img
              src={campaignTwo}
              alt="Extensive Coverage"
              className="difference-image"
            />
            {/* <h3>Extensive Coverage</h3> */}
            {/* <p>
              NewBanger links you to music professionals who help promote your
              work and grow your audience.
            </p> */}
          </div>
          <div className="difference-card">
            <img
              src={campaignThree}
              alt="Extensive Coverage"
              className="difference-image"
            />
            <h3>Transport Result</h3>
            <p>
              See exactly how your campaigns are performing in real time with
              dynamic analytics and detailed metrics.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewBangerDifference;
