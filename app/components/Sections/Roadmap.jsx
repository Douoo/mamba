import Card from "../Card";
function Roadmap() {
  return (
    <section id="#roadmap" className="roadmap">
      <h1 className="heading-lg clr-primary uppercase text-center">
        Mamba <span className="clr-secondary">Roadmap</span>
      </h1>
      <div className="roadmap-flow">
        <div className="roadmap-item left" data-nth={1}>
          <Card className="p-12 roadmap-content" type="primary">
            <h2 className="heading-md clr-primary">ADD BASE TO METAMASK</h2>
            <p>
              Download & install the Metamask Wallet either from the app store
              on your phone or the browser extension for desktop.
            </p>
          </Card>
        </div>

        <div className="roadmap-item right" data-nth={2}>
          <Card className="p-12 roadmap-content" type="primary">
            <h2 className="heading-md clr-primary">LOAD UP ETH</h2>
            <p>
              Head over to bridge.base.org, connect your wallet on the Ethereum
              blockchain. Choose how much ETH you would like to bridge from the
              erc20 network to Base.
            </p>
          </Card>
        </div>
        <div className="roadmap-item left" data-nth={3}>
          <Card className="p-12 roadmap-content" type="primary">
            <h2 className="heading-md clr-primary">BUY $Mamba</h2>
            <p>
              Head over to Uniswap and paste the $ROOST contract Address listed
              on this website to swap your ETH.
            </p>
          </Card>
        </div>
        <div className="roadmap-item right" data-nth={4}>
          <Card className="p-12 roadmap-content" type="primary">
            <h2 className="heading-md clr-primary">ADD BASE TO METAMASK</h2>
            <p>
              Now all you have to do is add the $ROOST contract address to your
              Metamask Wallet for your $ROOST tokens to show. Welcome aboard!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
