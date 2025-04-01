import React from "react";
import '../SearchBtn/SearchBtn.css'

function SearchBtn() {
    return(
        <button className="search">
            <span>
                <i className="fal fa-search"></i>
                search
            </span>
            <div>Ctrl K</div>
        </button>
    )
}

export default SearchBtn;