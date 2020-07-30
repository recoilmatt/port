import React from 'react'

const Tabs = (props) => (
    <div className="inner" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"}}>
            
     
         <div className="link" style={{
                paddingRight: "1em"}}>
            <a href="/">
                <span>Home</span></a>
        </div>

        <div className="link" style={{
                paddingRight: "1em"}}>
            <a href="/applied">
                <span>Applied Medical</span></a>
        </div>

        <div className="link" style={{
                paddingRight: "1em"}}>
            <a href="/wander">
                <span>Wander</span></a>
        </div>

        <div className="link" style={{
                paddingRight: "1em"}}>
            <a href="/golden">
                <span>Golden Vision Optometry</span></a>
        </div>

        <div className="link" style={{
                paddingRight: "1em"}}>
            <a href="/examwriter">
                <span>ExamWriter</span></a>
        </div>

        <div className="link" style={{
                paddingRight: "1em"}}>
            <a href="/misc">
                <span>Misc Projects</span></a>
        </div>


        
    </div>
)

export default Tabs
