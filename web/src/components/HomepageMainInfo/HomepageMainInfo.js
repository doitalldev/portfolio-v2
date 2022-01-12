const HomepageMainInfo = () => {
  return (
    <div className="absolute w-1/2 top-1/3 pl-12">
      <div className="flex flex-col">
        <div>
          <img
            src="mepixel.svg"
            alt="creature"
            className="h-48 w-48 rounded-full p-4 border-4 border-sky-600"
          />
        </div>
        <h2 className="text-5xl font-bold">
          Creating performant websites and tooling
          <span className="text-sky-600">.</span>
        </h2>
        <p className="text-lg text-neutral-900">
          My name is Jonathan{' '}
          <span className=" text-sky-600">(refactor_this)</span> Clark
        </p>
      </div>
    </div>
  )
}

export default HomepageMainInfo
