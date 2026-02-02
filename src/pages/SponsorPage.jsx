import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import Seo from "../components/Seo";
import "./sponsers.css";

import pepsiImg from '/sponsers/pepsi.png';
import sailImg from '/sponsers/sail.png';
import nclImg from '/sponsers/ncl.png';
import canarabankImg from '/sponsers/canarabank.png';
import engineersparcelImg from '/sponsers/engineersparcel.png';
import ongcImg from '/sponsers/ongc.png';
import skodaImg from '/sponsers/skoda.png';
import essarImg from '/sponsers/essar.png';
import shellImg from '/sponsers/shell.png';
import sbiImg from '/sponsers/sbi.png';
import redbullImg from '/sponsers/redbull.png';
import dominosImg from '/sponsers/dominos.png';
import coalindiaImg from '/sponsers/coalindia.png';
import realmeImg from '/sponsers/realme.png';
import adaniImg from '/sponsers/adani.png';
import jharkhandtourismImg from '/sponsers/jharkhandtourism.png';
import ambujacementImg from '/sponsers/ambujacement.png';
import powergridImg from '/sponsers/powergrid.png';
import pnbImg from '/sponsers/pnb.png';
import lenskartImg from '/sponsers/lenskart.png';
import sparxImg from '/sponsers/sparx.png';
import cocacolaImg from '/sponsers/cocacola.png';
import tatasteelImg from '/sponsers/tatasteel.png';
import buildersImg from '/sponsers/builders.png';
import titanImg from '/sponsers/titan.png';
import bcclImg from '/sponsers/bccl.png';
import oilindiaImg from '/sponsers/oilindia.png';
import inshortsImg from '/sponsers/inshorts.png';
import seclImg from '/sponsers/secl.png';
import relianceImg from '/sponsers/reliance.png';
import gailImg from '/sponsers/gail.png';
import mgImg from '/sponsers/mg.png';
import myntra from '/sponsers/Myntra.png'
import krafton from '/sponsers/krafton.png'

