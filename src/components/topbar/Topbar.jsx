import "./topbar.scss"
export default function Topbar({menuOpen, setMenuOpen}) {
    
    return (
        <div className = {  menuOpen ? 'topbar active' : 'topbar'}>
            <div className = "wrapper">
                <div className = "left">
                    <a href = "#intro" className = "logo"><span>R</span>ishabh.</a>
                    
                </div>
                <div className = "right">
                    <div className = "hamburger" onClick = {()=>setMenuOpen(!menuOpen)}>
                        <div className = "line1"></div>
                        <div className = "line2"></div>
                        <div className = "line3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
