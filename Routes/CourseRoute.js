const {
  CreateCourse,
  updateCourse,
  deleteCourse,
  getOneCourse,
  getAllCourses,
} = require("../Controller/CourseController");

const CourseRoute = require("express").Router();
CourseRoute.post("/", CreateCourse);
CourseRoute.put("/:id", updateCourse);
CourseRoute.delete("/:id", deleteCourse);
CourseRoute.get("/:id", getOneCourse);
CourseRoute.get("/", getAllCourses);

module.exports = CourseRoute;
