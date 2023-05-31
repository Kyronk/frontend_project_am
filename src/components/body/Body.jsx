import React from 'react'
import "./Body.scss";
const Body = () => {
    return (
        <>

            <div className="home_filter">
                <div className="home_filter_body">
                    <div className="home_filter_up">
                        <div className="filter_left">
                            <span>lọc cá nhân</span>  
                        </div>

                        <div className="filter_right">
                            <span>manifesto ....</span>
                        </div>
                    </div>


                    <div className="home_filter_down">

                        <div className="home_filter_contend">
                            <div className="home_filter_contend_l">
                                <h1>contend 1</h1>
                                <img src="https://mangadex.org/img/brand/mangadex-logo.svg" alt="" />
                            </div>

                            <div className="home_filter_contend_r">
                                <h1>contend 2</h1>
                                <i class="fa-solid fa-flag"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Body