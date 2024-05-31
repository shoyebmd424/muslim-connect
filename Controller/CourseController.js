const Course = require("../Model/Course");

exports.CreateCourse = async (req, res) => {
  try {
    await new Course(req.body).save();
    res.status(201).json("Course created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      res.status(404).json({ message: "invalid Course id" });
    }
    await Course.findByIdAndUpdate(req.params.id);
    res.status(201).json("Course updated");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      res.status(404).json({ message: "invalid Course id" });
    }
    await Course.findByIdAndDelete(req.params.id);
    res.status(201).json("Course deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.getOneCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(201).json(course);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.getAllCourses = async (req, res) => {
  try {
    const Courses = await Course.find();
    res.status(201).json(Courses);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
