const PDFMerger = require('pdf-merger-js');


const lastfile=async (f1,f2) => {
  var merger = new PDFMerger();
  await merger.add(f1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(f2);  //merge all pages. parameter is the path to file and filename.
  let d=new Date().getTime()
   merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
    return d
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports={lastfile}