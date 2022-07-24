console.log("Running JS File");
let audioFile = new Audio("songs/1.mp3");
let masterPlay = document.querySelector('#masterPlay');
let gif = document.getElementById('img');
let processBar = document.getElementById('player');
let currentTIME = document.querySelector('#currentTIME');
let totalDURATION = document.getElementById('totalDURATION');
let song = Array.from(document.getElementsByClassName('song'));
let gifName = Array.from(document.getElementsByClassName('gif'));
let bottomSong = document.getElementById('songGif');
let duraTion = document.getElementsByClassName('duration');
let forward = document.querySelector('#forward');
let backward = document.querySelector('#backward');
let change1 = document.getElementById('change1');
let change2 = document.getElementById('change2');
let change3 = document.getElementById('change3');
let change4 = document.getElementById('change4');
let mint = document.getElementById('mint');
let sec = document.getElementById('sec');
let ratio = document.getElementById('ratio');

let script = document.getElementById('script');
change1.style.color = 'red';
change2.style.color = 'white';
change3.style.color = "white";
change4.style.color = 'white';
let slash = document.getElementById('slash');







let obj = [
   { SongName: "Thoda Thoda Pyaar-Stebin", FilePath: 'songs/1.mp3', SongDuration: '04:32', CoverPath: 'covers/1.jpg', id: '1' },
   { SongName: "Buddhu sa Mann", FilePath: 'songs/2.mp3', SongDuration: '03:27', CoverPath: 'covers/2.jpg', id: '2' },
   { SongName: "Kesariya-Arijit Singh", FilePath: 'songs/3.mp3', SongDuration: '04:28', CoverPath: 'covers/3.jpg', id: '3' },
   { SongName: "Heer Raanjhana-Arijit", FilePath: 'songs/4.mp3', SongDuration: '04:00', CoverPath: 'covers/4.jpg', id: '4' },
   { SongName: "Mast Nazron Se-Jubin", FilePath: 'songs/5.mp3', SongDuration: '05:00', CoverPath: 'covers/5.jpg', id: '5' },
   { SongName: "Mast Magan-Arijit Singh", FilePath: 'songs/6.mp3', SongDuration: '04:40', CoverPath: 'covers/6.jpg', id: '6' },
   { SongName: "Dil Mein Ho Tum", FilePath: 'songs/7.mp3', SongDuration: '05:26', CoverPath: 'covers/7.jpg', id: '7' }];

let obj2 = [
   { SongName: "I Love You-Akul", FilePath: 'songs/8.mp3', SongDuration: '03:37', CoverPath: 'covers/8.jpg', id: '8' },
   { SongName: "Dil Jaaniye-Jubin Nautiyal", FilePath: 'songs/9.mp3', SongDuration: '04:42', CoverPath: 'covers/9.jpg', id: '9' },
   { SongName: "Sajde-K.K", FilePath: 'songs/10.mp3', SongDuration: '05:25', CoverPath: 'covers/10.jpg', id: '10' },
   { SongName: "Tenu Lehanga-Jass", FilePath: 'songs/11.mp3', SongDuration: '04:07', CoverPath: 'covers/11.jpg', id: '11' },
   { SongName: "Khairiyat-Arijit Singh", FilePath: 'songs/12.mp3', SongDuration: '04:40', CoverPath: 'covers/12.jpg', id: '12' },
   { SongName: "Shayad-Arijit Singh", FilePath: 'songs/13.mp3', SongDuration: '04:08', CoverPath: 'covers/13.jpg', id: '13' },
   { SongName: "Teri Ore-Rahat Fateh", FilePath: 'songs/14.mp3', SongDuration: '05:37', CoverPath: 'covers/14.jpg', id: '14' }
]
let obj3 = [
   { SongName: "Temporary Pyaar-Kaka", FilePath: 'songs/15.mp3', SongDuration: '04:19', CoverPath: 'covers/15.jpg', id: '15' },
   { SongName: "Haan Tu Hai-K.K", FilePath: 'songs/16.mp3', SongDuration: '05:24', CoverPath: 'covers/16.jpg', id: '16' },
   { SongName: "295-Sidhu Moose Wala", FilePath: 'songs/17.mp3', SongDuration: '04:30', CoverPath: 'covers/17.jpg', id: '17' },
   { SongName: "Kale Je Libaas Di-Kaka", FilePath: 'songs/18.mp3', SongDuration: '04:27', CoverPath: 'covers/18.jpg', id: '18' },
   { SongName: "Pasoori-Shae Gill", FilePath: 'songs/19.mp3', SongDuration: '03:04', CoverPath: 'covers/19.jpg', id: '19' },
   { SongName: "Tera Hone Laga Hoon", FilePath: 'songs/20.mp3', SongDuration: '05:00', CoverPath: 'covers/20.jpg', id: '20' },
   { SongName: "Desh Mere-Arijit Singh", FilePath: 'songs/21.mp3', SongDuration: '03:08', CoverPath: 'covers/21.jpg', id: '21' }];

let obj4 = [
   { SongName: "Angrezi Beat-Honey Singh", FilePath: 'songs/22.mp3', SongDuration: '03:04', CoverPath: 'covers/22.jpg', id: '22' },
   { SongName: "High Heels-Honey Singh", FilePath: 'songs/23.mp3', SongDuration: '04:42', CoverPath: 'covers/23.jpg', id: '23' },
   { SongName: "Gabru-Honey Singh", FilePath: 'songs/24.mp3', SongDuration: '05:24', CoverPath: 'covers/24.jpg', id: '24' },
   { SongName: "Blue Eyes-Honey Singh", FilePath: 'songs/25.mp3', SongDuration: '04:00', CoverPath: 'covers/25.jpg', id: '25' },
   { SongName: "Dheere Dheere-Honey", FilePath: 'songs/26.mp3', SongDuration: '05:25', CoverPath: 'covers/26.jpg', id: '26' },
   { SongName: "Phulkari-Karan Randhawa", FilePath: 'songs/27.mp3', SongDuration: '03:16', CoverPath: 'covers/27.jpg', id: '27' },
   { SongName: "Mere Wala Sardar-Jugraj", FilePath: 'songs/28.mp3', SongDuration: '05:16', CoverPath: 'covers/28.jpg', id: '28' }
]

song.forEach((element, i) => {
   // console.log(element,i);
   element.getElementsByTagName('img')[0].src = obj[i].CoverPath;
   element.getElementsByClassName('songname')[0].innerHTML = obj[i].SongName;
   element.getElementsByClassName('timestamp')[0].innerHTML = obj[i].SongDuration;

});



