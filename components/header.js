export default function Header() {
  return (
    <div className="flex flex-col justify-items-stretch relative bg-gray-900">
      <header className="siteHeader flex flex-row justify-start items-center h-16 text-white absolute md:relative z-10">
        <div className="container mx-auto px-6">
          <a className="block logo w-40" href="/">
            <img src="/disciple-life-logo-reversed-horizontal.svg" />
          </a>
        </div>
      </header>
    </div>
  )
}
