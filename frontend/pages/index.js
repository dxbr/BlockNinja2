import Script from 'next/script';
import WalletConnectButton from '../components/WalletConnectButton';

export default function Home() {
  return (
    <>
      <canvas id="c"></canvas>
      <div className="hud">
        <div className="hud__score">
          <div className="score-lbl"></div>
          <div className="cube-count-lbl"></div>
        </div>
        <div className="pause-btn">
          <div></div>
        </div>
        <div className="slowmo">
          <div className="slowmo__bar"></div>
        </div>
      </div>
      <div className="menus">
        <div className="menu menu--main">
          <h1>Block Ninja</h1>
          <WalletConnectButton />
          <button type="button" className="play-normal-btn">PLAY GAME</button>
          <button type="button" className="play-casual-btn">CASUAL MODE</button>
          <div className="credits">
            A game by Ishaan Sharma
          </div>
        </div>
        <div className="menu menu--pause">
          <h1>Paused</h1>
          <button type="button" className="resume-btn">RESUME GAME</button>
          <button type="button" className="menu-btn--pause">MAIN MENU</button>
        </div>
        <div className="menu menu--score">
          <h1>Game Over</h1>
          <h2>Your Score:</h2>
          <div className="final-score-lbl"></div>
          <div className="high-score-lbl"></div>
          <button type="button" className="play-again-btn">PLAY AGAIN</button>
          <button type="button" className="menu-btn--score">MAIN MENU</button>
        </div>
      </div>
      <Script src="/game.js" strategy="afterInteractive" />
    </>
  );
}