masterPlay.addEventListener('click', (i) => {

   if (bottomSong.innerHTML == '') {
      let song;
      let dur;
      let id = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');

      obj.forEach((element) => {
         if (element.id == id) {
            song = element.SongName;
            dur = element.SongDuration;
            bottomSong.innerHTML = song;
            slash.style.opacity = '1';
            totalDURATION.innerHTML = dur;
            audioFile.src = `songs/${id}.mp3`;
            audioFile.play();
            audioFile.addEventListener('timeupdate', () => {
               audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
               // console.log(audioTime);
               processBar.value = audioTime;
            })

            gif.style.opacity = '1';
            makeSongPlay();
            songPlay.forEach((element) => {
               if (element.id == id) {
                  element.classList.remove('fa-play-circle');
                  element.classList.add('fa-pause-circle');
               }

            })


         }
      })


   }
   else if (audioFile.paused) {
      audioFile.play();
      masterPlay.classList.remove('fa-play-circle')
      masterPlay.classList.add('fa-pause-circle')
      gif.style.opacity = '1';



   }



   else {
      audioFile.pause();
      masterPlay.classList.remove('fa-pause-circle')
      masterPlay.classList.add('fa-play-circle')
      gif.style.opacity = '0';
   }

   audioFile.addEventListener('timeupdate', function Up() {
      audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
      console.log(audioFile.duration);
      if (parseInt(audioFile.currentTime) < 10) {
         ratio.style.opacity = '1';
         mint.innerHTML = '00';
         sec.innerHTML = "0" + parseInt(audioFile.currentTime);
      }


      if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
         ratio.style.opacity = '1';
         sec.innerHTML = parseInt(audioFile.currentTime);
         mint.innerHTML = '00';

      }


      if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
         ratio.style.opacity = '1';

         mint.innerHTML = '01';
         let secc = parseInt(audioFile.currentTime) - 60;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }
      }
      if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
         ratio.style.opacity = '1';
         mint.innerHTML = '02';
         let secc = parseInt(audioFile.currentTime) - 120;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
         ratio.style.opacity = '1';
         mint.innerHTML = '03';
         let secc = parseInt(audioFile.currentTime) - 180;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }
      }
      if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
         ratio.style.opacity = '1';
         mint.innerHTML = '04';
         let secc = parseInt(audioFile.currentTime) - 240;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
         ratio.style.opacity = '1';
         mint.innerHTML = '05';
         let secc = parseInt(audioFile.currentTime) - 300;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
         ratio.style.opacity = '1';
         mint.innerHTML = '06';
         let secc = parseInt(audioFile.currentTime) - 360;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
         ratio.style.opacity = '1';
         mint.innerHTML = '07';
         let secc = parseInt(audioFile.currentTime) - 420;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
         ratio.style.opacity = '1';
         mint.innerHTML = '08';
         let secc = parseInt(audioFile.currentTime) - 480;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
         ratio.style.opacity = '1';
         mint.innerHTML = '09';
         let secc = parseInt(audioFile.currentTime) - 540;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
         ratio.style.opacity = '1';
         mint.innerHTML = '10';
         let secc = parseInt(audioFile.currentTime) - 600;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
         ratio.style.opacity = '1';
         mint.innerHTML = '11';
         let secc = parseInt(audioFile.currentTime) - 660;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }
      }
      if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
         ratio.style.opacity = '1';
         mint.innerHTML = '12';
         let secc = parseInt(audioFile.currentTime) - 720;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }
      }
      if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
         ratio.style.opacity = '1';
         mint.innerHTML = '13';
         let secc = parseInt(audioFile.currentTime) - 780;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
         ratio.style.opacity = '1';
         mint.innerHTML = '14';
         let secc = parseInt(audioFile.currentTime) - 660;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 900) {
         slash.style.opacity = '0';
         ratio.style.opacity = '0';
         mint.innerHTML = '00';
         sec.innerHTML = '00'
      }

      processBar.value = audioTime;
      if (processBar.value == 100) {
         let song;
         let id;
         let temp;
         let dur;
         temp = bottomSong.innerText;
         obj.forEach((element) => {
            if (element.SongName == temp) {
               id = parseInt(element.id);


            }

         })
         id = id + 1;;
         if (id >= 8) {
            id = 1;
         }

         makeSongPlay();
         songPlay.forEach((element) => {
            if (element.id == id) {
               element.classList.remove('fa-play-circle');
               element.classList.add('fa-pause-circle');
            }

         })
         obj.forEach((element) => {
            if (element.id == id) {
               song = element.SongName;
               dur = element.SongDuration;
               console.log(song);
               masterPlay.classList.remove('fa-play-circle');
               masterPlay.classList.add('fa-pause-circle');

               bottomSong.innerHTML = song;
               slash.style.opacity = '1';

               totalDURATION.innerHTML = dur;
               audioFile.src = `songs/${id}.mp3`;
               audioFile.play();


            }
         })



      }
   })

})
processBar.addEventListener('click', function f() {
   // console.log('Update');
   // console.log("Processor Value: "+processBar.value);
   currentT = parseInt((processBar.value * audioFile.duration) / 100);
   // console.log('Current Duration :'+currentT);
   audioFile.currentTime = currentT;
})
// gifName.forEach((element)=>{
//    element.getElementById('songGif')[0].innerHTML=obj[i].SongName;
// })
let makeSongPlay = () => {
   songPlay.forEach((element) => {
      element.classList.remove('fa-pause-circle')
      element.classList.add('fa-play-circle');

   })
}
let songPlay = Array.from(document.getElementsByClassName('songPlay'));
songPlay.forEach((element) => {
   element.addEventListener('click', (e) => {
      makeSongPlay();
      processBar.value = 0;

      console.log(e.target);
      id = e.target.id;
      console.log(id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioFile.src = `songs/${id}.mp3`;
      audioFile.currentTime = 0;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      obj.forEach((element, i) => {
         if (id == obj[i].id) {
            Songname = obj[i].SongName;
            dur = obj[i].SongDuration;
            bottomSong.innerHTML = Songname;
            slash.style.opacity = '1';
            totalDURATION.innerHTML = dur;


         }
      })
      gif.style.opacity = '1';
      audioFile.play();
      audioFile.addEventListener('timeupdate', () => {
         audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
         // console.log(audioTime);
         processBar.value = audioTime;
         if (parseInt(audioFile.currentTime) < 10) {
            ratio.style.opacity = '1';
            mint.innerHTML = '00';
            sec.innerHTML = "0" + parseInt(audioFile.currentTime);
         }


         if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
            ratio.style.opacity = '1';
            sec.innerHTML = parseInt(audioFile.currentTime);
            mint.innerHTML = '00';

         }


         if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
            ratio.style.opacity = '1';

            mint.innerHTML = '01';
            let secc = parseInt(audioFile.currentTime) - 60;
            if (secc < 10) {
               sec.innerHTML = '0' + secc;
            }
            if (secc >= 10 && secc < 60) {
               sec.innerHTML = secc;
            }
         }
         if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
            ratio.style.opacity = '1';
            mint.innerHTML = '02';
            let secc = parseInt(audioFile.currentTime) - 120;
            if (secc < 10) {
               sec.innerHTML = '0' + secc;
            }
            if (secc >= 10 && secc < 60) {
               sec.innerHTML = secc;
            }


         }
         if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
            ratio.style.opacity = '1';
            mint.innerHTML = '03';
            let secc = parseInt(audioFile.currentTime) - 180;
            if (secc < 10) {
               sec.innerHTML = '0' + secc;
            }
            if (secc >= 10 && secc < 60) {
               sec.innerHTML = secc;
            }
         }
         if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
            ratio.style.opacity = '1';
            mint.innerHTML = '04';
            let secc = parseInt(audioFile.currentTime) - 240;
            if (secc < 10) {
               sec.innerHTML = '0' + secc;
            }
            if (secc >= 10 && secc < 60) {
               sec.innerHTML = secc;
            }


         }
         if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
            ratio.style.opacity = '1';
            mint.innerHTML = '05';
            let secc = parseInt(audioFile.currentTime) - 300;
            if (secc < 10) {
               sec.innerHTML = '0' + secc;
            }
            if (secc >= 10 && secc < 60) {
               sec.innerHTML = secc;
            }


         }
         if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
            ratio.style.opacity = '1';
            mint.innerHTML = '06';
            let secc = parseInt(audioFile.currentTime) - 360;
            if (secc < 10) {
               sec.innerHTML = '0' + secc;
            }
            if (secc >= 10 && secc < 60) {
               sec.innerHTML = secc;
            }


         }
         if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
            ratio.style.opacity = '1';
            mint.innerHTML = '07';
            let secc = parseInt(audioFile.currentTime) - 420;
            if (secc < 10) {
               sec.innerHTML = '0' + secc;
            }
            if (secc >= 10 && secc < 60) {
               sec.innerHTML = secc;
            }


         }
         if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
            ratio.style.opacity = '1';
            mint.innerHTML = '08';
            let secc = parseInt(audioFile.currentTime) - 480;
            if (secc < 10) {
               sec.innerHTML = '0' + secc;
            }
            if (secc >= 10 && secc < 60) {
               sec.innerHTML = secc;
            }


         }
         if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
            ratio.style.opacity = '1';
            mint.innerHTML = '09';
            let secc = parseInt(audioFile.currentTime) - 540;
            if (secc < 10) {
               sec.innerHTML = '0' + secc;
            }
            if (secc >= 10 && secc < 60) {
               sec.innerHTML = secc;
            }


         }
         if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
            ratio.style.opacity = '1';
            mint.innerHTML = '10';
            let secc = parseInt(audioFile.currentTime) - 600;
            if (secc < 10) {
               sec.innerHTML = '0' + secc;
            }
            if (secc >= 10 && secc < 60) {
               sec.innerHTML = secc;
            }


         }
         if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
            ratio.style.opacity = '1';
            mint.innerHTML = '11';
            let secc = parseInt(audioFile.currentTime) - 660;
            if (secc < 10) {
               sec.innerHTML = '0' + secc;
            }
            if (secc >= 10 && secc < 60) {
               sec.innerHTML = secc;
            }
         }
         if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
            ratio.style.opacity = '1';
            mint.innerHTML = '12';
            let secc = parseInt(audioFile.currentTime) - 720;
            if (secc < 10) {
               sec.innerHTML = '0' + secc;
            }
            if (secc >= 10 && secc < 60) {
               sec.innerHTML = secc;
            }
         }
         if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
            ratio.style.opacity = '1';
            mint.innerHTML = '13';
            let secc = parseInt(audioFile.currentTime) - 780;
            if (secc < 10) {
               sec.innerHTML = '0' + secc;
            }
            if (secc >= 10 && secc < 60) {
               sec.innerHTML = secc;
            }


         }
         if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
            ratio.style.opacity = '1';
            mint.innerHTML = '14';
            let secc = parseInt(audioFile.currentTime) - 660;
            if (secc < 10) {
               sec.innerHTML = '0' + secc;
            }
            if (secc >= 10 && secc < 60) {
               sec.innerHTML = secc;
            }


         }
         if (parseInt(audioFile.currentTime) >= 900) {
            slash.style.opacity = '0';
            ratio.style.opacity = '0';
            mint.innerHTML = '00';
            sec.innerHTML = '00'
         }

      })
   })
});
forward.addEventListener('click', function forw() {
   let song;
   let id;
   let temp;
   let dur;
   temp = bottomSong.innerText;
   obj.forEach((element) => {
      if (element.SongName == temp) {
         id = parseInt(element.id);


      }

   })
   id = id + 1;;
   if (id >= 8) {
      id = 1;
   }

   makeSongPlay();
   songPlay.forEach((element) => {
      if (element.id == id) {
         element.classList.remove('fa-play-circle');
         element.classList.add('fa-pause-circle');
      }

   })
   obj.forEach((element) => {
      if (element.id == id) {
         song = element.SongName;
         dur = element.SongDuration;
         console.log(song);
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         bottomSong.innerHTML = song;
         slash.style.opacity = '1';
         totalDURATION.innerHTML = dur;
         audioFile.src = `songs/${id}.mp3`;
         audioFile.play();
         audioFile.addEventListener('timeupdate', () => {
            audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
            // console.log(audioTime);
            processBar.value = audioTime;
            if (parseInt(audioFile.currentTime) < 10) {
               ratio.style.opacity = '1';
               mint.innerHTML = '00';
               sec.innerHTML = "0" + parseInt(audioFile.currentTime);
            }


            if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
               ratio.style.opacity = '1';
               sec.innerHTML = parseInt(audioFile.currentTime);
               mint.innerHTML = '00';

            }


            if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
               ratio.style.opacity = '1';

               mint.innerHTML = '01';
               let secc = parseInt(audioFile.currentTime) - 60;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
               ratio.style.opacity = '1';
               mint.innerHTML = '02';
               let secc = parseInt(audioFile.currentTime) - 120;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
               ratio.style.opacity = '1';
               mint.innerHTML = '03';
               let secc = parseInt(audioFile.currentTime) - 180;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
               ratio.style.opacity = '1';
               mint.innerHTML = '04';
               let secc = parseInt(audioFile.currentTime) - 240;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
               ratio.style.opacity = '1';
               mint.innerHTML = '05';
               let secc = parseInt(audioFile.currentTime) - 300;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
               ratio.style.opacity = '1';
               mint.innerHTML = '06';
               let secc = parseInt(audioFile.currentTime) - 360;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
               ratio.style.opacity = '1';
               mint.innerHTML = '07';
               let secc = parseInt(audioFile.currentTime) - 420;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
               ratio.style.opacity = '1';
               mint.innerHTML = '08';
               let secc = parseInt(audioFile.currentTime) - 480;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
               ratio.style.opacity = '1';
               mint.innerHTML = '09';
               let secc = parseInt(audioFile.currentTime) - 540;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
               ratio.style.opacity = '1';
               mint.innerHTML = '10';
               let secc = parseInt(audioFile.currentTime) - 600;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
               ratio.style.opacity = '1';
               mint.innerHTML = '11';
               let secc = parseInt(audioFile.currentTime) - 660;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
               ratio.style.opacity = '1';
               mint.innerHTML = '12';
               let secc = parseInt(audioFile.currentTime) - 720;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
               ratio.style.opacity = '1';
               mint.innerHTML = '13';
               let secc = parseInt(audioFile.currentTime) - 780;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
               ratio.style.opacity = '1';
               mint.innerHTML = '14';
               let secc = parseInt(audioFile.currentTime) - 660;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 900) {
               slash.style.opacity = '0';
               ratio.style.opacity = '0';
               mint.innerHTML = '00';
               sec.innerHTML = '00'
            }




         })
      }
   })




})
backward.addEventListener('click', function back() {
   let song;
   let id;
   let temp;
   let dur;
   temp = bottomSong.innerText;
   obj.forEach((element) => {
      if (element.SongName == temp) {
         id = parseInt(element.id);


      }

   })
   id = id - 1;;
   if (id <= 0) {
      id = 7;
   }
   makeSongPlay();
   songPlay.forEach((element) => {
      if (element.id == id) {
         element.classList.remove('fa-play-circle');
         element.classList.add('fa-pause-circle');
      }

   })
   obj.forEach((element) => {
      if (element.id == id) {
         song = element.SongName;
         dur = element.SongDuration;
         console.log(song);
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         bottomSong.innerHTML = song;
         slash.style.opacity = '1';
         totalDURATION.innerHTML = dur;
         audioFile.src = `songs/${id}.mp3`;
         audioFile.play();
         audioFile.addEventListener('timeupdate', () => {
            audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
            // console.log(audioTime);
            processBar.value = audioTime;
            if (parseInt(audioFile.currentTime) < 10) {
               ratio.style.opacity = '1';
               mint.innerHTML = '00';
               sec.innerHTML = "0" + parseInt(audioFile.currentTime);
            }


            if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
               ratio.style.opacity = '1';
               sec.innerHTML = parseInt(audioFile.currentTime);
               mint.innerHTML = '00';

            }


            if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
               ratio.style.opacity = '1';

               mint.innerHTML = '01';
               let secc = parseInt(audioFile.currentTime) - 60;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
               ratio.style.opacity = '1';
               mint.innerHTML = '02';
               let secc = parseInt(audioFile.currentTime) - 120;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
               ratio.style.opacity = '1';
               mint.innerHTML = '03';
               let secc = parseInt(audioFile.currentTime) - 180;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
               ratio.style.opacity = '1';
               mint.innerHTML = '04';
               let secc = parseInt(audioFile.currentTime) - 240;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
               ratio.style.opacity = '1';
               mint.innerHTML = '05';
               let secc = parseInt(audioFile.currentTime) - 300;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
               ratio.style.opacity = '1';
               mint.innerHTML = '06';
               let secc = parseInt(audioFile.currentTime) - 360;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
               ratio.style.opacity = '1';
               mint.innerHTML = '07';
               let secc = parseInt(audioFile.currentTime) - 420;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
               ratio.style.opacity = '1';
               mint.innerHTML = '08';
               let secc = parseInt(audioFile.currentTime) - 480;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
               ratio.style.opacity = '1';
               mint.innerHTML = '09';
               let secc = parseInt(audioFile.currentTime) - 540;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
               ratio.style.opacity = '1';
               mint.innerHTML = '10';
               let secc = parseInt(audioFile.currentTime) - 600;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
               ratio.style.opacity = '1';
               mint.innerHTML = '11';
               let secc = parseInt(audioFile.currentTime) - 660;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
               ratio.style.opacity = '1';
               mint.innerHTML = '12';
               let secc = parseInt(audioFile.currentTime) - 720;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
               ratio.style.opacity = '1';
               mint.innerHTML = '13';
               let secc = parseInt(audioFile.currentTime) - 780;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
               ratio.style.opacity = '1';
               mint.innerHTML = '14';
               let secc = parseInt(audioFile.currentTime) - 660;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 900) {
               slash.style.opacity = '0';
               ratio.style.opacity = '0';
               mint.innerHTML = '00';
               sec.innerHTML = '00'
            }




         })
      }


   }
   )
});





