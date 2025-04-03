import React from "react"
import './Heading.css'
import images from "../images"

function Heading() {
    return(
        <section className="heading">
            <div className="left-side">
                <div className="top-btn">
                    <button>
                        Mihon & Aniyomi Extensions
                    </button>
                </div>
                <h1>
                    <span>Wotaku</span>
                    <br/>
                    The Otaku Index
                </h1>
                <div className="bottom-btns">
                    <a href="https://wotaku.wiki/qs">
                        <button className="active">browse</button>
                    </a>
                    <a href="https://github.com/asta7z/wotaku-react">
                        <button>github</button>
                    </a>
                    <a href="#not-yet">
                        <button>discord</button>
                    </a>
                </div>
            </div>
            <div className="right-side">
                <img src={images.banner} alt="banner" />
                <div className="glow-effect"></div>
            </div>
        </section>
    )
}

export default Heading