let gaioView  = {
    show: ()=> {
        $("#content-body").empty();
        $("#content-body").append(`
        <div class="character-page">
            <div class="side-image">
                <img src="/resources/Gaio 340x340.jpg" >
            </div>

            <div class="side-information">
             <p></p>Gaio, Son of Goliah, was the prince of Strale and sub-captain of the Night Watchers. He and his father would often stroll out of the city with the night watchers to kill and question the servants of shadows.
<p>Gaio was infected with shadow by one of the cultists and they were looking for a cure.
Goliah often gave part of his soul to prevent Gaio from turning to a shadow.

<p>Distressed, feeling like a burden to his father and to the Night Watchers, Gaio let his condition evolve without telling anyone, eventually turning to a shadow.
At the time he turned , he became berserk and stared killing his comrades. Trying to stop it, Goliah shared his soul but that only strengthen the Shadow.

<p>Now Gaio roams the forest where he was turned, fighting the eternal bodies and shadows of the Night Watchers.
</div>
        </div>
        `);

        window.scrollTo(0,900);

        
}
}

export default gaioView;