//-----------------------------------------------------------------------------------------------------------------------------------------//


//-----------------------------------------------------------------------------------------------------------------------------------------//







change2.addEventListener('click', () => {
   change2.style.color = 'red';
   change1.style.color = 'white';
   change3.style.color = "white";
   change4.style.color = 'white';
   console.log("I am running");


   song.forEach((element, i) => {
      // console.log(element,i);
      element.getElementsByTagName('img')[0].src = obj2[i].CoverPath;
      element.getElementsByClassName('songname')[0].innerHTML = obj2[i].SongName;
      element.getElementsByClassName('timestamp')[0].innerHTML = obj2[i].SongDuration;
      element.getElementsByClassName('songPlay')[0].id = obj2[i].id;

   });
   makeSongPlay();
   let songname;
   let id;
   songname=bottomSong.innerHTML;
   console.log('songname is :'+songname);
obj2.forEach((element)=>{
   if(element.SongName==songname){
      id=element.id;



   }
})
let songPlay = Array.from(document.getElementsByClassName('songPlay'));
songPlay.forEach((element)=>{
   if(element.id==id){
      element.classList.remove('fa-play-circle');
      element.classList.add('fa-pause-circle')
   }
})

  
  













   // let songPlay = Array.from(document.getElementsByClassName('songPlay'));
   songPlay.forEach((element) => {
      element.addEventListener('click', (e) => {
         makeSongPlay();
         processBar.value = 0;

         console.log(e.target);
         id = e.target.id;
         console.log(id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioFile.src = `songs/${id}.mp3`;
         audioFile.currentTime = 0;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         obj2.forEach((element, i) => {
            if (id == obj2[i].id) {
               Songname = obj2[i].SongName;
               Tduration = obj2[i].SongDuration;
               bottomSong.innerHTML = Songname;
               slash.style.opacity = '1';
               totalDURATION.innerHTML = Tduration;


            }
         })
         gif.style.opacity = '1';
         audioFile.play();
         audioFile.addEventListener('timeupdate', () => {
            audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
            // console.log(audioTime);
            processBar.value = audioTime;
            if (parseInt(audioFile.currentTime) < 10) {
               ratio.style.opacity = '1';
               mint.innerHTML = '00';
               sec.innerHTML = "0" + parseInt(audioFile.currentTime);
            }


            if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
               ratio.style.opacity = '1';
               sec.innerHTML = parseInt(audioFile.currentTime);
               mint.innerHTML = '00';

            }


            if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
               ratio.style.opacity = '1';

               mint.innerHTML = '01';
               let secc = parseInt(audioFile.currentTime) - 60;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
               ratio.style.opacity = '1';
               mint.innerHTML = '02';
               let secc = parseInt(audioFile.currentTime) - 120;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
               ratio.style.opacity = '1';
               mint.innerHTML = '03';
               let secc = parseInt(audioFile.currentTime) - 180;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
               ratio.style.opacity = '1';
               mint.innerHTML = '04';
               let secc = parseInt(audioFile.currentTime) - 240;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
               ratio.style.opacity = '1';
               mint.innerHTML = '05';
               let secc = parseInt(audioFile.currentTime) - 300;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
               ratio.style.opacity = '1';
               mint.innerHTML = '06';
               let secc = parseInt(audioFile.currentTime) - 360;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
               ratio.style.opacity = '1';
               mint.innerHTML = '07';
               let secc = parseInt(audioFile.currentTime) - 420;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
               ratio.style.opacity = '1';
               mint.innerHTML = '08';
               let secc = parseInt(audioFile.currentTime) - 480;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
               ratio.style.opacity = '1';
               mint.innerHTML = '09';
               let secc = parseInt(audioFile.currentTime) - 540;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
               ratio.style.opacity = '1';
               mint.innerHTML = '10';
               let secc = parseInt(audioFile.currentTime) - 600;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
               ratio.style.opacity = '1';
               mint.innerHTML = '11';
               let secc = parseInt(audioFile.currentTime) - 660;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
               ratio.style.opacity = '1';
               mint.innerHTML = '12';
               let secc = parseInt(audioFile.currentTime) - 720;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
               ratio.style.opacity = '1';
               mint.innerHTML = '13';
               let secc = parseInt(audioFile.currentTime) - 780;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
               ratio.style.opacity = '1';
               mint.innerHTML = '14';
               let secc = parseInt(audioFile.currentTime) - 660;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }


            }
            if (parseInt(audioFile.currentTime) >= 900) {
               slash.style.opacity = '0';
               ratio.style.opacity = '0';
               mint.innerHTML = '00';
               sec.innerHTML = '00'
            }

         })
      })
   });
   audioFile.addEventListener('timeupdate', () => {
      audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
      // console.log(audioTime);
      processBar.value = audioTime;
      if (parseInt(audioFile.currentTime) < 10) {
         ratio.style.opacity = '1';
         mint.innerHTML = '00';
         sec.innerHTML = "0" + parseInt(audioFile.currentTime);
      }


      if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
         ratio.style.opacity = '1';
         sec.innerHTML = parseInt(audioFile.currentTime);
         mint.innerHTML = '00';

      }


      if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
         ratio.style.opacity = '1';

         mint.innerHTML = '01';
         let secc = parseInt(audioFile.currentTime) - 60;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }
      }
      if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
         ratio.style.opacity = '1';
         mint.innerHTML = '02';
         let secc = parseInt(audioFile.currentTime) - 120;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
         ratio.style.opacity = '1';
         mint.innerHTML = '03';
         let secc = parseInt(audioFile.currentTime) - 180;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }
      }
      if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
         ratio.style.opacity = '1';
         mint.innerHTML = '04';
         let secc = parseInt(audioFile.currentTime) - 240;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
         ratio.style.opacity = '1';
         mint.innerHTML = '05';
         let secc = parseInt(audioFile.currentTime) - 300;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
         ratio.style.opacity = '1';
         mint.innerHTML = '06';
         let secc = parseInt(audioFile.currentTime) - 360;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
         ratio.style.opacity = '1';
         mint.innerHTML = '07';
         let secc = parseInt(audioFile.currentTime) - 420;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
         ratio.style.opacity = '1';
         mint.innerHTML = '08';
         let secc = parseInt(audioFile.currentTime) - 480;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
         ratio.style.opacity = '1';
         mint.innerHTML = '09';
         let secc = parseInt(audioFile.currentTime) - 540;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
         ratio.style.opacity = '1';
         mint.innerHTML = '10';
         let secc = parseInt(audioFile.currentTime) - 600;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
         ratio.style.opacity = '1';
         mint.innerHTML = '11';
         let secc = parseInt(audioFile.currentTime) - 660;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }
      }
      if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
         ratio.style.opacity = '1';
         mint.innerHTML = '12';
         let secc = parseInt(audioFile.currentTime) - 720;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }
      }
      if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
         ratio.style.opacity = '1';
         mint.innerHTML = '13';
         let secc = parseInt(audioFile.currentTime) - 780;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
         ratio.style.opacity = '1';
         mint.innerHTML = '14';
         let secc = parseInt(audioFile.currentTime) - 660;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 900) {
         slash.style.opacity = '0';
         ratio.style.opacity = '0';
         mint.innerHTML = '00';
         sec.innerHTML = '00'
      }



      if (processBar.value == 100) {
         let song;
         let id;
         let temp;
         let dur;
         temp = bottomSong.innerText;
         console.log("CURRENT SONG :" + temp);
         obj2.forEach((element) => {
            if (element.SongName == temp) {
               id = parseInt(element.id);


            }

         })
         id = id + 1;;
         if (id > 14) {
            id = 8;
         }

         makeSongPlay();
         songPlay.forEach((element) => {
            if (element.id == id) {
               element.classList.remove('fa-play-circle');
               element.classList.add('fa-pause-circle');
            }

         })
         obj2.forEach((element) => {
            if (element.id == id) {
               song = element.SongName;
               console.log(song);
               masterPlay.classList.remove('fa-play-circle');
               masterPlay.classList.add('fa-pause-circle');
               bottomSong.innerHTML = song;
               dur = element.SongDuration;
               totalDURATION.innerHTML = dur;
               slash.style.opacity = '1';
               audioFile.src = `songs/${id}.mp3`;
               audioFile.play();


            }
         })



      }
   });
   forward.addEventListener('click', () => {
      let song;
      let id;
      let temp;
      let dur;
      temp = bottomSong.innerText;
      obj2.forEach((element) => {
         if (element.SongName == temp) {
            id = parseInt(element.id);


         }

      })
      id = id + 1;;
      if (id > 14) {
         id = 8;
      }

      makeSongPlay();
      songPlay.forEach((element) => {
         if (element.id == id) {
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
         }

      })
      obj2.forEach((element) => {
         if (element.id == id) {
            song = element.SongName
            console.log(song);
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            bottomSong.innerHTML = song;
            dur=element.SongDuration;
            totalDURATION.innerHTML = dur;
            slash.style.opacity = '1';
            audioFile.src = `songs/${id}.mp3`;
            audioFile.play();
            audioFile.addEventListener('timeupdate', () => {
               audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
               // console.log(audioTime);
               processBar.value = audioTime;
               if (parseInt(audioFile.currentTime) < 10) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '00';
                  sec.innerHTML = "0" + parseInt(audioFile.currentTime);
               }


               if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
                  ratio.style.opacity = '1';
                  sec.innerHTML = parseInt(audioFile.currentTime);
                  mint.innerHTML = '00';

               }


               if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
                  ratio.style.opacity = '1';

                  mint.innerHTML = '01';
                  let secc = parseInt(audioFile.currentTime) - 60;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
               }
               if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '02';
                  let secc = parseInt(audioFile.currentTime) - 120;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '03';
                  let secc = parseInt(audioFile.currentTime) - 180;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
               }
               if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '04';
                  let secc = parseInt(audioFile.currentTime) - 240;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '05';
                  let secc = parseInt(audioFile.currentTime) - 300;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '06';
                  let secc = parseInt(audioFile.currentTime) - 360;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '07';
                  let secc = parseInt(audioFile.currentTime) - 420;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '08';
                  let secc = parseInt(audioFile.currentTime) - 480;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '09';
                  let secc = parseInt(audioFile.currentTime) - 540;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '10';
                  let secc = parseInt(audioFile.currentTime) - 600;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '11';
                  let secc = parseInt(audioFile.currentTime) - 660;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
               }
               if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '12';
                  let secc = parseInt(audioFile.currentTime) - 720;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
               }
               if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '13';
                  let secc = parseInt(audioFile.currentTime) - 780;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '14';
                  let secc = parseInt(audioFile.currentTime) - 660;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 900) {
                  slash.style.opacity = '0';
                  ratio.style.opacity = '0';
                  mint.innerHTML = '00';
                  sec.innerHTML = '00'
               }




            })
         }
      })




   });
   backward.addEventListener('click', () => {
      let song;
      let id;
      let temp;
      let dur;
      temp = bottomSong.innerText;
      obj2.forEach((element) => {
         if (element.SongName == temp) {
            id = parseInt(element.id);


         }

      })
      id = id - 1;;
      if (id < 8) {
         id = 14;
      }
      makeSongPlay();
      songPlay.forEach((element) => {
         if (element.id == id) {
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
         }

      })
      obj2.forEach((element) => {
         if (element.id == id) {
            song = element.SongName
            console.log(song);
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            bottomSong.innerHTML = song;
            dur=element.SongDuration;
            totalDURATION.innerHTML = dur;
            slash.style.opacity = '1';
            audioFile.src = `songs/${id}.mp3`;
            audioFile.play();
            audioFile.addEventListener('timeupdate', () => {
               audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
               // console.log(audioTime);
               processBar.value = audioTime;
               if (parseInt(audioFile.currentTime) < 10) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '00';
                  sec.innerHTML = "0" + parseInt(audioFile.currentTime);
               }


               if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
                  ratio.style.opacity = '1';
                  sec.innerHTML = parseInt(audioFile.currentTime);
                  mint.innerHTML = '00';

               }


               if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
                  ratio.style.opacity = '1';

                  mint.innerHTML = '01';
                  let secc = parseInt(audioFile.currentTime) - 60;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
               }
               if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '02';
                  let secc = parseInt(audioFile.currentTime) - 120;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '03';
                  let secc = parseInt(audioFile.currentTime) - 180;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
               }
               if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '04';
                  let secc = parseInt(audioFile.currentTime) - 240;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '05';
                  let secc = parseInt(audioFile.currentTime) - 300;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '06';
                  let secc = parseInt(audioFile.currentTime) - 360;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '07';
                  let secc = parseInt(audioFile.currentTime) - 420;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '08';
                  let secc = parseInt(audioFile.currentTime) - 480;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '09';
                  let secc = parseInt(audioFile.currentTime) - 540;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '10';
                  let secc = parseInt(audioFile.currentTime) - 600;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '11';
                  let secc = parseInt(audioFile.currentTime) - 660;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
               }
               if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '12';
                  let secc = parseInt(audioFile.currentTime) - 720;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
               }
               if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '13';
                  let secc = parseInt(audioFile.currentTime) - 780;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '14';
                  let secc = parseInt(audioFile.currentTime) - 660;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }


               }
               if (parseInt(audioFile.currentTime) >= 900) {
                  slash.style.opacity = '0';
                  ratio.style.opacity = '0';
                  mint.innerHTML = '00';
                  sec.innerHTML = '00'
               }




            })
         }


      }
      )
   });





});



