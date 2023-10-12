
export class BerlinClock{
    minuteLine(time){
        if (time == 0 || time%5 == 0) { return "0000"; }
        if (time == 1 || time%6 == 0) { return "I000"; }
        if (time == 2 || time%7 == 0) { return "II00"; }
        if (time == 3 || time%8 == 0) { return "III0"; }
        if (time == 4 || time%9 == 0) { return "IIII"; }

        return "0000";
    }
}