const ages = [32,15,19,12];
const nums = [];
for(let age of ages) {
    if(age >= 18) {
        nums.push(age);
    }
}
console.log(nums);

//2.
const adultArr = ages.filter(age => age >= 18);
const adultPresent = ages.some(age => age >= 50);
const allOldEnough = ages.every(age => age>=10);
console.log(adultPresent);