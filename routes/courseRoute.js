const express = require("express");
const {
  getAllCourses,
  addCourse,
  getCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses.controllers");

const router = express.Router();

router.route("/").get(getAllCourses).post(addCourse);

router.route("/:id").get(getCourse).put(updateCourse).delete(deleteCourse);

module.exports = router;
