let godskinView = {
    show: ()=> {
        $("#content-body").empty();
        $("#content-body").append(`
        <div class="character-page">
            <div class="side-image">
                <img src="/resources/Godskin\ Apostle\ 340x340.jpg" >
            </div>

            <div class="side-information">
             <p></p>High priests of the servants of shadows that took the skin of the former Dorgan the Devourer when he bursted into slime...
They now controll te servants of shadows.
            </div>
        </div>
        `);

        window.scrollTo(0,900);

        
}
}

export default godskinView