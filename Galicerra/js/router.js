import homeView from "./home-view.js"
import gabrielView from "./gabriel-solis.js"
import gilvanView from "./gilvan-view.js";
import dorganView from "./dorgan-view.js";
import gaioView from "./gaio-view.js";
import godskinView from "./godskin-view.js";
import godwinView from "./godwin-view.js";
import goliahview from "./goliah-view.js";
import grimlightView from "./grimlight-view.js";
import sunnaView from "./sunna-view.js";


let router;

router= {
    routes:{
        home:{
            hash: "#home",
            view: homeView
        },
        gabrielSolis:{
            hash:"#gabriel-solis",
            view: gabrielView
        },
        dorganDevourer:{
            hash:"#dorgan",
            view:dorganView
        },
        gaio:{
            hash:"#gaio",
            view:gaioView
        },
        gilvanGrafted:{
            hash:"#gilvan",
            view:gilvanView
        },
        godskin:{
            hash:"#godskin",
            view:godskinView
        },
        godwin:{
            hash:"#godwin",
            view:godwinView
        },
        goliah:{
            hash:"#goliah",
            view:goliahview
        },
        grimlight:{
            hash:"#grimlight",
            view:grimlightView
        },
        sunna:{
            hash:"#sunna",
            view:sunnaView
        }

    },


    start: () =>{
        router.routes.home.view.show();
        $(window).on("hashchange", ()=>{
            try{
                router.getRoute(router.routes)
            }
            catch(err){
                window.location.hash= "#home";
                router.routes.home.view.show();
            }
        })
    },

    getRoute: (routes) => {
        let obj = Object.values(routes).find((route) => route.hash === window.location.hash);
        obj = obj === undefined ? router.routes.home : obj;
        window.location.hash = obj.hash;
        obj.view.show();
    }
}

export default router;