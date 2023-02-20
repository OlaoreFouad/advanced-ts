const course = "TS Bootcamp";

printCourseName(course);

function printCourseName(name: string) {
  console.log(
    "Course name is: (added this while the app was running:, adding more and more and more and more) " +
      name.toUpperCase()
  );
}

// to prevent the JS equivalent from being generated when a `tsc` command is issued, pass in a
// --noEmitOnError flag.
