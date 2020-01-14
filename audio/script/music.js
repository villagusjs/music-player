var jsMusic = [
    {
        "title":"Angeles Fuimos",
        "singer":"Adrian Barba",
        "path":"http://localhost/audio/bucket/Angeles_Fuimos.mp3",
 //       "path2":"file:///C:/Users/andre/Desktop/audio/bucket/Angeles_Fuimos.mp3"
    },
    {
        "title":"Detroit Rock City",
        "singer":"Kiss",
        "path":"http://localhost/audio/bucket/detroit_rock_city.mp3"
    },
    {
        "title":"Greensleeves",
        "singer":"The Kings Singer",
        "path":"http://localhost/audio/bucket/greensleeves.mp3"
    },
    {
        "title":"Sobakasu",
        "singer":"Samurai X",
        "path":"http://localhost/audio/bucket/sobakasu.mp3"
    },
    {
        "title":"13 No Junjou Na Kanjou",
        "singer":"Siam Shade",
        "path":"http://localhost/audio/bucket/13_No_Junjou_Na_Kanjou.mp3"
    },
    {
        "title":"Stayin A Live",
        "singer":"Bee Gee",
        "path":"http://localhost/audio/bucket/stayin_a_live.mp3"
    },
    {
        "title":"Thriller",
        "singer":"Michel Jackson",
        "path":"http://localhost/audio/bucket/thriller.mp3"
    },
    {
        "title":"Harder Better Faster Stronger",
        "singer":"Daft Punk",
        "path":"http://localhost/audio/bucket/Harder-Better-Faster-Stronger.mp3"
    },
    {
        "title":"Side To Side",
        "singer":"Ariana Grande ft Nicki Minaj",
        "path":"http://localhost/audio/bucket/sideToSide.mp3"
    },
    {
        "title":"High",
        "singer":"Rawayana ft. Apache",
        "path":"http://localhost/audio/bucket/High.mp3"
    }
    
];

function getList() {
    var output = "";
    var cont = 1;
    var data = jsMusic;

    for (var i in data) {
        console.log(data[i])

        output += "<tr>"+
                "<td>"+ cont++  +"</td>"+
                "<td>"+ data[i].title +"</td>"+
                "<td>"+
                    "<button class='btnMusic' onclick='playMusic("+ JSON.stringify(data[i]) +")'> Tocar </button>"+
                "</td>"+
            "</tr>";
    }

    document.getElementById("tbody").innerHTML = output;

}

function playMusic(music) {
    var player = document.getElementById("player");

    document.querySelector("#ti").innerHTML = music.title;
    document.querySelector("#ar").innerHTML = music.singer;

    player.src = music.path;
    player.play();    
}
