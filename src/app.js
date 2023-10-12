
export class BerlinClock{
    minuteLine(time){
        if(this.isZeroOrMultipleOf5(time)){return "0000"}
        if (this.isOneOrMultipleOf6(time)) { return "I000"; }
        if (this.isTwooOrMultipleOf7(time)) { return "II00"; }
        if (this.isThreeOrMultipleOf8(time)) { return "III0"; }
        if (this.isFourOrMultipleOf9(time)) { return "IIII"; }
s
        return null;
    }

    isZeroOrMultipleOf5(time){
        if(time == 0 || time%5 == 0){
            return true;
        }

        return false;
    }

    isOneOrMultipleOf6(time){
        if(time == 1 || time%6 == 0){
            return true;
        }

        return false;
    }

    isTwooOrMultipleOf7(time){
        if(time == 2 || time%7 == 0){
            return true;
        }

        return false;
    }

    isThreeOrMultipleOf8(time){
        if(time == 3 || time%8 == 0){
            return true;
        }

        return false;
    }

    isFourOrMultipleOf9(time){
        if(time == 4 || time%9 == 0){
            return true;
        }

        return false;
    }
}