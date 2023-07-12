import image01 from "./activities/image 22.png"
import image02 from "./activities/image 23.png"
import image03 from "./activities/image 24.png"
import image04 from "./activities/image 25.png"
import image05 from "./activities/image 26.png"
import image06 from "./activities/image 27.png"
import image07 from "./activities/image 28.png"
import image08 from "./activities/image 29.png"
import image09 from "./activities/image 30.png"

export default function Activities() {
    return (
        <div className="Activities-all">
            <div className="Activities-column" style={{
                marginTop:'48px',
            }}>
                <img src={image07} alt ='altImage' className="Activity"></img>
            </div>

            <div className="Activities-column" style={{
                marginTop:'5px',
            }}>
                <img src={image09} alt ='altImage' className="Activity"></img>
                <img src={image05} alt ='altImage' className="Activity"></img>
            </div>
            
            <div className="Activities-column" style={{
                marginTop:'30px',
            }}>
                <img src={image06} alt ='altImage' className="Activity"></img>
                <img src={image08} alt ='altImage' className="Activity"></img>
            </div>

            <div className="Activities-column" style={{
                marginTop:'0px',
            }}>
                <img src={image01} alt ='altImage' className="Activity"></img>
                <img src={image02} alt ='altImage' className="Activity"></img>
            </div>

            <div className="Activities-column" style={{
                marginTop:'20px',
            }}>
                <img src={image04} alt ='altImage' className="Activity"></img>
                <img src={image03} alt ='altImage' className="Activity"></img>
            </div>
            
            {/* <img src={image01} alt ='image01'></img>
            <img src={image02} alt ='image01'></img>
            <img src={image03} alt ='image01'></img>
            <img src={image04} alt ='image01'></img>
            <img src={image05} alt ='image01'></img>
            <img src={image06} alt ='image01'></img>
            <img src={image07} alt ='image01'></img>
            <img src={image08} alt ='image01'></img>
            <img src={image09} alt ='image01'></img> */}
        </div>
    );
}