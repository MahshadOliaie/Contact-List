import './skeletonUi.css'

function SkeletonUi() {
    return (
        <div className="userCard">
            <div className="img"><div className="divImg"></div></div>
            <div className="about">
                <div className="divTitle title"></div>
                <div className="divTitleInfo titleInfo"></div>
            </div>
            <div className="icons">
                <div className="divIcon"></div>
                <div className="divIcon"></div>
                <div className="divIcon"></div>
                <div className="divIcon"></div>
                <div className="divIcon"></div>
            </div>
        </div>
    )
}


export default SkeletonUi;