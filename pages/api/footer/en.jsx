export default function nav(req, res) {
    res.json(
        {
            text: "Here describes about the website",
            title: "Contact us",
            tel: "T: (054) 1234567",
            mail: "E: info@cris.com.ar",
            greeting: "Thanks for scrolling :)",
            youtubesrc: "https://youtube.com/",
            facebooksrc: "https://es-la.facebook.com/",
            twittersrc: "https://twitter.com/?lang=es",
            instagramsrc: "https://instagram.com/",
            youtubeicon: "/img/youtube-icon.png ",
            facebookicon: "/img/facebook-icon.png",
            twittericon: "/img/twitter-icon.png",
            instagramicon: "/img/instagram-icon.png",
            youtubealt: "Youtube",
            facebookalt: "Facebook",
            twitteralt: "Twitter",
            instagramalt: "Instagram",
            nomad: "/img/nomadLogo.jpg",
            nomadAlt: "Logo de Nomad",
        },
    )
}