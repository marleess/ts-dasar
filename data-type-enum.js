var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["unknown"] = 2] = "unknown";
})(Gender || (Gender = {}));
var gender = Gender.male;
console.log(gender);
