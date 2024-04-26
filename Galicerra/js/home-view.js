let homeView = {
    show: ()=> {

        $("#content-body").empty();
        $("#content-body").append(`
        <grid id="grid-container">
            <div class="info-box" id="gabriel-solis-box" style="background-image:url(/resources/gabriel\ 340x340.jpg)" >
                <div class="inner-info-box">
                    <div class="box-header"> <h1>Gabriel Solis</h1></div><p>

                    <div class="box-body">Leader of the Golden Bastards </div>
                </div>
            </div> 

            <div class="info-box" id="gilvan-box" style="background-image:url(/resources/Gilvan\ 340x340.jpg)" >
                <div class="inner-info-box">
                    <div class="box-header"> <h1>Gilvan the Grafted</h1></div><p>

                    <div class="box-body">Descendt of the royal family, he is a semi god of sorts. 
                        He didn't receive much sould from his heritage and as so he wasn't much different from a normal person. Until he started grafting...</div>
                </div>
            </div>
            <div class="info-box" id="godwin-box" style="background-image:url(/resources/Godwin\ 340x340.jpg)">
                <div class="inner-info-box">
                    <div class="box-header"> <h1>Godwin the Golden</h1></div><p>

                    <div class="box-body">Godwin, the ruler of Loran, was the King that harnessed and shared the power of the Sun. With this, he defeated the Primordial Dragons. Before the war was over, Godwin delegated his chosens and then returned his soul to the Sun, reigniting it.</div>
                </div>
            </div>
            <div class="info-box" id="dorgan-box" style="background-image:url(/resources/Dorgan\ 340\ x\ 340.jpg)" >
                <div class="inner-info-box">
                    <div class="box-header"> <h1>Dorgan the Devourer</h1></div><p>

                    <div class="box-body">Once the High Priest of Loran, known as Dorgan the Divine, and High Lord of the Servants of Light, he was corrupted by the Shadow. 
                    </div>
                </div>
            </div>
            <div class="info-box" id="goliah-box" style="background-image:url(/resources/Goliah\ 340x340.jpg)">
                <div class="inner-info-box">
                    <div class="box-header"> <h1>Goliah The Lightbringer</h1></div><p>

                    <div class="box-body">A god capable of manifesting sunlight's, former ruler of Strale</div>
                </div>
            </div>
            <div class="info-box" id="sunna-box" style="background-image:url(/resources/Sunna\\ 340x340.jpg)">
                <div class="inner-info-box">
                    <div class="box-header"> <h1>Sunna</h1></div><p>

                    <div class="box-body">Primordial Light and Source of all Life, First God, Primordial God</div>
                </div>
            </div>
            <div class="info-box" id="grimlight-box" style="background-image:url(/resources/Grimlight\\ 340x340.jpg)">
                <div class="inner-info-box"> 
                    <div class="box-header"> <h1>Nameless Prince</h1></div><p>

                    <div class="box-body">Son of Godwin, sent to destroy the Dragons, eventually siding with them.
                        This betrayal stripped him of his "Godly" status although his power remains intact.
                        He was erased from history, and his legacy forgotten. Since no one remembers his name he is referred as the Nameless Prince.</div>
                </div>
            </div>
            <div class="info-box" id="gaio-box" style="background-image:url(/resources/Gaio\ 340x340.jpg)">
                <div class="inner-info-box">
                    <div class="box-header"> <h1>Gaio The Fallen</h1></div><p>

                    <div class="box-body">Son of Golia, was corrupted by the shadows and slaughtered all the night watchers.</div>
                </div>
            </div>
            <div class="info-box" id="godskin-box" style="background-image:url(/resources/Godskin\ Apostle\ 340x340.jpg)">
                <div class="inner-info-box">
                    <div class="box-header"> <h1>Godskin Apostle</h1></div><p>

                    <div class="box-body">High priests of the servants of shadows that took the skin of the former Dorgan the Devourer when he bursted into slime...
                        They now controll te servants of shadows.</div>
                </div>
            </div>
        </grid>

        `);

        window.scrollTo(0,700);
        
        $("#gabriel-solis-box").on("click", () => {
            window.location.hash = "gabriel-solis";
        });  
         
        $("#gilvan-box").on("click",()=>{
            window.location.hash= "gilvan";
        });

        $("#gaio-box").on("click",()=>{
            window.location.hash= "gaio";
        });

         $("#dorgan-box").on("click",()=>{
            window.location.hash= "dorgan";
        });

         $("#godskin-box").on("click",()=>{
            window.location.hash= "godskin";
        });

         $("#godwin-box").on("click",()=>{
            window.location.hash= "godwin";
        });

         $("#goliah-box").on("click",()=>{
            window.location.hash= "goliah";
        });

         $("#grimlight-box").on("click",()=>{
            window.location.hash= "grimlight";
        });
         $("#sunna-box").on("click",()=>{
            window.location.hash= "sunna";
        });


    }
} 
export default homeView;