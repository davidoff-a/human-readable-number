module.exports = function toReadable(number) {
    let cipher = {
            0: "",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
        },
        dozensTeen = {
            0: "ten",
            1: "eleven",
            2: "twelve",
            3: "thirteen",
            4: "fourteen",
            5: "fifteen",
            6: "sixteen",
            7: "seventeen",
            8: "eighteen",
            9: "nineteen",
        },
    dozens = {
        0: "",
        2: "twenty ",
        3: "thirty ",
        4: "forty ",
        5: "fifty ",
        6: "sixty ",
        7: "seventy ",
        8: "eighty ",
        9: "ninety ",
    };
    let strExpr=String(number);
    if (number===0){
        return 'zero';
    }
    switch (strExpr.length) {
        case 1:
            readableNumbers=cipher[strExpr];
            break;
        case 2:
            if (strExpr[0]==='1'){
                readableNumbers=`${dozensTeen[strExpr[1]]}`;
            } else {
                readableNumbers=`${dozens[strExpr[0]]}${cipher[strExpr[1]]}`};
            break;
        case 3:
            if (strExpr[1]==='1'){
                readableNumbers=`${cipher[strExpr[0]]} hundred ${dozensTeen[strExpr[2]]}`;
            } else {
                readableNumbers=`${cipher[strExpr[0]]} hundred ${dozens[strExpr[1]]}${cipher[strExpr[2]]}`;
            }
            break;

        default:
            break;
    }
    return readableNumbers.trim();
};
