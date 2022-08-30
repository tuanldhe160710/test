const a = document.querySelector.bind(document);
const aa = document.querySelectorAll.bind(document);

const heading = a('.songName .name');
const author = a('.songName .author');
const cdThumbs = a('.cd');
const audio = a('#audio');
const prevBtn = a('#btn-prev');
const nextBtn = a('#btn-next');
const ranBtn = a('#random-btn');
const repeatBtn = a('#repeat-btn');
const playlist  = a('.playlist');

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
          name: "Tu Phir Se Aana",
          singer: "Raftaar x Salim Merchant x Karma",
          path: "./music/audio/K-391-Summertime-Sunshine-K391.mp3",
          image: "./music/img/4b5895ae60825aaea0203801b325b5e4.jpg"
        },
        {
          name: "Naachne Ka Shaunq",
          singer: "Raftaar x Brobha V",
          path:
            "./music/audio/Lemon-Tree-Remix-DJ.mp3",
          image: "./music/img/a33b8a4501928ad324012da757f087ae.jpg"
        },
        {
          name: "Aage Chal",
          singer: "Raftaar",
          path: "./music/audio/Reality-Lost-Frequencies-Janieck-Devy.mp3",
          image:
            "./music/img/b04e6323cbcb616a65ee6261b5de27d9.jpg"
        },
        {
          name: "Damn",
          singer: "Raftaar x kr$na",
          path:
            "./music/audio/TheFatRat-feat-Laura-Brehm-The-Calling.mp3",
          image:
            "./music/img/c91a36f1dbdd12b3f9537fc662cb51de.jpg"
        },
        {
          name: "Feeling You",
          singer: "Raftaar x Harjas",
          path: "./music/audio/Vicetone-Nevada-Remix.mp3",
          image:
            "./music/img/ce3ea20afae0479f4b792539e1626c92.jpg"
        },
        {
            name: "Tu Phir Se Aana1",
            singer: "Raftaar x Salim Merchant x Karma",
            path: "./music/audio/K-391-Summertime-Sunshine-K391.mp3",
            image: "./music/img/4b5895ae60825aaea0203801b325b5e4.jpg"
          },
          {
            name: "Naachne Ka Shaunq1",
            singer: "Raftaar x Brobha V",
            path:
              "./music/audio/Lemon-Tree-Remix-DJ.mp3",
            image: "./music/img/a33b8a4501928ad324012da757f087ae.jpg"
          },
          {
            name: "Aage Chal1",
            singer: "Raftaar",
            path: "./music/audio/Reality-Lost-Frequencies-Janieck-Devy.mp3",
            image:
              "./music/img/b04e6323cbcb616a65ee6261b5de27d9.jpg"
          },
          {
            name: "Damn1",
            singer: "Raftaar x kr$na",
            path:
              "./music/audio/TheFatRat-feat-Laura-Brehm-The-Calling.mp3",
            image:
              "./music/img/c91a36f1dbdd12b3f9537fc662cb51de.jpg"
          },
          {
            name: "Feeling You1",
            singer: "Raftaar x Harjas",
            path: "./music/audio/Vicetone-Nevada-Remix.mp3",
            image:
              "./music/img/ce3ea20afae0479f4b792539e1626c92.jpg"
          },
          {
            name: "Tu Phir Se Aana2",
            singer: "Raftaar x Salim Merchant x Karma",
            path: "./music/audio/K-391-Summertime-Sunshine-K391.mp3",
            image: "./music/img/4b5895ae60825aaea0203801b325b5e4.jpg"
          },
          {
            name: "Naachne Ka Shaunq2",
            singer: "Raftaar x Brobha V",
            path:
              "./music/audio/Lemon-Tree-Remix-DJ.mp3",
            image: "/.music/img/a33b8a4501928ad324012da757f087ae.jpg"
          },
          {
            name: "Aage Chal2",
            singer: "Raftaar",
            path: "./music/audio/Reality-Lost-Frequencies-Janieck-Devy.mp3",
            image:
              "./music/img/b04e6323cbcb616a65ee6261b5de27d9.jpg"
          },
          {
            name: "Damn2",
            singer: "Raftaar x kr$na",
            path:
              "./music/audio/TheFatRat-feat-Laura-Brehm-The-Calling.mp3",
            image:
              "./music/img/c91a36f1dbdd12b3f9537fc662cb51de.jpg"
          },
          {
            name: "Feeling You2",
            singer: "Raftaar x Harjas",
            path: "./music/audio/Vicetone-Nevada-Remix.mp3",
            image:
              "./music/img/ce3ea20afae0479f4b792539e1626c92.jpg"
          }
    ],
    
    renderHTML: function(){
        var htmls = this.songs.map((song, index) => {
            return `<div class="song ${
              index === this.currentIndex ? "active" : ""
            }" data-index="${index}">
            <div class="thumb" style="background-image: url(${song.image})">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author-song">${song.singer}r</p>
            </div>
          </div>`
        })

        a('.playlist').innerHTML = htmls.join('');
    },

    difineProperties: function(){
      Object.defineProperty(this, 'currentSong', {
        get: function(){
          return this.songs[this.currentIndex]
        }
      })
    },

    handleScreen: function(){
        const _this = this;
        const cd = a('.cd');
        const cdWidth = cd.offsetWidth;
        const playBtn = a('#play-btn');
        const progressBtn = a('#progress-btn');
        // Handle the screen zoom level
        document.onscroll = function(){
            var avai = window.scrollY || document.documentElement.scrollTop;
            cd.style.width = (cdWidth - avai) > 0 ?(cdWidth - avai) +"px" : 0 +"px";
            cd.style.height = (cdWidth - avai) > 0 ?(cdWidth - avai) +"px" : 0 +"px";
            // console.log(cd.style.width)

            cd.style.opacity = (cdWidth - avai) / cdWidth;
        };

        // Handle play songs
        playBtn.addEventListener('click', function(){
          if(_this.isPlaying){
            audio.pause();
          }else{
            audio.play();
          }
        });


        audio.onplay = function(){
          playBtn.classList.remove('fa-circle-play');
          playBtn.classList.add('fa-circle-pause');
          _this.isPlaying = true;
          animate.play();
          // _this.activeSong();
        };

        audio.onpause = function(){
          playBtn.classList.remove('fa-circle-pause');
          playBtn.classList.add('fa-circle-play');
          _this.isPlaying = false;
          animate.pause();
        };
        // console.log(audio.);

        audio.ontimeupdate = function(){
          var percent = audio.currentTime / audio.duration;
          progressBtn.value = percent * 100; 
        };

        // Handle when user want to seek audio
        progressBtn.onchange = function(e){
         audio.currentTime = (e.target.value / 100) * audio.duration;
        };

        // Handle cd 
        const animate = cd.animate([
          { transform: 'rotate(360deg)'}
        ], {
          duration: 10000,
          interations: Infinity
        })
        animate.pause();

        //next songs
        nextBtn.onclick = function(){
          if(_this.isRandom) {
            _this.randomNextSong();
          }else{
            _this.nextSong();
          }
          audio.play();
          _this.renderHTML();
          _this.scrollToView();
        };
        // console.log(nextBtn);

        // prev songs
        prevBtn.onclick = function(){
          if(_this.isRandom) {
            _this.randomNextSong();
          }else{
            _this.prevSong();
          }
          audio.play();
          _this.renderHTML();
          _this.scrollToView();
        };

        //random songs
        ranBtn.onclick = function(){
          app.isRandom = ! (app.isRandom);
          if(_this.isRandom){
            ranBtn.style.color = '#EF3A7A'
          }else{
            ranBtn.style.color = '#a3aecc'
          }
        };

        //audio ended
        audio.onended = function(){
          if(_this.isRepeat){
            audio.play();
          }else{
            nextBtn.click();
          }
        };

        // repeat songs
        repeatBtn.onclick = function(){
          _this.isRepeat = ! (_this.isRepeat);
          if(_this.isRepeat){
            repeatBtn.style.color = '#EF3A7A'
          }else{
            repeatBtn.style.color = '#a3aecc'
          }
        };
        
        // active songs
        playlist.onclick = function(e){
          const songNode = e.target.closest('.song:not(.active)');
          if(songNode){
            _this.currentIndex = Number(songNode.dataset.index);
            _this.loadCurrentSong();
            _this.renderHTML();
            _this.scrollToView();
            audio.play();
            // console.log(e.target);
          }
          // console.log(e.target.closest('.song:not[.active]'));  
        };

    },

    scrollToView: function(){
      setTimeout(()=>{
        a('.song.active').scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      },200)
    },
      
    loadCurrentSong: function(){
      heading.textContent = this.currentSong.name;
      author.textContent = this.currentSong.singer;
      cdThumbs.style.backgroundImage = `url('${this.currentSong.image}')`;
      audio.src = this.currentSong.path;
    },

    randomNextSong: function(){
      let index;
      do {
        index = Math.floor(Math.random() * this.songs.length);
      } while(index === this.currentIndex)
      this.currentIndex = index;
      this.loadCurrentSong();
    },

    prevSong: function(){
      if(this.currentIndex === 0){
        this.currentIndex = this.songs.length - 1;
      }else{
        this.currentIndex--;
      }
      this.loadCurrentSong();
    },

    nextSong: function(){
      this.currentIndex++;
      if (this.currentIndex >= this.songs.length -1){
        this.currentIndex = 0;
      }
      this.loadCurrentSong();
    },

    start:  function(){
      // Define some properties
      this.difineProperties();

      // Dom event
      this.handleScreen();


      //Render html 
      this.renderHTML();


      // Loading current song in playlist
      this.loadCurrentSong();

      // this.playSong();
      // this.activeSong();

    }
}

app.start();

