var CourseType;
(function (CourseType) {
    CourseType[CourseType["FREE"] = 0] = "FREE";
    CourseType[CourseType["PREMIUM"] = 1] = "PREMIUM";
    CourseType[CourseType["PROIVATE"] = 2] = "PROIVATE";
    CourseType[CourseType["HIDDEN"] = 3] = "HIDDEN";
})(CourseType || (CourseType = {}));
var course = {
    title: "Typescript Fundamentals",
    type: CourseType.PREMIUM
};
