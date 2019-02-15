var fs = require('fs')
var path = require('path')


//bikin file
var sub = "data ini akan masuk di file oke bro!"
///
function bikinFile(data) {
  fs.writeFile("warkop.txt",data, (err)=>{
    err ? console.log(err) : console.log("succes file di bikin");
  })

}

bikinFile(sub)


// baca files // warkop.txt adalah file yg di baca utf-8 jenisnya dan buff adalah value hasil baca dri warkop.srt nya
function bacaFile(filename) {
  ///
  fs.readFile(filename, "utf-8",(err, buf)=>{
    err ? console.log(err) : console.log(buf);
  })
  
}

bacaFile("warkop.txt")

//bikin auto create file srt berdasarkan file mp4
var path = __dirname
fs.readdir(path, function(err, items) {
    loop:
    for (i of items) {
        if (!i.includes(".mp4")){
          continue loop
        }
        // console.log(i)
        var toSrt = i.replace(/.mp4/g,".srt")
        var data = ""
        fs.writeFile(toSrt,data, (err)=>{
           err ? console.log(err) : console.log("succes file di bikin");
         })
    }
});
// console.log(path.dirname(__filename, '.mp4'))
//
console.log(__dirname);
console.log(__filename);
