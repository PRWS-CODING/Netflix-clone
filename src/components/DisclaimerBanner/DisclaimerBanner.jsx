import "./DisclaimerBanner.css";

function DisclaimerBanner() {
  return (
    <aside className="portfolio-disclaimer-banner" aria-label="Portfolio Project Disclaimer">
      <div className="banner-content">
        <span className="banner-icon" aria-hidden="true">⚠️</span>
        <p className="banner-text">
          <strong>EDUCATIONAL DEMO:</strong> This site is a personal portfolio clone built for learning purposes and is <strong>NOT</strong> affiliated with Netflix. Please do not enter real passwords or sensitive credentials.
        </p>
      </div>
    </aside>
  );
}

export default DisclaimerBanner;

