import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { fetchInstructorCourses } from "../../../../services/operations/courseDetailsAPI"
import { getInstructorData } from "../../../../services/operations/profileAPI"
import InstructorChart from "./InstructorChart"
import { Link } from "react-router-dom"

export default function Instructor() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const [loading, setLoading] = useState(false)
  const [instructorData, setInstructorData] = useState(null)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const instructorApiData = await getInstructorData(token)
      const result = await fetchInstructorCourses(token)
      if (instructorApiData.length) setInstructorData(instructorApiData)
      if (result) setCourses(result)
      setLoading(false)
    })()
  }, [])

  const totalAmount = instructorData?.reduce(
    (acc, curr) => acc + curr.totalAmountGenerated,
    0
  )

  const totalStudents = instructorData?.reduce(
    (acc, curr) => acc + curr.totalStudentsEnrolled,
    0
  )

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-richblack-5">
          Hi {user?.firstName} 👋
        </h1>
        <p className="font-medium text-richblack-200">
          Let's start something new
        </p>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="spinner" />
      ) : courses.length > 0 ? (
        <>
          {/* Chart + Stats */}
          <div className="my-4 flex flex-col gap-4 lg:flex-row">
            {/* Chart */}
            {totalAmount > 0 || totalStudents > 0 ? (
              <div className="w-full lg:w-2/3 xl:w-1/2 rounded-md bg-richblack-800 p-4">
                <InstructorChart courses={instructorData} />
              </div>
            ) : (
              <div className="w-full lg:w-2/3 xl:w-1/2 rounded-md bg-richblack-800 p-6">
                <p className="text-lg font-bold text-richblack-5">Visualize</p>
                <p className="mt-4 text-xl font-medium text-richblack-50">
                  Not Enough Data To Visualize
                </p>
              </div>
            )}

            {/* Stats */}
            <div className="w-full lg:w-1/3 rounded-md bg-richblack-800 p-6">
              <p className="text-lg font-bold text-richblack-5">Statistics</p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-lg text-richblack-200">Total Courses</p>
                  <p className="text-3xl font-semibold text-richblack-50">
                    {courses.length}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-richblack-200">Total Students</p>
                  <p className="text-3xl font-semibold text-richblack-50">
                    {totalStudents}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-richblack-200">Total Income</p>
                  <p className="text-3xl font-semibold text-richblack-50">
                    Rs. {totalAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Cards */}
          <div className="rounded-md bg-richblack-800 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-lg font-bold text-richblack-5">Your Courses</p>
              <Link to="/dashboard/my-courses">
                <p className="text-xs font-semibold text-yellow-50">View All</p>
              </Link>
            </div>

            <div className="mt-4 flex flex-col gap-6 md:flex-row md:gap-6">
              {courses.slice(0, 3).map((course) => (
                <div key={course._id} className="w-full md:w-1/3">
                  <img
                    src={course.thumbnail}
                    alt={course.courseName}
                    className="h-[200px] w-full rounded-md object-cover"
                  />
                  <div className="mt-3 w-full">
                    <p className="text-sm font-medium text-richblack-50">
                      {course.courseName}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center space-x-2 text-xs font-medium text-richblack-300">
                      <p>{course.studentsEnrolled.length} students</p>
                      <span>|</span>
                      <p>Rs. {course.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20 text-center">
          <p className="text-2xl font-bold text-richblack-5">
            You have not created any courses yet
          </p>
          <Link to="/dashboard/add-course">
            <p className="mt-1 text-lg font-semibold text-yellow-50">
              Create a course
            </p>
          </Link>
        </div>
      )}
    </div>
  )
}
