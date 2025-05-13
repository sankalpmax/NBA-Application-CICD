const fs = require('fs');
const readline = require('readline');

// Load NBA teams data
const teams = JSON.parse(fs.readFileSync('./data/teams.json', 'utf-8'));

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🏀 Welcome to the NBA Info App!');
console.log('--------------------------------');
teams.forEach((team, index) => {
  console.log(`${index + 1}. ${team.name}`);
});

rl.question('\nSelect a team number to view details: ', (answer) => {
  const index = parseInt(answer) - 1;
  if (index >= 0 && index < teams.length) {
    const selectedTeam = teams[index];
    console.log(`\n🏀 Team: ${selectedTeam.name}`);
    console.log(`📍 City: ${selectedTeam.city}`);
    console.log(`🆔 Abbreviation: ${selectedTeam.abbreviation}`);
  } else {
    console.log('❌ Invalid selection. Please try again.');
  }

  rl.close();
});