function SponsorPage() {
  return (
    <>
      <Seo
        title="Sponsors | Srijan 2026"
        description="Discover the incredible partners and sponsors who make Srijan 2026 possible! From title sponsors to media partners, explore the brands that support our celebration of culture, talent, and innovation."
        url="https://srijan2026.vercel.app/sponsors"
      />
      <div>
        <PageHeader
          title="SPONSORS"
          subtitle="Explore the vibrant spectrum of cultural celebrations"
          showBackButton={true}
          backPath="/"
          titleDelay={0.2}
          showStars={true}
        />
      </div>

      <div className="sponsers-container">

        {/* Title Sponsor Section */}
        <div className="sponsor-section">
          <h2 className="sponsor-section-title">TITLE SPONSOR</h2>
          <div className="title-sponsor-wrapper">
            <div className="sponser-circle-frame-title title-sponsor">
              <a href='https://www.myntra.com/' target='_blank'>
                <img src={myntra} alt="Myntra - Title Sponsor" className='p-10 md:p-15' />
              </a>
            </div>
          </div>
        </div>

        {/* Gaming Partner Section */}
        <div className="sponsor-section">
          <h2 className="sponsor-section-title">GAMING PARTNER</h2>
          <div className="title-sponsor-wrapper">
            <div className="">
              <img src={krafton} alt="Krafton - Gaming Partner" className='p-10 md:p-15' />
            </div>
          </div>
        </div>

        {/* Past Sponsors Section */}
        <div className="sponsor-section">
          <h2 className="sponsor-section-title">PAST SPONSORS</h2>

          <div className="sponsers-grid">

            {/* 🔹 Row 1 */}
            <div className="sponsers-row">
              <div className="sponser-circle-frame"><img src={pepsiImg} loading="lazy" alt="Pepsi" /></div>
              <div className="sponser-circle-frame"><img src={sailImg} loading="lazy" alt="Sail" /></div>
              <div className="sponser-circle-frame"><img src={nclImg} loading="lazy" alt="NCL" /></div>
              <div className="sponser-circle-frame"><img src={canarabankImg} loading="lazy" alt="Canara Bank" /></div>
              <div className="sponser-circle-frame"><img src={engineersparcelImg} loading="lazy" alt="Engineers Parcel" /></div>
              <div className="sponser-circle-frame"><img src={ongcImg} loading="lazy" alt="ONGC" /></div>
              <div className="sponser-circle-frame"><img src={skodaImg} loading="lazy" alt="Skoda" /></div>
              <div className="sponser-circle-frame"><img src={essarImg} loading="lazy" alt="Essar" /></div>
            </div>

            {/* 🔹 Row 2 */}
            <div className="sponsers-row offset">
              <div className="sponser-circle-frame"><img src={essarImg} loading="lazy" alt="Essar" /></div>
              <div className="sponser-circle-frame"><img src={shellImg} loading="lazy" alt="Shell" /></div>
              <div className="sponser-circle-frame"><img src={sbiImg} loading="lazy" alt="SBI" /></div>
              <div className="sponser-circle-frame"><img src={redbullImg} loading="lazy" alt="Red Bull" /></div>
              <div className="sponser-circle-frame"><img src={dominosImg} loading="lazy" alt="Dominos" /></div>
              <div className="sponser-circle-frame"><img src={coalindiaImg} loading="lazy" alt="Coal India" /></div>
              <div className="sponser-circle-frame"><img src={realmeImg} loading="lazy" alt="Realme" /></div>
            </div>

            {/* 🔹 Row 3 */}
            <div className="sponsers-row">
              <div className="sponser-circle-frame"><img src={adaniImg} loading="lazy" alt="Adani" /></div>
              <div className="sponser-circle-frame"><img src={jharkhandtourismImg} loading="lazy" alt="Jharkhand Tourism" /></div>
              <div className="sponser-circle-frame"><img src={ambujacementImg} loading="lazy" alt="Ambuja" /></div>
              <div className="sponser-circle-frame"><img src={powergridImg} loading="lazy" alt="Power Grid" /></div>
              <div className="sponser-circle-frame"><img src={canarabankImg} loading="lazy" alt="Canara Bank" /></div>
              <div className="sponser-circle-frame"><img src={pnbImg} loading="lazy" alt="PNB" /></div>
              <div className="sponser-circle-frame"><img src={lenskartImg} loading="lazy" alt="Lenskart" /></div>
              <div className="sponser-circle-frame"><img src={sparxImg} loading="lazy" alt="Sparx" /></div>
            </div>

            {/* 🔹 Row 4 */}
            <div className="sponsers-row offset">
              <div className="sponser-circle-frame"><img src={cocacolaImg} loading="lazy" alt="Coca Cola" /></div>
              <div className="sponser-circle-frame"><img src={tatasteelImg} loading="lazy" alt="Tata Steel" /></div>
              <div className="sponser-circle-frame"><img src={sbiImg} loading="lazy" alt="SBI" /></div>
              <div className="sponser-circle-frame"><img src={buildersImg} loading="lazy" alt="Builders" /></div>
              <div className="sponser-circle-frame"><img src={titanImg} loading="lazy" alt="Titan" /></div>
              <div className="sponser-circle-frame"><img src={bcclImg} loading="lazy" alt="BCCL" /></div>
              <div className="sponser-circle-frame"><img src={oilindiaImg} loading="lazy" alt="Oil India" /></div>
            </div>

            {/* 🔹 Row 5 */}
            <div className="sponsers-row">
              <div className="sponser-circle-frame"><img src={inshortsImg} loading="lazy" alt="Inshorts" /></div>
              <div className="sponser-circle-frame"><img src={seclImg} loading="lazy" alt="SECL" /></div>
              <div className="sponser-circle-frame"><img src={relianceImg} loading="lazy" alt="Reliance" /></div>
              <div className="sponser-circle-frame"><img src={gailImg} loading="lazy" alt="GAIL" /></div>
              <div className="sponser-circle-frame"><img src={mgImg} loading="lazy" alt="MG" /></div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default SponsorPage;