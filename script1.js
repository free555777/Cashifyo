function openPopup(section) {
  let content = "";

  switch(section) {
    case 'profit':
      content = "Your Total Profit: ₹0";
      break;
    case 'wallet':
      content = "Wallet Balance: ₹0";
      break;
    case 'ads':
      content = "Total Ads: 0 Ads Shown";
      break;
    case 'points':
      content = "Total Points: 0 = ₹0";
      break;
    case 'scratch':
      content = "Scratch Card: 🃏 Scratch to Win!";
      break;
    case 'products':
      content = "Our Products: No items yet.";
      break;
    case 'offer':
      content = "Latest Offers: Coming soon!";
      break;
    case 'team':
      content = `
        <h3>Refer & Earn ₹150</h3>
        <p>Your Referral Code: <b>ABC123</b></p>
        <button onclick="copyCode()">Copy</button>
        <button onclick="shareCode()">Share</button>
        <hr>
        <p>1. Invite your friends</p>
        <p>2. They Sign Up</p>
        <p>3. You Get ₹150</p>
      `;
      break;
    case 'profile':
      content = "Your Profile: Not Set";
      break;
    default:
      content = "Welcome to Cashifyo!";
  }

  document.getElementById('popupText').innerHTML = content;
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function copyCode() {
  navigator.clipboard.writeText("ABC123");
  alert("Referral code copied!");
}

function shareCode() {
  const text = "Join Cashifyo & earn ₹150! Use my code: ABC123";
  if (navigator.share) {
    navigator.share({ text });
  } else {
    alert("Share this: " + text);
  }
}
