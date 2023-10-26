// window.onload = function(){
const downloadBtn = document.getElementById('download');
const brochureContainer = document.getElementById('brochure-container');
const brochureCloseBtn = document.getElementById('brochure-close');
const viewerContainer = document.getElementById('viewer-container');
const viewerApartments = document.getElementById('viewer-apartments');
const viewerMansions = document.getElementById('viewer-mansions');
const viewerPark = document.getElementById('viewer-park');
const viewerRoad = document.getElementById('viewer-road');
const apartments = document.getElementById('apartments');
const mansions = document.getElementById('mansions');
const park = document.getElementById('park');
const road = document.getElementById('road');
const viewerClose = document.getElementById('viewer-close');

// open brochure on click
downloadBtn.onclick = function(){
    brochureContainer.style.display = "flex";
  };

//close brochure on click
brochureCloseBtn.onclick = function(){
  brochureContainer.style.display = 'none'
}

// close viewer
viewerClose.onclick = function(){
  viewerContainer.style.display = 'none'
  viewerApartments.style.display = 'none'
  viewerMansions.style.display = 'none'
  viewerPark.style.display = 'none'
  viewerRoad.style.display = 'none'

}

//open apartments viewer
apartments.onclick = function(){
  viewerContainer.style.display = "flex";
  viewerApartments.style.display = "flex";
};

//open mansions viewer
mansions.onclick = function(){
  viewerContainer.style.display = "flex";
  viewerMansions.style.display = "flex";
};

//open park viewer
park.onclick = function(){
  viewerContainer.style.display = "flex";
  viewerPark.style.display = "flex";
};

//open road viewer
road.onclick = function(){
  viewerContainer.style.display = "flex";
  viewerRoad.style.display = "flex";
};
