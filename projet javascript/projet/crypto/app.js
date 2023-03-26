fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cbinancecoin%2Cpolkadot%2Cavalanche-2%2Cstellar%2Csolana&vs_currencies=eur&include_24hr_change=true').then(res => res.json()).then(json =>{
  const container = document.querySelector(".container");
  const coins = Object.getOwnPropertyNames(json);

  for(let coin of coins){
    const coinInfo = json[`${coin}`];
    const price = coinInfo.eur;
    const change = coinInfo.eur_24h_change.toFixed(5);

    container.innerHTML += `
    <div class="coin ${change <0 ? 'falling' : 'rising'}">
      <div class="coin-logo">
         <img src="images/${coin}.png">
      </div>
      <div class="coin-name">
          <h3>${coin}</h3>
          <span>/EUR</span>
      </div>
      <div class="coin-price">
          <span class="price">€${price}</span>
          <span class="change">€${change}</span>
      </div>
    </div>
    `;
  }
});


