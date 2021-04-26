import React from "react";
import "../style/App.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import finstreetBanner from "../images/finstreet-banner.png";
import ftxBanner from "../images/ftx-banner.png";
import bitnbs from "../images/bitnbs.png";
import coindcx from "../images/coindcx.png";
import colodax from "../images/colodax.png";
import giotus from "../images/giotus.png";
import wazirx from "../images/wazirx.png";
import zebpay from "../images/zebpay.png";


class App extends React.Component {
	renderTime = ({ remainingTime }) => {
		if (remainingTime === 0) {
		  return;
		}
	  
		return (
		  <div className="timer">
			<div className="value">{remainingTime}</div>
		  </div>
		);
	};

	render () {
		return (
			<div>
				{/* Top Header -----------------------------------------------*/}
				<div className="top-header">
					{/* Company Logo ---------------- */}
					<div className="company-logo">
						<div>
							<h1>
								<a href="/">
									HODLINFO
								</a>
							</h1>
							<h3>
								Powered By
								<a href="https://www.finstreet.in/" target="_blank" rel="noreferrer">
									Finstreet
								</a>
							</h3>
						</div>
					</div>
					{/* Center Header Content --------- */}
					<div className="header-center-container">
						{/* Currency Dropdown */}
						<select className="currency-dropdown">
							<option value="INR">INR</option>
						</select>
						{/* Bit Coin Dropdown */}
						<select className="btc-dropdown">
							<option value="BTC">BTC</option>
							<option value="ETH">ETH</option>
							<option value="USDT">USDT</option>
							<option value="XRP">XRP</option>
							<option value="TRX">TRX</option>
							<option value="DASH">DASH</option>
							<option value="ZEC">ZEC</option>
							<option value="XEM">XEM</option>
							<option value="IOST">IOST</option>
							<option value="WIN">WIN</option>
							<option value="BIT">BIT</option>
							<option value="WRX">WRX</option>
						</select>
						{/* But BTC Button */}
						<a href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn" target="_blank" rel="noreferrer">
							<div className="btc-button">
								BUY BTC
							</div>
						</a>
					</div>
					{/* Header Right Content */}
					<div className="header-right-content">
						{/* Refresh Countdown */}
						<div className="refresh-countdown">
						<div className="timer-wrapper">
							<CountdownCircleTimer
							isPlaying
							duration={60}
							colors={[["#6ccacb", 1]]}
							size={35}
							strokeWidth={3}
							onComplete={() => [true, 0]}
							>
							{this.renderTime}
							</CountdownCircleTimer>
						</div>
						</div>
						{/* Telegram Button */}
						<a href="https://hodlinfo.com/connect/telegram" target="_blank" rel="noreferrer">
							<div className="telegram-button">
								<i className="telegram plane icon" />
								Connect Telegram
							</div>
						</a>
						{/* Theme Toggle */}
					</div>
				</div>

				{/* Main Content */}
				<div className="main-content-container">
					<div className="main-content-item minutes">
						<h2>0.6%</h2>
						<h4>5 Mins</h4>
					</div>
					<div className="main-content-item hour">
						<h2>0.94%</h2>
						<h4>1 Hour</h4>
					</div>
					<div className="main-content-item best-price">
						<h2>Best Price to Trade</h2>
						<h1>₹ 39,77,819</h1>
						<h5>Average BTC/INR net price including commission</h5>
					</div>
					<div className="main-content-item day">
						<h2>0.78%</h2>
						<h4>1 Day</h4>
					</div>
					<div className="main-content-item days">
						<h2>0.94%</h2>
						<h4>7 days</h4>
					</div>
				</div>

				{/* Finstreet Banner */}
				<a href="https://www.finstreet.in/" target="_blank" rel="noreferrer">
					<div className="finstreet-banner">
						<img src={finstreetBanner} alt="fin street banner" />
					</div>
				</a>

				{/* Table */}
				<div className="table-container">
					<table className="info-table">
						<tbody>
							<tr>
								<th>#</th>
								<th>Platform</th>
								<th>Last Traded Price</th>
								<th>Buy / Sell Price</th>
								<th>Difference</th>
								<th>Savings</th>
							</tr>
							<tr>
								<td>1</td>
								<td>
									<img src={wazirx} alt="wazirx" />
									WazirX
								</td>
								<td>₹ 42,48,839</td>
								<td>₹ 42,48,839 / ₹ 42,57,900</td>
								<td className="green">7.27 %</td>
								<td className="green">▲ ₹ 2,87,786</td>
							</tr>
							<tr>
								<td>2</td>
								<td>
									<img src={bitnbs} alt="bitnbs" />
									Bitbns
								</td>
								<td>₹ 42,31,030</td>
								<td>₹ 42,37,963 / ₹ 42,52,806</td>
								<td className="green">6.82 %</td>
								<td className="green">▲ ₹ 2,69,977</td>
							</tr>
							<tr>
								<td>3</td>
								<td>
									<img src={giotus} alt="giotus" />
									Giotus
								</td>
								<td>₹ 41,90,000</td>
								<td>₹ 41,90,000 / ₹ 42,58,997</td>
								<td className="green">5.78 %</td>
								<td className="green">▲ ₹ 2,28,947</td>
							</tr>
							<tr>
								<td>4</td>
								<td>
									<img src={colodax} alt="colodax" />
									Colodax
								</td>
								<td>₹ 25,83,138</td>
								<td>₹ 25,75,167 / ₹ 26,08,984</td>
								<td className="red">-34.79 %</td>
								<td className="red">▼ ₹ 13,77,914</td>
							</tr>
							<tr>
								<td>5</td>
								<td>
									<img src={zebpay} alt="zebpay" />
									Zebpay
								</td>
								<td>₹ 42,46,001</td>
								<td>₹ 42,65,000 / ₹ 42,46,001</td>
								<td className="green">7.19 %</td>
								<td className="green">▲ ₹ 2,84,948</td>
							</tr>
							<tr>
								<td>5</td>
								<td>
									<img src={coindcx} alt="coindcx" />
									CoinDCX
								</td>
								<td>₹ 42,67,309</td>
								<td>₹ 42,74,953 / ₹ 42,75,758</td>
								<td className="green">7.73 %</td>
								<td className="green">▲ ₹ 3,06,257</td>
							</tr>
						</tbody>
					</table>
				</div>

				{/* FTX Banner */}
				<a href="https://ftx.com/" traget="_blank" rel="noreferrer">
					<div className="ftx-banner">
						<img src={ftxBanner} alt="ftxbanner" />
					</div>
				</a>

				{/* Footer Section ------------------------- */}
				<div className="footer-container">
					<div className="footer-item">
						Copyright © 2019
					</div>
					<div className="footer-item">
						HodlInfo.com
					</div>
					<div className="footer-item">
						Developed By <a href="https://github.com/mr-mahawar" target="_blank" rel="noreferrer">Tilak Mahawar</a>
					</div>
					<div className="footer-item right-tem">
						<a href="mailto:support@hodlinfo.com" target="_blank" rel="noreferrer">
							Support
						</a>
					</div>
				</div>

				{/* Add to Homescreen Sticky Section */}
				<div style={{width: "100vw", height: "60px"}}> </div>
				<div className="sticky-section">
					<button className="ui teal basic button">Add HodlInfo to home screen</button>
				</div>

			</div>
		);
	}
}

export default App;