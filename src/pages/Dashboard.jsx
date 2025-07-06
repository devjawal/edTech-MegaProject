import { useState } from "react"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/core/Dashboard/Sidebar"
import { AiOutlineMenu } from "react-icons/ai"

export default function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      {/* Mobile Hamburger */}
      <button
        className="absolute left-4 top-4 z-50 text-2xl text-white lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <AiOutlineMenu />
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto px-3 sm:px-6">
        <div className="mx-auto w-full max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
