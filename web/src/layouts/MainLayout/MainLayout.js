import NavBar from 'src/components/NavBar/NavBar'

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="bg-white text-neutral-900">
        <NavBar />
        <main>{children}</main>
      </div>
    </>
  )
}

export default MainLayout