//------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------





change1.addEventListener('click', () => {
   change1.style.color = 'red';
   change2.style.color = 'white';
   change3.style.color = "white";
   change4.style.color = 'white';
   console.log("I am running");







   song.forEach((element, i) => {
      // console.log(element,i);
      element.getElementsByTagName('img')[0].src = obj[i].CoverPath;
      element.getElementsByClassName('songname')[0].innerHTML = obj[i].SongName;
      element.getElementsByClassName('timestamp')[0].innerHTML = obj[i].SongDuration;
      element.getElementsByClassName('songPlay')[0].id = obj[i].id;

   });
   makeSongPlay();

   let songname;
   let id;
   songname=bottomSong.innerHTML;
   console.log('songname is :'+songname);
obj.forEach((element)=>{
   if(element.SongName==songname){
      id=element.id;



   }
})
let songPlay = Array.from(document.getElementsByClassName('songPlay'));
songPlay.forEach((element)=>{
   if(element.id==id){
      element.classList.remove('fa-play-circle');
      element.classList.add('fa-pause-circle')
   }
})

   // let songPlay = Array.from(document.getElementsByClassName('songPlay'));
   songPlay.forEach((element) => {
      element.addEventListener('click', (e) => {
         makeSongPlay();
         processBar.value = 0;

         console.log(e.target);
         id = e.target.id;
         console.log(id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioFile.src = `songs/${id}.mp3`;
         audioFile.currentTime = 0;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         obj.forEach((element, i) => {
            if (id == obj[i].id) {
               Songname = obj[i].SongName;
               Tduration = obj[i].SongDuration;
               bottomSong.innerHTML = Songname;
               totalDURATION.innerHTML = Tduration;


            }
         })
         gif.style.opacity = '1';
         audioFile.play();
         audioFile.addEventListener('timeupdate', () => {
            audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
            // console.log(audioTime);
            processBar.value = audioTime;
            if (parseInt(audioFile.currentTime) < 10) {
               ratio.style.opacity = '1';
               mint.innerHTML = '00';
               sec.innerHTML = "0" + parseInt(audioFile.currentTime);
            }
      
      
            if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
               ratio.style.opacity = '1';
               sec.innerHTML = parseInt(audioFile.currentTime);
               mint.innerHTML = '00';
      
            }
      
      
            if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
               ratio.style.opacity = '1';
      
               mint.innerHTML = '01';
               let secc = parseInt(audioFile.currentTime) - 60;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
               ratio.style.opacity = '1';
               mint.innerHTML = '02';
               let secc = parseInt(audioFile.currentTime) - 120;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
      
      
            }
            if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
               ratio.style.opacity = '1';
               mint.innerHTML = '03';
               let secc = parseInt(audioFile.currentTime) - 180;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
               ratio.style.opacity = '1';
               mint.innerHTML = '04';
               let secc = parseInt(audioFile.currentTime) - 240;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
      
      
            }
            if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
               ratio.style.opacity = '1';
               mint.innerHTML = '05';
               let secc = parseInt(audioFile.currentTime) - 300;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
      
      
            }
            if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
               ratio.style.opacity = '1';
               mint.innerHTML = '06';
               let secc = parseInt(audioFile.currentTime) - 360;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
      
      
            }
            if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
               ratio.style.opacity = '1';
               mint.innerHTML = '07';
               let secc = parseInt(audioFile.currentTime) - 420;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
      
      
            }
            if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
               ratio.style.opacity = '1';
               mint.innerHTML = '08';
               let secc = parseInt(audioFile.currentTime) - 480;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
      
      
            }
            if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
               ratio.style.opacity = '1';
               mint.innerHTML = '09';
               let secc = parseInt(audioFile.currentTime) - 540;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
      
      
            }
            if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
               ratio.style.opacity = '1';
               mint.innerHTML = '10';
               let secc = parseInt(audioFile.currentTime) - 600;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
      
      
            }
            if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
               ratio.style.opacity = '1';
               mint.innerHTML = '11';
               let secc = parseInt(audioFile.currentTime) - 660;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
               ratio.style.opacity = '1';
               mint.innerHTML = '12';
               let secc = parseInt(audioFile.currentTime) - 720;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
            }
            if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
               ratio.style.opacity = '1';
               mint.innerHTML = '13';
               let secc = parseInt(audioFile.currentTime) - 780;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
      
      
            }
            if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
               ratio.style.opacity = '1';
               mint.innerHTML = '14';
               let secc = parseInt(audioFile.currentTime) - 660;
               if (secc < 10) {
                  sec.innerHTML = '0' + secc;
               }
               if (secc >= 10 && secc < 60) {
                  sec.innerHTML = secc;
               }
      
      
            }
            if (parseInt(audioFile.currentTime) >= 900) {
               slash.style.opacity = '0';
               ratio.style.opacity = '0';
               mint.innerHTML = '00';
               sec.innerHTML = '00'
            }
      
         })
      })
   });

   audioFile.addEventListener('timeupdate', function Up() {
      audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
      // console.log(audioTime);
      processBar.value = audioTime;

      if (parseInt(audioFile.currentTime) < 10) {
         ratio.style.opacity = '1';
         mint.innerHTML = '00';
         sec.innerHTML = "0" + parseInt(audioFile.currentTime);
      }


      if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
         ratio.style.opacity = '1';
         sec.innerHTML = parseInt(audioFile.currentTime);
         mint.innerHTML = '00';

      }


      if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
         ratio.style.opacity = '1';

         mint.innerHTML = '01';
         let secc = parseInt(audioFile.currentTime) - 60;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }
      }
      if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
         ratio.style.opacity = '1';
         mint.innerHTML = '02';
         let secc = parseInt(audioFile.currentTime) - 120;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
         ratio.style.opacity = '1';
         mint.innerHTML = '03';
         let secc = parseInt(audioFile.currentTime) - 180;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }
      }
      if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
         ratio.style.opacity = '1';
         mint.innerHTML = '04';
         let secc = parseInt(audioFile.currentTime) - 240;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
         ratio.style.opacity = '1';
         mint.innerHTML = '05';
         let secc = parseInt(audioFile.currentTime) - 300;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
         ratio.style.opacity = '1';
         mint.innerHTML = '06';
         let secc = parseInt(audioFile.currentTime) - 360;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
         ratio.style.opacity = '1';
         mint.innerHTML = '07';
         let secc = parseInt(audioFile.currentTime) - 420;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
         ratio.style.opacity = '1';
         mint.innerHTML = '08';
         let secc = parseInt(audioFile.currentTime) - 480;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
         ratio.style.opacity = '1';
         mint.innerHTML = '09';
         let secc = parseInt(audioFile.currentTime) - 540;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
         ratio.style.opacity = '1';
         mint.innerHTML = '10';
         let secc = parseInt(audioFile.currentTime) - 600;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
         ratio.style.opacity = '1';
         mint.innerHTML = '11';
         let secc = parseInt(audioFile.currentTime) - 660;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }
      }
      if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
         ratio.style.opacity = '1';
         mint.innerHTML = '12';
         let secc = parseInt(audioFile.currentTime) - 720;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }
      }
      if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
         ratio.style.opacity = '1';
         mint.innerHTML = '13';
         let secc = parseInt(audioFile.currentTime) - 780;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
         ratio.style.opacity = '1';
         mint.innerHTML = '14';
         let secc = parseInt(audioFile.currentTime) - 660;
         if (secc < 10) {
            sec.innerHTML = '0' + secc;
         }
         if (secc >= 10 && secc < 60) {
            sec.innerHTML = secc;
         }


      }
      if (parseInt(audioFile.currentTime) >= 900) {
         slash.style.opacity = '0';
         ratio.style.opacity = '0';
         mint.innerHTML = '00';
         sec.innerHTML = '00'
      }

      if (processBar.value == 100) {
         let song;
         let id;
         let temp;
         let dur;
         temp = bottomSong.innerText;
         obj.forEach((element) => {
            if (element.SongName == temp) {
               id = parseInt(element.id);


            }

         })
         id = id + 1;;
         if (id >= 8) {
            id = 1;
         }

         makeSongPlay();
         songPlay.forEach((element) => {
            if (element.id == id) {
               element.classList.remove('fa-play-circle');
               element.classList.add('fa-pause-circle');
            }

         })
         obj.forEach((element) => {
            if (element.id == id) {
               song = element.SongName
               console.log(song);
               masterPlay.classList.remove('fa-play-circle');
               masterPlay.classList.add('fa-pause-circle');
               bottomSong.innerHTML = song;
               dur=element.SongDuration;
               totalDURATION.innerHTML = dur;
               slash.style.opacity = '1';
               audioFile.src = `songs/${id}.mp3`;
               audioFile.play();


            }
         })



      }
   });

   forward.addEventListener('click', function forw() {
      let song;
      let id;
      let temp;
      let dur;
      temp = bottomSong.innerText;
      obj.forEach((element) => {
         if (element.SongName == temp) {
            id = parseInt(element.id);


         }

      })
      id = id;
      console.log(id);
      if (id >= 8) {
         id = 1;
      }

      makeSongPlay();
      songPlay.forEach((element) => {
         if (element.id == id) {
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
         }

      })
      obj.forEach((element) => {
         if (element.id == id) {
            song = element.SongName
            console.log(song);
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            bottomSong.innerHTML = song;
            dur=element.SongDuration;     
            totalDURATION.innerHTML = dur;
            slash.style.opacity = '1';
            audioFile.src = `songs/${id}.mp3`;
            audioFile.play();


         }
      })



   });


   backward.addEventListener('click', function back() {
      let song;
      let id;
      let temp;
      let dur;
      temp = bottomSong.innerText;
      obj.forEach((element) => {
         if (element.SongName == temp) {
            id = parseInt(element.id);


         }

      })
      id = id;
      if (id <= 0) {
         id = 7;
      }
      makeSongPlay();
      songPlay.forEach((element) => {
         if (element.id == id) {
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
         }

      })
      obj.forEach((element) => {
         if (element.id == id) {
            song = element.SongName
            console.log(song);
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            bottomSong.innerHTML = song;
            dur=element.SongDuration;
            totalDURATION.innerHTML = dur;
            slash.style.opacity = '1';
            audioFile.src = `songs/${id}.mp3`;
            audioFile.play();
            audioFile.addEventListener('timeupdate', () => {
               audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
               // console.log(audioTime);
               processBar.value = audioTime;
               
    if (parseInt(audioFile.currentTime) < 10) {
      ratio.style.opacity = '1';
      mint.innerHTML = '00';
      sec.innerHTML = "0" + parseInt(audioFile.currentTime);
   }


   if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
      ratio.style.opacity = '1';
      sec.innerHTML = parseInt(audioFile.currentTime);
      mint.innerHTML = '00';

   }


   if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
      ratio.style.opacity = '1';

      mint.innerHTML = '01';
      let secc = parseInt(audioFile.currentTime) - 60;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
      ratio.style.opacity = '1';
      mint.innerHTML = '02';
      let secc = parseInt(audioFile.currentTime) - 120;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
      ratio.style.opacity = '1';
      mint.innerHTML = '03';
      let secc = parseInt(audioFile.currentTime) - 180;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
      ratio.style.opacity = '1';
      mint.innerHTML = '04';
      let secc = parseInt(audioFile.currentTime) - 240;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
      ratio.style.opacity = '1';
      mint.innerHTML = '05';
      let secc = parseInt(audioFile.currentTime) - 300;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
      ratio.style.opacity = '1';
      mint.innerHTML = '06';
      let secc = parseInt(audioFile.currentTime) - 360;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
      ratio.style.opacity = '1';
      mint.innerHTML = '07';
      let secc = parseInt(audioFile.currentTime) - 420;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
      ratio.style.opacity = '1';
      mint.innerHTML = '08';
      let secc = parseInt(audioFile.currentTime) - 480;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
      ratio.style.opacity = '1';
      mint.innerHTML = '09';
      let secc = parseInt(audioFile.currentTime) - 540;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
      ratio.style.opacity = '1';
      mint.innerHTML = '10';
      let secc = parseInt(audioFile.currentTime) - 600;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
      ratio.style.opacity = '1';
      mint.innerHTML = '11';
      let secc = parseInt(audioFile.currentTime) - 660;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
      ratio.style.opacity = '1';
      mint.innerHTML = '12';
      let secc = parseInt(audioFile.currentTime) - 720;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
      ratio.style.opacity = '1';
      mint.innerHTML = '13';
      let secc = parseInt(audioFile.currentTime) - 780;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
      ratio.style.opacity = '1';
      mint.innerHTML = '14';
      let secc = parseInt(audioFile.currentTime) - 660;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 900) {
      slash.style.opacity = '0';
      ratio.style.opacity = '0';
      mint.innerHTML = '00';
      sec.innerHTML = '00'
   }




            })
         }


      }
      )
   });

});

