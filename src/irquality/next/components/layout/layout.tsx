import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar title={'AIR QUALITY'} description={'AIR QUALITY'} />
      <main>{children}</main>
    </>
  )
}