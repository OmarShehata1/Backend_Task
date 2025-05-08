const Course = require("../models/course.model");



const getAllCourses = async (req, res) => {
  const courses = await Course.find();
  console.log(courses);
  if (!courses) {
    res.status(404).json({ success: Faile, message: "No courses found" });
  }
  
  res.status(200).json({ success: true, data: courses });
 
};


const getCourse = async (req, res) => {
  const courseId = req.params.id;
  const course = await Course.findById(courseId);
  if (!course) {
    res.status(404).json({ success: false, message: "Course not found" });
  }
  
  res.status(200).json({ success: true, data: course });
};


const addCourse = async (req, res) => {
  const { title, description, image, startDate, endDate, price } = req.body;
  const course = new Course({
    title,
    description,
    image,
    startDate,
    endDate,
    price,
  });
  await course.save();
  res.status(201).json({ success: true, data: course });
	
};



const updateCourse = async (req, res) => {
  const courseId = req.params.id;
  const { title, description, image, startDate, endDate, price } = req.body;
  const course = await Course.findByIdAndUpdate(
    courseId,
    { title, description, image, startDate, endDate, price },
    { new: true }
  );
  if (!course) {
    res.status(404).json({ success: false, message: "Course not found" });
  }
  res.status(200).json({ success: true, data: course });

};


const deleteCourse =async (req, res,) => {
  const courseId = req.params.id;
  const course = await Course.findByIdAndDelete(courseId);
  if (!course) {
    res.status(404).json({ success: false, message: "Course not found" });
  }
  res.status(200).json({ success: true, message: "Course deleted successfully" });
};



module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