//------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------






change3.addEventListener('click', () => {
   change3.style.color = 'red';
   change1.style.color = 'white';
   change2.style.color = "white";
   change4.style.color = 'white';




   song.forEach((element, i) => {
      // console.log(element,i);
      element.getElementsByTagName('img')[0].src = obj3[i].CoverPath;
      element.getElementsByClassName('songname')[0].innerHTML = obj3[i].SongName;
      element.getElementsByClassName('timestamp')[0].innerHTML = obj3[i].SongDuration;
      element.getElementsByClassName('songPlay')[0].id = obj3[i].id;

   });
   makeSongPlay();
   let songname;
   let id;
   songname=bottomSong.innerHTML;
   console.log('songname is :'+songname);
obj3.forEach((element)=>{
   if(element.SongName==songname){
      id=element.id;



   }
})
let songPlay = Array.from(document.getElementsByClassName('songPlay'));
songPlay.forEach((element)=>{
   if(element.id==id){
      element.classList.remove('fa-play-circle');
      element.classList.add('fa-pause-circle')
   }
})

   // let songPlay = Array.from(document.getElementsByClassName('songPlay'));
   songPlay.forEach((element) => {
      element.addEventListener('click', (e) => {
         makeSongPlay();
         processBar.value = 0;

         console.log(e.target);
         id = e.target.id;
         console.log(id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioFile.src = `songs/${id}.mp3`;
         audioFile.currentTime = 0;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         obj3.forEach((element, i) => {
            if (id == obj3[i].id) {
               Songname = obj3[i].SongName;
               Tduration = obj3[i].SongDuration;
               
               bottomSong.innerHTML = Songname;
               totalDURATION.innerHTML = Tduration;


            }
         })
         gif.style.opacity = '1';
         audioFile.play();
         audioFile.addEventListener('timeupdate', () => {
            audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
            // console.log(audioTime);
            processBar.value = audioTime;
           
    if (parseInt(audioFile.currentTime) < 10) {
      ratio.style.opacity = '1';
      mint.innerHTML = '00';
      sec.innerHTML = "0" + parseInt(audioFile.currentTime);
   }


   if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
      ratio.style.opacity = '1';
      sec.innerHTML = parseInt(audioFile.currentTime);
      mint.innerHTML = '00';

   }


   if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
      ratio.style.opacity = '1';

      mint.innerHTML = '01';
      let secc = parseInt(audioFile.currentTime) - 60;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
      ratio.style.opacity = '1';
      mint.innerHTML = '02';
      let secc = parseInt(audioFile.currentTime) - 120;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
      ratio.style.opacity = '1';
      mint.innerHTML = '03';
      let secc = parseInt(audioFile.currentTime) - 180;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
      ratio.style.opacity = '1';
      mint.innerHTML = '04';
      let secc = parseInt(audioFile.currentTime) - 240;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
      ratio.style.opacity = '1';
      mint.innerHTML = '05';
      let secc = parseInt(audioFile.currentTime) - 300;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
      ratio.style.opacity = '1';
      mint.innerHTML = '06';
      let secc = parseInt(audioFile.currentTime) - 360;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
      ratio.style.opacity = '1';
      mint.innerHTML = '07';
      let secc = parseInt(audioFile.currentTime) - 420;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
      ratio.style.opacity = '1';
      mint.innerHTML = '08';
      let secc = parseInt(audioFile.currentTime) - 480;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
      ratio.style.opacity = '1';
      mint.innerHTML = '09';
      let secc = parseInt(audioFile.currentTime) - 540;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
      ratio.style.opacity = '1';
      mint.innerHTML = '10';
      let secc = parseInt(audioFile.currentTime) - 600;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
      ratio.style.opacity = '1';
      mint.innerHTML = '11';
      let secc = parseInt(audioFile.currentTime) - 660;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
      ratio.style.opacity = '1';
      mint.innerHTML = '12';
      let secc = parseInt(audioFile.currentTime) - 720;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
      ratio.style.opacity = '1';
      mint.innerHTML = '13';
      let secc = parseInt(audioFile.currentTime) - 780;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
      ratio.style.opacity = '1';
      mint.innerHTML = '14';
      let secc = parseInt(audioFile.currentTime) - 660;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 900) {
      slash.style.opacity = '0';
      ratio.style.opacity = '0';
      mint.innerHTML = '00';
      sec.innerHTML = '00'
   }



         })
      })
   });
   audioFile.addEventListener('timeupdate', function Up() {
      audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
      // console.log(audioTime);
      processBar.value = audioTime;
      
    if (parseInt(audioFile.currentTime) < 10) {
      ratio.style.opacity = '1';
      mint.innerHTML = '00';
      sec.innerHTML = "0" + parseInt(audioFile.currentTime);
   }


   if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
      ratio.style.opacity = '1';
      sec.innerHTML = parseInt(audioFile.currentTime);
      mint.innerHTML = '00';

   }


   if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
      ratio.style.opacity = '1';

      mint.innerHTML = '01';
      let secc = parseInt(audioFile.currentTime) - 60;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
      ratio.style.opacity = '1';
      mint.innerHTML = '02';
      let secc = parseInt(audioFile.currentTime) - 120;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
      ratio.style.opacity = '1';
      mint.innerHTML = '03';
      let secc = parseInt(audioFile.currentTime) - 180;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
      ratio.style.opacity = '1';
      mint.innerHTML = '04';
      let secc = parseInt(audioFile.currentTime) - 240;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
      ratio.style.opacity = '1';
      mint.innerHTML = '05';
      let secc = parseInt(audioFile.currentTime) - 300;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
      ratio.style.opacity = '1';
      mint.innerHTML = '06';
      let secc = parseInt(audioFile.currentTime) - 360;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
      ratio.style.opacity = '1';
      mint.innerHTML = '07';
      let secc = parseInt(audioFile.currentTime) - 420;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
      ratio.style.opacity = '1';
      mint.innerHTML = '08';
      let secc = parseInt(audioFile.currentTime) - 480;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
      ratio.style.opacity = '1';
      mint.innerHTML = '09';
      let secc = parseInt(audioFile.currentTime) - 540;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
      ratio.style.opacity = '1';
      mint.innerHTML = '10';
      let secc = parseInt(audioFile.currentTime) - 600;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
      ratio.style.opacity = '1';
      mint.innerHTML = '11';
      let secc = parseInt(audioFile.currentTime) - 660;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
      ratio.style.opacity = '1';
      mint.innerHTML = '12';
      let secc = parseInt(audioFile.currentTime) - 720;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
      ratio.style.opacity = '1';
      mint.innerHTML = '13';
      let secc = parseInt(audioFile.currentTime) - 780;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
      ratio.style.opacity = '1';
      mint.innerHTML = '14';
      let secc = parseInt(audioFile.currentTime) - 660;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 900) {
      slash.style.opacity = '0';
      ratio.style.opacity = '0';
      mint.innerHTML = '00';
      sec.innerHTML = '00'
   }




      if (processBar.value == 100) {
         let song;
         let id;
         let temp;
         let dur;
         temp = bottomSong.innerText;
         obj3.forEach((element) => {
            if (element.SongName == temp) {
               id = parseInt(element.id);


            }

         })
         id = id + 1;;
         if (id >= 22) {
            id = 15;
         }

         makeSongPlay();
         songPlay.forEach((element) => {
            if (element.id == id) {
               element.classList.remove('fa-play-circle');
               element.classList.add('fa-pause-circle');
            }

         })
         obj3.forEach((element) => {
            if (element.id == id) {
               song = element.SongName
               console.log(song);
               masterPlay.classList.remove('fa-play-circle');
               masterPlay.classList.add('fa-pause-circle');
               bottomSong.innerHTML = song;
               totalDURATION.innerHTML = dur;
               slash.style.opacity = '1';
               audioFile.src = `songs/${id}.mp3`;
               audioFile.play();


            }
         })



      }
   });
   forward.addEventListener('click', () => {
      let song;
      let id;
      let temp;
      let dur;

      temp = bottomSong.innerText;
      obj3.forEach((element) => {
         if (element.SongName == temp) {
            id = parseInt(element.id);


         }

      })
      id = id + 1;
      console.log(id);
      if (id >= 22) {
         id = 15;
      }

      makeSongPlay();
      songPlay.forEach((element) => {
         if (element.id == id) {
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
         }

      })
      obj3.forEach((element) => {
         if (element.id == id) {
            song = element.SongName
            console.log(song);
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            bottomSong.innerHTML = song;
            dur=element.SongDuration;
            totalDURATION.innerHTML = dur;
            slash.style.opacity = '1';
            audioFile.src = `songs/${id}.mp3`;
            audioFile.play();


         }
      })



   });
   backward.addEventListener('click', function back() {
      let song;
      let id;
      let temp;
      let dur;

      temp = bottomSong.innerText;
      obj3.forEach((element) => {
         if (element.SongName == temp) {
            id = parseInt(element.id);


         }

      })
      id = id - 1;
      if (id < 15) {
         id = 21;
      }
      makeSongPlay();
      songPlay.forEach((element) => {
         if (element.id == id) {
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
         }

      })
      obj3.forEach((element) => {
         if (element.id == id) {
            song = element.SongName
            console.log(song);
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            bottomSong.innerHTML = song;
            dur=element.SongDuration;
            totalDURATION.innerHTML = dur;
            slash.style.opacity = '1';
            audioFile.src = `songs/${id}.mp3`;
            audioFile.play();
            audioFile.addEventListener('timeupdate', () => {
               audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
               // console.log(audioTime);
               processBar.value = audioTime;

               
    if (parseInt(audioFile.currentTime) < 10) {
      ratio.style.opacity = '1';
      mint.innerHTML = '00';
      sec.innerHTML = "0" + parseInt(audioFile.currentTime);
   }


   if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
      ratio.style.opacity = '1';
      sec.innerHTML = parseInt(audioFile.currentTime);
      mint.innerHTML = '00';

   }


   if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
      ratio.style.opacity = '1';

      mint.innerHTML = '01';
      let secc = parseInt(audioFile.currentTime) - 60;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
      ratio.style.opacity = '1';
      mint.innerHTML = '02';
      let secc = parseInt(audioFile.currentTime) - 120;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
      ratio.style.opacity = '1';
      mint.innerHTML = '03';
      let secc = parseInt(audioFile.currentTime) - 180;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
      ratio.style.opacity = '1';
      mint.innerHTML = '04';
      let secc = parseInt(audioFile.currentTime) - 240;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
      ratio.style.opacity = '1';
      mint.innerHTML = '05';
      let secc = parseInt(audioFile.currentTime) - 300;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
      ratio.style.opacity = '1';
      mint.innerHTML = '06';
      let secc = parseInt(audioFile.currentTime) - 360;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
      ratio.style.opacity = '1';
      mint.innerHTML = '07';
      let secc = parseInt(audioFile.currentTime) - 420;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
      ratio.style.opacity = '1';
      mint.innerHTML = '08';
      let secc = parseInt(audioFile.currentTime) - 480;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
      ratio.style.opacity = '1';
      mint.innerHTML = '09';
      let secc = parseInt(audioFile.currentTime) - 540;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
      ratio.style.opacity = '1';
      mint.innerHTML = '10';
      let secc = parseInt(audioFile.currentTime) - 600;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
      ratio.style.opacity = '1';
      mint.innerHTML = '11';
      let secc = parseInt(audioFile.currentTime) - 660;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
      ratio.style.opacity = '1';
      mint.innerHTML = '12';
      let secc = parseInt(audioFile.currentTime) - 720;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
      ratio.style.opacity = '1';
      mint.innerHTML = '13';
      let secc = parseInt(audioFile.currentTime) - 780;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
      ratio.style.opacity = '1';
      mint.innerHTML = '14';
      let secc = parseInt(audioFile.currentTime) - 660;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 900) {
      slash.style.opacity = '0';
      ratio.style.opacity = '0';
      mint.innerHTML = '00';
      sec.innerHTML = '00'
   }




            })
         }


      }
      )
   });
});


