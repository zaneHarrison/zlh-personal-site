import Image from 'next/image'
import imageStyles from '../../styles/Image.module.css'

export default function About() {
    return (
        <div>
            <h1>About me</h1>
            <Image 
            className={`${imageStyles.img} ${imageStyles.shadow}`}
            src='/headshot.jpg' 
            alt='Photo of Zane Harrison'
            width="200"
            height="200"
            />
        </div>
    )
}