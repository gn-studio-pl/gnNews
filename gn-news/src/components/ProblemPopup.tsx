import React from "react";

export function ProblemPopup(props: any){
    return (props.trigger) ? (
        <div className="popup">
            <div className="problem-popup-inner">
                Największe problemy: 
                <p>-Zastanawiałem się, czy wczytane newsy również przechowywać za pomocą reduxa, ale wybrałem inne rozwiązanie.</p>
                <p>-Sporo czasu zajęło mi zwalczenie buga spowodowanego błędnym podłączeniem reduxa do reacta</p>
                <p>-Starałem się też wykonać zadanie w sugerowanych ramach czasowych, przez co nie starczyło czasu m.in. na testy</p>
                <p>-Problemem był też pomysł na design, (mam nadzieję że oczy nie bolą od patrzenia)</p>
                <button onClick={props.close}>close</button>
            </div>
        </div>
    ) : <></>
}