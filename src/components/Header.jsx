
import img from "/chef.png"
export default function Header() {
    return (
    <header>
        <img src={`${import.meta.env.BASE_URL}chef.png`} alt="Chef Logo" />
        <h1>Recipe Maker </h1>
    </header>

    )
}

 