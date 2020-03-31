const releasejson = 'updates.json';
let VolumeKit;

(async function() {
  let VolumeKit = await fetch(releasejson).then(r => r.json());
  downloadLink = await VolumeKit.URL;
}());

function download() {
   window.open(downloadLink);
}
