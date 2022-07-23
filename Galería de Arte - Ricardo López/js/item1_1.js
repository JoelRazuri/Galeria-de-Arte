document.addEventListener("DOMContentLoaded", function(){
    const items = document.querySelectorAll(".item_gallery");
    // console.log(items);
    let youtube_id = '';
    for(let i = 0; i < items.length; i++) {
      const item = items[i];
      item.addEventListener("click", function() {
          let image = this.children[0];
          let span = this.children[1];
          let video = this.children[2]; 

          let youtube_id = image.getAttribute('data-id');
        //   console.log(youtube_id);
          span.classList.add("active");

          let container = this.parentElement;

          let siblings = container.children;
          siblings = [].slice.call(siblings);
          siblings = siblings.filter( element => element !== item );

          for (let i = 0; i < siblings.length; i++) {
            let span = siblings[i].children[1];
            span.classList.remove("active");
          }
          let newURL = `https://www.youtube.com/embed/${youtube_id}`;
        //   console.log(newURL);
          let video_id = document.getElementById("video_id").src=`${newURL}`;
        //   console.log(video_id);
      })
    }
})







