/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Stolen Dance","My Blood","Waiting for Love","Paradise","Sicko Mode","Nice for What"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var songsLinks= ["https://www.youtube.com/watch?v=N2EVWDaGI4I&start_radio=1&list=RDMMN2EVWDaGI4I","https://www.youtube.com/watch?v=0a2ePzVCKuk&index=16&list=RDMMN2EVWDaGI4I","https://www.youtube.com/watch?v=jGkjPTJoxNo&list=RDMMN2EVWDaGI4I&index=24","https://www.youtube.com/watch?v=Q0TEUMPIhk8&list=RDMMN2EVWDaGI4I&index=30","https://www.youtube.com/watch?v=gRctGzbk6O4","https://www.youtube.com/watch?v=d-JBBNg8YKs"];
var artists = ["Milky Chance","Twenty One Pilots","Avicii","Coldplay","Travis Scott", "Drake"];
var imagesLinks= ["https://assets.audiomack.com/alejob333/milky-chance-stolen-dance-album-version-275-275-1545684324.jpg","https://www.101x.com/sites/g/files/exi636/f/styles/large_730/public/article-images-featured/maxresdefault_1_0.jpg?itok=efsJxUng","https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Avicii%27s_Waiting_For_Love%2C_Cover_Artwork.png/220px-Avicii%27s_Waiting_For_Love%2C_Cover_Artwork.png","https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Coldplay_-_Paradise.JPG/220px-Coldplay_-_Paradise.JPG","https://i.ytimg.com/vi/d-JBBNg8YKs/maxresdefault.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Drake_Nice_for_What.png/220px-Drake_Nice_for_What.png"];
var lengths=["5 min 13 sec","3 min 50 sec","3 min 50 sec","4 min 38 sec","5 min 14 sec","3 min 31 sec"];
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    
function displayList(){ 
    songs.forEach(function(element){
    $("#songs").append("<li>"+element+"</li>");
    
});
imagesLinks.forEach(function(element2){
    $("#images").append("<img src="+ element2+">");
});
artists.forEach(function(element3){
    $("#artists").append("<li>"+element3+"</li>");
    
});
lengths.forEach(function(element4){
    $("#lengths").append("<li>"+element4+"</li>");
    
});
songsLinks.forEach(function(element5){
    $("#links").append("<a href="+element5+">"+"Listen to this bop!"+"</a");
    
});
};

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}
    
function addSongInfo(){
    // Use jQuery to empty all of the remaining divs
  var userInput = $("#song").val();
         songs.push(userInput);
    var userInput2 = $("#artist").val();
         artists.push(userInput2);
    var userInput3 = $("#length").val();
         lengths.push(userInput3);
    var userInput4 = $("#image").val();
         imagesLinks.push(userInput4);
    var userInput5 = $("#link").val();
         songsLinks.push(userInput5);

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    console.log(songs[0]);
   displayList();
});

displayList();
