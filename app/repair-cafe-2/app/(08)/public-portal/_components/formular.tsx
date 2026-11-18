
export default function Formular(){
    return (
        //action ertmal platzhalter.
        <form className="text-white text-center" action={"regis.tsx"} method="POST">
            <label id="device">Gerät:</label>
            <br />
        
            <input className="border border-white" id="davicename"
            placeholder="Davice Name"
            />
            <p>z.B. PS5, Lampe etc.</p>
            <br />
            <p>Was ist kaput?</p>
            <input className="border border-white" type="text" 
            id="problem" 
            placeholder="z.B. Die Taste..."
            />
            <br />

            <div>
                <div>
                <input type="radio"
                id="anrede1"
                value="Herr"
                />
                <label htmlFor="anrede1">Männlich</label>
                </div>
                <br />

               <div>
                <input type="radio"
                id="anrede2"
                value="Frau"
                />
                <label htmlFor="anrede2">Weiblich</label>
               </div>
                <br />

                <div>
                <input type="radio"
                id="anrede3"
                value="Divers"
                />
                <label htmlFor="anrede3">Divers</label>
                </div>
                <br />

                <div>
                <input type="radio"
                id="anrede4"
                value="Keine Angaben"
                />
                <label htmlFor="anrede4">Keine Angabe</label>
                </div>
                <br />

                <label id="userfirstname">Vorname:</label>
                <br />
                <input className="border border-white" id="davicename" type="text"/>
                <br />
                <label>Nachname:</label>
                <br />
                <input className="border border-white" id="userlastname" type="text"/>
                <br />
                <label>Email</label>
                <br />
                <input className="border border-white" id="usermail" type="text"/>



            </div>
            <br />

            <input className="border border-white rounded-lg" type="submit"></input>
        </form>
    );
}