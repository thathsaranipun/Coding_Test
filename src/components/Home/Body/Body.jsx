import BodySection1 from "./BodySection1";
import BodySection2 from "./BodySection2";
import BodySection3 from "./BodySection3";
import BodySection4 from "./BodySection4";

function Body() {
    return ( 
        <div className="container-fluid">
            <div className="container-fluid">
            <BodySection1 />
            <BodySection2 />
            <BodySection3 />
            <BodySection4 />
            </div>
        </div>
     );
}

export default Body;