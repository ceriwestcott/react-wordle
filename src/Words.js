export const boardDefault = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
];

export const generateWordSet = async () => {
    const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true')
}