//------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------






change4.addEventListener('click', () => {
   change4.style.color = 'red';
   change1.style.color = 'white';
   change2.style.color = "white";
   change3.style.color = 'white';


   song.forEach((element, i) => {
      // console.log(element,i);
      element.getElementsByTagName('img')[0].src = obj4[i].CoverPath;
      element.getElementsByClassName('songname')[0].innerHTML = obj4[i].SongName;
      element.getElementsByClassName('timestamp')[0].innerHTML = obj4[i].SongDuration;
      element.getElementsByClassName('songPlay')[0].id = obj4[i].id;

   });
   makeSongPlay();
   let songname;
   let id;
   songname=bottomSong.innerHTML;
   console.log('songname is :'+songname);
obj4.forEach((element)=>{
   if(element.SongName==songname){
      id=element.id;



   }
})
let songPlay = Array.from(document.getElementsByClassName('songPlay'));
songPlay.forEach((element)=>{
   if(element.id==id){
      element.classList.remove('fa-play-circle');
      element.classList.add('fa-pause-circle')
   }
})

   // let songPlay = Array.from(document.getElementsByClassName('songPlay'));
   songPlay.forEach((element) => {
      element.addEventListener('click', (e) => {
         makeSongPlay();
         processBar.value = 0;

         console.log(e.target);
         id = e.target.id;
         console.log(id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioFile.src = `songs/${id}.mp3`;
         audioFile.currentTime = 0;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         obj4.forEach((element, i) => {
            if (id == obj4[i].id) {
               Songname = obj4[i].SongName;
               Tduration = obj4[i].SongDuration;
               bottomSong.innerHTML = Songname;
               totalDURATION.innerHTML = Tduration;


            }
         })
         gif.style.opacity = '1';
         audioFile.play();
         audioFile.addEventListener('timeupdate', () => {
            audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
            // console.log(audioTime);
            processBar.value = audioTime;
            
    if (parseInt(audioFile.currentTime) < 10) {
      ratio.style.opacity = '1';
      mint.innerHTML = '00';
      sec.innerHTML = "0" + parseInt(audioFile.currentTime);
   }


   if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
      ratio.style.opacity = '1';
      sec.innerHTML = parseInt(audioFile.currentTime);
      mint.innerHTML = '00';

   }


   if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
      ratio.style.opacity = '1';

      mint.innerHTML = '01';
      let secc = parseInt(audioFile.currentTime) - 60;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
      ratio.style.opacity = '1';
      mint.innerHTML = '02';
      let secc = parseInt(audioFile.currentTime) - 120;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
      ratio.style.opacity = '1';
      mint.innerHTML = '03';
      let secc = parseInt(audioFile.currentTime) - 180;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
      ratio.style.opacity = '1';
      mint.innerHTML = '04';
      let secc = parseInt(audioFile.currentTime) - 240;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
      ratio.style.opacity = '1';
      mint.innerHTML = '05';
      let secc = parseInt(audioFile.currentTime) - 300;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
      ratio.style.opacity = '1';
      mint.innerHTML = '06';
      let secc = parseInt(audioFile.currentTime) - 360;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
      ratio.style.opacity = '1';
      mint.innerHTML = '07';
      let secc = parseInt(audioFile.currentTime) - 420;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
      ratio.style.opacity = '1';
      mint.innerHTML = '08';
      let secc = parseInt(audioFile.currentTime) - 480;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
      ratio.style.opacity = '1';
      mint.innerHTML = '09';
      let secc = parseInt(audioFile.currentTime) - 540;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
      ratio.style.opacity = '1';
      mint.innerHTML = '10';
      let secc = parseInt(audioFile.currentTime) - 600;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
      ratio.style.opacity = '1';
      mint.innerHTML = '11';
      let secc = parseInt(audioFile.currentTime) - 660;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
      ratio.style.opacity = '1';
      mint.innerHTML = '12';
      let secc = parseInt(audioFile.currentTime) - 720;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
      ratio.style.opacity = '1';
      mint.innerHTML = '13';
      let secc = parseInt(audioFile.currentTime) - 780;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
      ratio.style.opacity = '1';
      mint.innerHTML = '14';
      let secc = parseInt(audioFile.currentTime) - 660;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 900) {
      slash.style.opacity = '0';
      ratio.style.opacity = '0';
      mint.innerHTML = '00';
      sec.innerHTML = '00'
   }

         })
      })
   });
   audioFile.addEventListener('timeupdate', function Up() {
      audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
      // console.log(audioTime);
      processBar.value = audioTime;

      
    if (parseInt(audioFile.currentTime) < 10) {
      ratio.style.opacity = '1';
      mint.innerHTML = '00';
      sec.innerHTML = "0" + parseInt(audioFile.currentTime);
   }


   if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
      ratio.style.opacity = '1';
      sec.innerHTML = parseInt(audioFile.currentTime);
      mint.innerHTML = '00';

   }


   if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
      ratio.style.opacity = '1';

      mint.innerHTML = '01';
      let secc = parseInt(audioFile.currentTime) - 60;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
      ratio.style.opacity = '1';
      mint.innerHTML = '02';
      let secc = parseInt(audioFile.currentTime) - 120;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
      ratio.style.opacity = '1';
      mint.innerHTML = '03';
      let secc = parseInt(audioFile.currentTime) - 180;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
      ratio.style.opacity = '1';
      mint.innerHTML = '04';
      let secc = parseInt(audioFile.currentTime) - 240;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
      ratio.style.opacity = '1';
      mint.innerHTML = '05';
      let secc = parseInt(audioFile.currentTime) - 300;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
      ratio.style.opacity = '1';
      mint.innerHTML = '06';
      let secc = parseInt(audioFile.currentTime) - 360;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
      ratio.style.opacity = '1';
      mint.innerHTML = '07';
      let secc = parseInt(audioFile.currentTime) - 420;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
      ratio.style.opacity = '1';
      mint.innerHTML = '08';
      let secc = parseInt(audioFile.currentTime) - 480;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
      ratio.style.opacity = '1';
      mint.innerHTML = '09';
      let secc = parseInt(audioFile.currentTime) - 540;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
      ratio.style.opacity = '1';
      mint.innerHTML = '10';
      let secc = parseInt(audioFile.currentTime) - 600;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
      ratio.style.opacity = '1';
      mint.innerHTML = '11';
      let secc = parseInt(audioFile.currentTime) - 660;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
      ratio.style.opacity = '1';
      mint.innerHTML = '12';
      let secc = parseInt(audioFile.currentTime) - 720;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }
   }
   if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
      ratio.style.opacity = '1';
      mint.innerHTML = '13';
      let secc = parseInt(audioFile.currentTime) - 780;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
      ratio.style.opacity = '1';
      mint.innerHTML = '14';
      let secc = parseInt(audioFile.currentTime) - 660;
      if (secc < 10) {
         sec.innerHTML = '0' + secc;
      }
      if (secc >= 10 && secc < 60) {
         sec.innerHTML = secc;
      }


   }
   if (parseInt(audioFile.currentTime) >= 900) {
      slash.style.opacity = '0';
      ratio.style.opacity = '0';
      mint.innerHTML = '00';
      sec.innerHTML = '00'
   }

      if (processBar.value == 100) {
         let song;
         let id;
         let temp;
         let dur;

         temp = bottomSong.innerText;
         obj4.forEach((element) => {
            if (element.SongName == temp) {
               id = parseInt(element.id);


            }

         })
         id = id + 1;;
         if (id >= 29) {
            id = 22;
         }

         makeSongPlay();
         songPlay.forEach((element) => {
            if (element.id == id) {
               element.classList.remove('fa-play-circle');
               element.classList.add('fa-pause-circle');
            }

         })
         obj4.forEach((element) => {
            if (element.id == id) {
               song = element.SongName
               console.log(song);
               masterPlay.classList.remove('fa-play-circle');
               masterPlay.classList.add('fa-pause-circle');
               bottomSong.innerHTML = song;
               dur=element.SongDuration;
               totalDURATION.innerHTML = dur;
               slash.style.opacity = '1';
               audioFile.src = `songs/${id}.mp3`;
               audioFile.play();


            }
         })



      }
   });
   forward.addEventListener('click', () => {
      let song;
      let id;
      let temp;
      let dur;
      temp = bottomSong.innerText;
      obj4.forEach((element) => {
         if (element.SongName == temp) {
            id = parseInt(element.id);


         }

      })
      id = id + 1;
      console.log(id);
      if (id >= 29) {
         id = 22;
      }

      makeSongPlay();
      songPlay.forEach((element) => {
         if (element.id == id) {
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
         }

      })
      obj4.forEach((element) => {
         if (element.id == id) {
            song = element.SongName
            console.log(song);
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            bottomSong.innerHTML = song;
            dur=element.SongDuration;
            totalDURATION.innerHTML = dur;
            slash.style.opacity = '1';
            audioFile.src = `songs/${id}.mp3`;
            audioFile.play();


         }
      })



   });

   backward.addEventListener('click', function back() {
      let song;
      let id;
      let temp;
      let dur;
      temp = bottomSong.innerText;
      obj4.forEach((element) => {
         if (element.SongName == temp) {
            id = parseInt(element.id);


         }

      })
      id = id - 1;
      if (id < 21) {
         id = 28;
      }
      makeSongPlay();
      songPlay.forEach((element) => {
         if (element.id == id) {
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
         }

      })
      obj4.forEach((element) => {
         if (element.id == id) {
            song = element.SongName
            console.log(song);
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            bottomSong.innerHTML = song;
            dur=element.SongDuration;
            totalDURATION.innerHTML = dur;
            slash.style.opacity = '1';
            audioFile.src = `songs/${id}.mp3`;
            audioFile.play();
            audioFile.addEventListener('timeupdate', () => {
               audioTime = parseInt((audioFile.currentTime / audioFile.duration) * 100);
               // console.log(audioTime);
               processBar.value = audioTime;

               if (parseInt(audioFile.currentTime) < 10) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '00';
                  sec.innerHTML = "0" + parseInt(audioFile.currentTime);
               }
         
         
               if (parseInt(audioFile.currentTime) >= 10 && parseInt(audioFile.currentTime) < 60) {
                  ratio.style.opacity = '1';
                  sec.innerHTML = parseInt(audioFile.currentTime);
                  mint.innerHTML = '00';
         
               }
         
         
               if (parseInt(audioFile.currentTime) >= 60 && parseInt(audioFile.currentTime) < 120) {
                  ratio.style.opacity = '1';
         
                  mint.innerHTML = '01';
                  let secc = parseInt(audioFile.currentTime) - 60;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
               }
               if (parseInt(audioFile.currentTime) >= 120 && parseInt(audioFile.currentTime) < 180) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '02';
                  let secc = parseInt(audioFile.currentTime) - 120;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
         
         
               }
               if (parseInt(audioFile.currentTime) >= 180 && parseInt(audioFile.currentTime) < 240) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '03';
                  let secc = parseInt(audioFile.currentTime) - 180;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
               }
               if (parseInt(audioFile.currentTime) >= 240 && parseInt(audioFile.currentTime) < 300) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '04';
                  let secc = parseInt(audioFile.currentTime) - 240;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
         
         
               }
               if (parseInt(audioFile.currentTime) >= 300 && parseInt(audioFile.currentTime) < 360) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '05';
                  let secc = parseInt(audioFile.currentTime) - 300;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
         
         
               }
               if (parseInt(audioFile.currentTime) >= 360 && parseInt(audioFile.currentTime) < 420) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '06';
                  let secc = parseInt(audioFile.currentTime) - 360;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
         
         
               }
               if (parseInt(audioFile.currentTime) >= 420 && parseInt(audioFile.currentTime) < 480) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '07';
                  let secc = parseInt(audioFile.currentTime) - 420;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
         
         
               }
               if (parseInt(audioFile.currentTime) >= 480 && parseInt(audioFile.currentTime) < 540) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '08';
                  let secc = parseInt(audioFile.currentTime) - 480;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
         
         
               }
               if (parseInt(audioFile.currentTime) >= 540 && parseInt(audioFile.currentTime) < 600) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '09';
                  let secc = parseInt(audioFile.currentTime) - 540;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
         
         
               }
               if (parseInt(audioFile.currentTime) >= 600 && parseInt(audioFile.currentTime) < 660) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '10';
                  let secc = parseInt(audioFile.currentTime) - 600;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
         
         
               }
               if (parseInt(audioFile.currentTime) >= 660 && parseInt(audioFile.currentTime) < 720) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '11';
                  let secc = parseInt(audioFile.currentTime) - 660;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
               }
               if (parseInt(audioFile.currentTime) >= 720 && parseInt(audioFile.currentTime) < 780) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '12';
                  let secc = parseInt(audioFile.currentTime) - 720;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
               }
               if (parseInt(audioFile.currentTime) >= 780 && parseInt(audioFile.currentTime) < 840) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '13';
                  let secc = parseInt(audioFile.currentTime) - 780;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
         
         
               }
               if (parseInt(audioFile.currentTime) >= 840 && parseInt(audioFile.currentTime) < 900) {
                  ratio.style.opacity = '1';
                  mint.innerHTML = '14';
                  let secc = parseInt(audioFile.currentTime) - 660;
                  if (secc < 10) {
                     sec.innerHTML = '0' + secc;
                  }
                  if (secc >= 10 && secc < 60) {
                     sec.innerHTML = secc;
                  }
         
         
               }
               if (parseInt(audioFile.currentTime) >= 900) {
                  slash.style.opacity = '0';
                  ratio.style.opacity = '0';
                  mint.innerHTML = '00';
                  sec.innerHTML = '00'
               }
         


            })
         }


      }
      )
   });
});




















