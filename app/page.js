import homeStyles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <div className={homeStyles.center}>
        <h1 className={homeStyles['center-text']}>Hi, I'm Zane 👋</h1>
        <h1 className={homeStyles['center-text']}>Welcome to my website!</h1>
      </div>
    </main>
  )
}
