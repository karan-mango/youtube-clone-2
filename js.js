const key = "AIzaSyCJXqG7HSWcQl7Njwe2oTEE2GMw89teuLE";
const wrapper = document.querySelector('.cards_wrapper');

fetch('output.json')
  .then((res) => res.json())
  .then((d1) => {
    d1.items.forEach((e) => {
      const title = e.snippet.title;
      const thumbnailUrl = e.snippet.thumbnails.medium.url;
      const channel = e.snippet.channelTitle;
      const daysAgo = e.snippet.publishedAt;

      // Create a new thumbnail element for each card
      const thumbnailElement = document.createElement('div');
      thumbnailElement.classList.add('thumbnail');

      const htmlContent = `
        <div class="card-items">
          ${thumbnailElement.outerHTML} 
          <div class="title">${title}</div>
          <div class="channel">${channel}</div>
          <div class="details">1m &nbsp; &bull; ${daysAgo}</div>
        </div>
      `;

      wrapper.insertAdjacentHTML('beforeend', htmlContent);

      // Update the background image for the newly created thumbnail element
      const c1 = wrapper.lastElementChild.querySelector('.thumbnail');
      c1.style.background = `url("${thumbnailUrl}")`;
    });
    console.log(d1);
  });





  const side_slider=document.querySelector('.side-slider');
  let side_bar_closed=true;



  function f1(){
    console.log(side_bar_closed)
      if(side_bar_closed){
        side_slider.style.left=0+'px'
        side_bar_closed=!side_bar_closed;

      }
      else{
        side_slider.style.left=-240+'px'
        side_bar_closed=!side_bar_closed;
      }
  }



  // fro implement the side bar to disapper after clicking anywhrer int eh screen 

// let menu=document.querySelector('.menu')
// let side_sliderid=document.querySelector("#side-slider")
// document.addEventListener('click', (event) => {
//   console.log(event.target)
//   if (!side_sliderid.contains(event.target) && !side_bar_closed) {
//     side_bar_closed = !side_bar_closed;
//     side_slider.style.left = 240 + 'px';
//   }
// });
// from chat


// console.log(33)


// from chat above
  // document.addEventListener('click', (event) => {
  //       if(event.target!=side_slider&& !side_bar_closed && event.target!=menu){
  //         side_bar_closed=!side_bar_closed;


  //         console.log(345)
  //       }
  // })