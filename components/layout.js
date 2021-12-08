import Header from '../components/header'

export default function Layout(props) {
  let showHeader = true

  if (typeof props.showHeader !== 'undefined') {
    showHeader = props.showHeader
  }

  return (
    <>
      { showHeader &&
        <div className="flex flex-col justify-items-stretch relative bg-gray-900">
          <Header />
        </div>
      }
      {props.children}
    </>
  )
}