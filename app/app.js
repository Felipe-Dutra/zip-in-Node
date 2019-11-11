var fs = require("fs");
var JSZip = require("jszip");
 
var zip = new JSZip();
 

zip.file("Hello.txt", "Hello World welcome FMU\n");
 

var img = zip.folder("images");
 

imgData = 'R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7';
 

img.file("star.gif", imgData, {base64: true});
 

zip.generateNodeStream({type:'nodebuffer',streamFiles:true})
   .pipe(fs.createWriteStream('out.zip'))
   .on('finish', function () {
       
       console.log("out.zip written.");
    });