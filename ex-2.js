// Exercise #2: Promotion Conditions

// Start coding here
let memberLevel = "Gold";
let lastMonthSpent = 4000;


let lastMonthPaidMoreThan4000 = lastMonthSpent > 4000;
let isWeekday= true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = memberLevel == "Platinum";

let hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday 
    && hasBoughtProductFromITCategory
    && !hasAttendedDiscountEvent
    && !isPlatinum);

console.log(hasPromotion);
