import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useParams } from "react-router-dom"

import CourseReviewModal from "../components/core/ViewCourse/CourseReviewModal"
import VideoDetailsSidebar from "../components/core/ViewCourse/VideoDetailsSidebar"
import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI"
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice"
import { FiMenu } from "react-icons/fi"

export default function ViewCourse() {
  const { courseId } = useParams()
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const [reviewModal, setReviewModal] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    ;(async () => {
      const courseData = await getFullDetailsOfCourse(courseId, token)
      dispatch(setCourseSectionData(courseData.courseDetails.courseContent))
      dispatch(setEntireCourseData(courseData.courseDetails))
      dispatch(setCompletedLectures(courseData.completedVideos))

      let lectures = 0
      courseData?.courseDetails?.courseContent?.forEach((sec) => {
        lectures += sec.subSection.length
      })
      dispatch(setTotalNoOfLectures(lectures))
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="relative flex min-h-[calc(100vh-3.5rem)]">
        {/* Sidebar */}
        <div className={`hidden md:block`}>
          <VideoDetailsSidebar
            setReviewModal={setReviewModal}
            isMobile={false}
          />
        </div>

        {/* Hamburger button for small screens */}
        <button
          className="absolute top-2 left-2 z-50 text-white md:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FiMenu size={28} />
        </button>

        {/* Sidebar as overlay on small screens */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-60 md:hidden">
            <VideoDetailsSidebar
              setReviewModal={setReviewModal}
              isMobile={true}
              closeSidebar={() => setIsSidebarOpen(false)}
            />
          </div>
        )}

        {/* Video Content */}
        <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
          <div className="mx-6">
            <Outlet />
          </div>
        </div>
      </div>

      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </>
  )
}
