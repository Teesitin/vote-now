// Define party colors


export const partyColors: Record<string, string> = {
    Republican: "red-600",
    Democrat: "blue-600",
    Independent: "green-600",
    Libertarian: "yellow-500",
    Progressive: "purple-600",
    Constitution: "gray-500"
};

export let presidentialPicks: Candidates[] = [
    { name: "William Grant", party: "Republican", color: partyColors.Republican, portrait: '/presidents/obama.png'},
    { name: "Susan Ellis", party: "Democrat", color: partyColors.Democrat, portrait: '/presidents/trump.png' },
    { name: "Nathan Cross", party: "Independent", color: partyColors.Independent, portrait: '/presidents/biden.webp' },
    { name: "Marianne Hughes", party: "Libertarian", color: partyColors.Libertarian, portrait: '/presidents/bush.png' },
    { name: "Jeremiah Reed", party: "Progressive", color: partyColors.Progressive, portrait: '/presidents/obama.png' },
    { name: "Elizabeth Carter", party: "Constitution", color: partyColors.Constitution, portrait: '/presidents/obama.png' }
];