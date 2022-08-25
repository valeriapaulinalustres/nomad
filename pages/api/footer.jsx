export default function nav(req, res) {
    res.json(
        {
            text: "Here we should have a few words about what and who the company is. This should serve well for SEO purposes.",
            title: "Contacta con nosotros",
            tel: "T: (054) 1234567",
            mail: "E: info@nomadperu.com.pe",
            greeting: "Gracias por scrollear :)",
            youtubeSrc: "https://youtube.com/",
            facebookSrc: "https://es-la.facebook.com/" ,
            twitterSrc: "https://twitter.com/?lang=es",
            instagramSrc: "https://instagram.com/",
            youtubeIcon: "/img/youtube-icon.png ",
            facebookIcon: "/img/facebook-icon.png",
            twitterIcon: "/img/twitter-icon.png",
            instagramIcon: "/img/instagram-icon.png",
            youtubeAlt: "Youtube",
            facebookAlt: "Facebook" ,
            twitterAlt: "Twitter",
            instagramAlt: "Instagram",
            nomad: "/img/logo.png",
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