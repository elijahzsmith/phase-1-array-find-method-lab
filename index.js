// code your solution here

function superbowlWin(record) {
    const winningRecord = record.find(x => x.result === "W");
    if(winningRecord) {
        return winningRecord.year;
    }
}

   