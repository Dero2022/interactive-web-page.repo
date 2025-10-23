const videoBox = [
    {
        videos: 'Youtube images/hq720 (1).avif',
        duration: '14:22:33',
        channelLogo: 'Youtube images/channel3.jpg',
        videoDescription : 'Html and CSS Full course',
        channelOwner: 'simple dev',
        Time:{
            videoViews: '16M views',
            uploadTime: '2 years ago',
        },


    }   
    
];

videoBox.forEach ((video) => {
    
   const html = `
    <div class="grid-item1">
            <img class="image1" src="${video.videos}" alt="html">

           <div class="duration1">
            <span>${video.duration}</span>
           </div>
           <img src="${video.channelLogo}" alt="V1">

        <div style="padding-left: 80px; display: inline-block;"><p style="font-weight: 700; align-self: auto; ">${video.videoDescription}</p> 
                 <p style="font-weight: 700;">${video.channelOwner}</p>
                 <p>${video.Time.videoViews} views&#46; ${video.Time.uploadTime}</p>
        </div>
        </div>`

        console.log(html);
        })