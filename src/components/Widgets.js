import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Widgets() {

    const newArticle = (heading, subtitle) => (
        <div className="widgets_article">

            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newArticle("Resume tips: Highlight soft skills", "234 readers")}
            {newArticle("Hustle culture is so 2020", "394 readers")}
            {newArticle("Amazon copies items, rigs search: Rpt", "405 readers")}
            {newArticle("Get noticed by a recruiter", "780 readers")}
            {newArticle("Stop sacrificing tomorrow for today", "245 readers")}

        </div>
    )
}
