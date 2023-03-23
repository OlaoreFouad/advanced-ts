enum CourseType {
  FREE,
  PREMIUM,
  PROIVATE,
  HIDDEN,
}

interface Course {
  title: string;
  type: CourseType;
}

const course: Course = {
  title: "Typescript Fundamentals",
  type: CourseType.PREMIUM,
};
