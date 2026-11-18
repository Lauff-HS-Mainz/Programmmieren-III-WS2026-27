//Das hier weird die eigebtkiche seite mit den bausteinen aus dem componets ordern.
import Formular from "./_components/formular";
import Header from "./_components/header";


export default function Page(){
    return(
        <main>
            <Header></Header>
            <br />

            <div>
                <Formular></Formular>
            </div>
            <br />
        
        </main>
    );
}