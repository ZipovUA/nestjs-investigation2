export default interface IMatch {
    matchStatus: 'ok' | 'decliend',
    matchDate: Date,
    homeTeamName: string,
    homeTeamResult: number,
    awayTeamName: string,
    awayTeamResult: number
}