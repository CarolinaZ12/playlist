/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Stolen Dance","My Blood","Waiting for Love","Paradise","Sicko Mode","Nice for What"];
var images_links= ["https://www.youtube.com/watch?v=N2EVWDaGI4I&start_radio=1&list=RDMMN2EVWDaGI4I","https://www.youtube.com/watch?v=0a2ePzVCKuk&index=16&list=RDMMN2EVWDaGI4I","https://www.youtube.com/watch?v=jGkjPTJoxNo&list=RDMMN2EVWDaGI4I&index=24","https://www.youtube.com/watch?v=Q0TEUMPIhk8&list=RDMMN2EVWDaGI4I&index=30","https://www.youtube.com/watch?v=gRctGzbk6O4","https://www.youtube.com/watch?v=d-JBBNg8YKs"];
var artists = ["Milky Chance","Twenty One Pilots","Avicii","Coldplay","Travis Scott", "Drake"];
var songLinks = ["https://images-na.ssl-images-amazon.com/images/I/51P6txePs6L._SY355_.jpg","https://www.101x.com/sites/g/files/exi636/f/styles/large_730/public/article-images-featured/maxresdefault_1_0.jpg?itok=efsJxUng","https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Avicii%27s_Waiting_For_Love%2C_Cover_Artwork.png/220px-Avicii%27s_Waiting_For_Love%2C_Cover_Artwork.png","https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Coldplay_-_Paradise.JPG/220px-Coldplay_-_Paradise.JPG","https://i.ytimg.com/vi/d-JBBNg8YKs/maxresdefault.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Drake_Nice_for_What.png/220px-Drake_Nice_for_What.png"];

// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
