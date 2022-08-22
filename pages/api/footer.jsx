export default function nav(req, res) {
    res.json(
        {
            text: "Here we should have a few...",
            title: "Contacta con nosotros",
            tel: "(054) 1234567",
            mail: "info@nomadperu.com.pe",
            greeting: "Gracias por scrollear :)",
            youtubeSrc: "https://youtube.com/",
            facebookSrc: "https://es-la.facebook.com/" ,
            twitterSrc: "https://twitter.com/?lang=es",
            instagramSrc: "https://instagram.com/",
            youtubeIcon: " ",
            facebookIcon: "../../public/img/youtube-icon.png",
            twitterIcon: "../../public/img/youtube-icon.png",
            instagramIcon: "../public/img/youtube-icon.png",
            youtubeAlt: "Youtube",
            facebookAlt: "Facebook" ,
            twitterAlt: "Twitter",
            instagramAlt: "Instagram",
            nomad: "",
            nomadAlt: "Logo de Nomad",
        },
    )
}
/*
 social: [
                { icon: "<div>Hola</div>", src: "https://youtube.com/" },
                { icon: "facebook", src: "https://es-la.facebook.com/" },
                { icon: "<div></div>", src: "https://twitter.com/?lang=es" },
                { icon: "<div></div>", src: "https://instagram.com/" },]
                */