import { useEffect } from "react";
import { ScrambleDisplay } from "scramble-display";

function CubeVisual({
    scrambleCreated,
}:{
    scrambleCreated: string,
}){
    useEffect(() => {
        const scrambleEl = new ScrambleDisplay;
        if (scrambleEl) {
          scrambleEl.scramble = scrambleCreated;
          scrambleEl.visualization = "3D";
          scrambleEl.setAttribute("checkered", "");
        }

        document.body.appendChild(scrambleEl);

        return () => {
            if(scrambleEl) {
                document.body.removeChild(scrambleEl);
            }
        };
    }, [scrambleCreated]);

    return  <div></div>
}

export default CubeVisual;