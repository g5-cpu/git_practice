// Created by Gabriel B. da Silva

// Matches of Premier League - Exhibition game - (21-22) Generator

const randomTeam = () => {
    const teams = ["Manchester United", "Liverpool", "Chelsea", "Brighton", "Manchester City", "Everton", "Tottenham", "West Ham", "Brentford", "Aston Villa", "Watford", "Leicester City", "Arsenal", "Crystal Palace", "Southampton", "Wolves", "Leeds", "Newcastle", "Burnley", "Norwich"];

    let choosedTeam = "";

    choosedTeam = teams[Math.floor(Math.random() * 20)];

    return choosedTeam
};

const randomHour = () => {
    const hours = ["8:00", "10:00", "9:30", "12:45"];

    let hour = "";

    choosedHour = hours[Math.floor(Math.random() * 4)];

    return choosedHour
};

const randomStadium = () => {
    const stadiums = ["Old Trafford", "Stamford Bridge", "Anfield", "Selhurst Park", "Villa Park", "Goodison Park", "Tottenham Hotspur Stadium", "Emirates Stadium", "King Power Stadium", "Brentford Community Stadium", "Molineux Stadium", "Carrow Road"];

    let choosedStadium = "";

    choosedStadium = stadiums[Math.floor(Math.random() * 13)];

    return choosedStadium
};

const currentDate = () => {
    const date = new Date();
    const day =  String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');

    return `${day}/${month}`
};

const generateGame = () => {
    return randomTeam() + " x " + randomTeam();
};

console.log(`Match: ${generateGame()}`);
console.log();
console.log(`Time: ${randomHour()} - Date: ${currentDate()}`);
console.log(`Local: ${randomStadium()}`)