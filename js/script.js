// select element 
const headerMusic = document.querySelector('#header-music')
const audioPlay = document.querySelector('#audio-play')
const bodySec1 = document.querySelector('#body-sec1')
const bodySec2 = document.querySelector('#body-sec2')
const bodySec3 = document.querySelector('#body-sec3')
// select element 

// list of music
const musicArray = [
    {
        id: '1',
        artistName: 'محسن یگانه',
        artistMusic: 'بترس',
        img: 'img/mohsen.jpg',
        musicImg: 'img/mohsen2.jpg',
        time: '3:05',
        src: 'audio/betars.mp3'
    },
    {
        id: '2',
        artistName: 'روزبه بمانی',
        artistMusic: 'هِق هِق',
        img: 'img/bemani.jpg',
        musicImg: 'img/bemani2.jpg',
        time: '4:24',
        src: 'audio/Hegh-Hegh.mp3'
    },
    {
        id: '3',
        artistName: 'محسن چاوشی',
        artistMusic: 'مسافر غریبه',
        musicImg: 'img/chavoshi2.jpg',
        time: '4:49',
        src: 'audio/mosafer.mp3'
    },
    {
        id: '4',
        artistName: 'شادمهر عقیلی',
        artistMusic: 'بی احساس',
        musicImg: 'img/shadmehr.jpg',
        time: '3:12',
        src: 'audio/biehsas.mp3'
    },
    {
        id: '5',
        artistName: 'ابی',
        artistMusic: 'درخت',
        musicImg: 'img/ebi.webp',
        time: '6:50',
        src: 'audio/derakht.mp3'
    },
    {
        id: '6',
        artistName: 'عرفان طهماسبی',
        artistMusic: 'دلگیر',
        musicImg: 'img/erfan.jpg',
        time: '3:03',
        src: 'audio/delgir.mp3'
    },
    {
        id: '7',
        artistName: 'مسیح و آرش AP',
        artistMusic: 'یه امشب',
        musicImg: 'img/masih.jpg',
        time: '2:24',
        src: 'audio/emshab.mp3'
    },
    {
        id: '8',
        artistName: 'بابک جهانبخش',
        artistMusic: 'ماه من',
        musicImg: 'img/babak.jpg',
        time: '3:02',
        src: 'audio/mah.mp3'
    },
    {
        id: '9',
        artistName: 'رضا صادقی',
        artistMusic: 'پاشو بیا',
        musicImg: 'img/reza.jpg',
        time: '2:15',
        src: 'audio/pasho.mp3'
    },
    {
        id: '10',
        artistName: 'رانیار خسروی',
        artistMusic: 'انگار',
        musicImg: 'img/xaniar.jpg',
        time: '4:00',
        src: 'audio/engar.mp3'
    },
    {
        id: '11',
        artistName: 'رضا بهرام',
        artistMusic: 'همه رفتند',
        musicImg: 'img/bahram.webp',
        time: '3:32',
        src: 'audio/raftan.mp3'
    },
    {
        id: '12',
        artistName: 'مهدی احمدوند',
        artistMusic: 'عشق من',
        musicImg: 'img/mahdi.jpg',
        time: '4:27',
        src: 'audio/eshgh.mp3'
    },
    {
        id: '13',
        artistName: 'مهدی یراحی',
        artistMusic: 'عکس شد',
        musicImg: 'img/yarrahi.webp',
        time: '4:14',
        src: 'audio/aks.mp3'
    },
    {
        id: '14',
        artistName: 'معین',
        artistMusic: 'فقط تو',
        musicImg: 'img/moein.webp',
        time: '3:10',
        src: 'audio/to.mp3'
    },
    {
        id: '15',
        artistName: 'سیاوش قمیشی',
        artistMusic: 'عاشق',
        musicImg: 'img/siavash.webp',
        time: '4:40',
        src: 'audio/aashegh.mp3'
    },
    {
        id: '16',
        artistName: 'سیروان خسروی',
        artistMusic: 'برگای نارنجی',
        musicImg: 'img/sirvan.jpg',
        time: '3:46',
        src: 'audio/barg.mp3'
    },
    {
        id: '17',
        artistName: 'آرمین زارعی',
        artistMusic: 'حالا هی',
        musicImg: 'img/armin.jpg',
        time: '3:32',
        src: 'audio/hala.mp3'
    },
    {
        id: '18',
        artistName: 'مسعود صادقلو',
        artistMusic: 'بد کردی',
        musicImg: 'img/masoud.jpg',
        time: '2:53',
        src: 'audio/bad.mp3'
    },
    {
        id: '19',
        artistName: 'علیرضا طلیسچی',
        artistMusic: 'دل',
        musicImg: 'img/talischi.jpg',
        time: '3:02',
        src: 'audio/del.mp3'
    },
    {
        id: '20',
        artistName: 'علی یاسینی',
        artistMusic: 'کنارتم',
        musicImg: 'img/yasini.jpg',
        time: '3:31',
        src: 'audio/kenaretam.mp3'
    },
    {
        id: '21',
        artistName: 'محسن یگانه',
        artistMusic: 'تو خوب',
        musicImg: 'img/tokhob.jfif',
        time: '3:47',
        src: 'audio/khoob.mp3'
    },
    {
        id: '22',
        artistName: 'محسن یگانه',
        artistMusic: 'درندشت',
        musicImg: 'img/darandasht.jfif',
        time: '3:58',
        src: 'audio/darandasht.mp3'
    },
    {
        id: '23',
        artistName: 'محسن یگانه',
        artistMusic: 'خودخواه',
        musicImg: 'img/khodkhah.jfif',
        time: '4:11',
        src: 'audio/khodkhah.mp3'
    },
    {
        id: '24',
        artistName: 'محسن یگانه',
        artistMusic: 'دیره',
        musicImg: 'img/dire.jpg',
        time: '3:53',
        src: 'audio/dire.mp3'
    },
    {
        id: '25',
        artistName: 'محسن یگانه',
        artistMusic: 'بهت قول میدم',
        musicImg: 'img/qol.jpg',
        time: '3:37',
        src: 'audio/ghol.mp3'
    },
]
// list of music

// onload
document.addEventListener('DOMContentLoaded', () => {
    setMusicHeader()
    setMusicSec1()
    setMusicSec2()
    setMusicSec3()
    showPlay(musicArray[0])
})
// onload

// set music in header 
function setMusicHeader() {
    let headerMusicTemp = []
    headerMusicTemp = musicArray.slice(0, 2)
    let x = ''
    headerMusicTemp.forEach(i => {
        x += `<figure data-id="${i.id}" class="music">
                <img src="${i.img}" alt="" class="w-full h-full rounded-xl object-cover">
                <span class="absolute bottom-9 right-8 font-bold text-white">${i.artistName}</span>
                <span class="absolute bottom-4 right-8 text-sm text-white">${i.artistMusic}</span>
            </figure>`
    })
    headerMusic.innerHTML = x

    const music = document.querySelectorAll('.music')
    music.forEach(i => {
        i.addEventListener('click', setToPlay)
    })
}
// set music in header 

// set music in sec1
function setMusicSec1() {
    let headerMusicTemp = []
    headerMusicTemp = musicArray.slice(0, 10)
    let x = ''
    headerMusicTemp.forEach(i => {
        x += `<figure class="group music-body" data-id="${i.id}">
                        <img src="${i.musicImg}" alt=""
                            class="w-full h-44 rounded-3xl object-cover group-hover:opacity-60 transition-all duration-300">
                        <span class="flex items-center text-white mt-2 gap-1 mr-1">
                            <i class="bi bi-music-note"></i>
                            ${i.artistMusic}
                        </span>
                        <span class="text-white text-opacity-50 mr-1 text-sm">${i.artistName}</span>
                    </figure>`
    })
    bodySec1.innerHTML = x

    const music = document.querySelectorAll('.music-body')
    music.forEach(i => {
        i.addEventListener('click', setToPlay)
    })
}
// set music in sec1

// set music in sec2
function setMusicSec2() {
    let headerMusicTemp = []
    headerMusicTemp = musicArray.slice(10, 20)
    let x = ''
    headerMusicTemp.forEach(i => {
        x += `<figure class="group music-body" data-id="${i.id}">
                        <img src="${i.musicImg}" alt=""
                            class="w-full h-44 rounded-3xl object-cover group-hover:opacity-60 transition-all duration-300">
                        <span class="flex items-center text-white mt-2 gap-1 mr-1">
                            <i class="bi bi-music-note"></i>
                            ${i.artistMusic}
                        </span>
                        <span class="text-white text-opacity-50 mr-1 text-sm">${i.artistName}</span>
                    </figure>`
    })
    bodySec2.innerHTML = x

    const music = document.querySelectorAll('.music-body')
    music.forEach(i => {
        i.addEventListener('click', setToPlay)
    })
}
// set music in sec2

// set music in sec3
function setMusicSec3() {
    let headerMusicTemp = []
    headerMusicTemp = musicArray.slice(20, 25)
    let x = ''
    headerMusicTemp.forEach(i => {
        x += `<figure class="group music-body" data-id="${i.id}">
                        <img src="${i.musicImg}" alt=""
                            class="w-full h-44 rounded-3xl object-cover group-hover:opacity-60 transition-all duration-300">
                        <span class="flex items-center text-white mt-2 gap-1 mr-1">
                            <i class="bi bi-music-note"></i>
                            ${i.artistMusic}
                        </span>
                        <span class="text-white text-opacity-50 mr-1 text-sm">${i.artistName}</span>
                    </figure>`
    })
    bodySec3.innerHTML = x

    const music = document.querySelectorAll('.music-body')
    music.forEach(i => {
        i.addEventListener('click', setToPlay)
    })
}
// set music in sec3

// setToPlay
function setToPlay(e) {
    let selectedMusic = musicArray.find(m => m.id == e.target.parentElement.dataset.id)
    showPlay(selectedMusic, true)
}
// setToPlay

// showPlay
function showPlay(selectedMusic, shouldPlay = false) {
    let x = `<audio src="${selectedMusic.src}" hidden id="audio"></audio>
                <div id="progress-bar" class="w-[97%] flex justify-end h-[6px] overflow-hidden bg-transparent absolute top-0 left-[1.5%] rounded-md cursor-pointer">
                    <div id="progress" class="w-0 transition-all duration-100 h-full bg-red-500"></div>
                </div>
            <figure class="hidden md:flex items-center gap-3 md:absolute md:right-5" data-id="${selectedMusic.id}">
                    <img src="${selectedMusic.musicImg}" alt="" class="w-12 h-12 rounded-full object-cover object-center mt-2">
                    <div class="flex flex-col">
                        <span class="font-bold text-white">${selectedMusic.artistName}</span>
                        <span class="text-sm text-white">${selectedMusic.artistMusic}</span>
                    </div>
            </figure>
            <div class="flex items-center gap-12 flex-row-reverse mt-2">
                <span id="start-time">00:00</span>
                <div class="flex items-center gap-4 flex-row-reverse">
                    <i class="bi bi-caret-left text-2xl cursor-pointer" id="prev-music" title="previous"></i>
                    <span data-music-id="" id="play-music"
                            class="w-11 h-11 rounded-full bg-icon shadow-btn flex justify-center items-center pt-1 cursor-pointer">
                            <i class="bi bi-play-fill text-2xl"></i>
                    </span>
                    <i class="bi bi-caret-right text-2xl cursor-pointer" id="next-music" title="next"></i>
                </div>
                <span>${selectedMusic.time}</span>
                <i class="bi bi-arrow-repeat text-2xl cursor-pointer" id="repeat-music" title="repeat"></i>
            </div>
            <div class="hidden lg:flex flex-row-reverse items-center gap-6 md:absolute md:left-5">
                <input type="range" min="0" max="100" value="100" dir="ltr" id="volume-slider">
                <i class="bi bi-volume-up text-2xl mt-1 cursor-pointer" id="volume-icon"></i>
            </div>`

    audioPlay.innerHTML = x

    // play music
    const playMusicBtn = document.querySelector('#play-music')
    const audio = document.querySelector('#audio')
    const playIcon = playMusicBtn.querySelector('i')
    const progressBar = document.querySelector('#progress-bar')
    const progress = document.getElementById('progress')
    const prevMusic = document.querySelector('#prev-music')
    const nextMusic = document.querySelector('#next-music')
    const startTime = document.getElementById('start-time')
    const repeatMusic = document.getElementById('repeat-music')
    const volumeSlider = document.querySelector('#volume-slider')
    const volumeIcon = document.querySelector('#volume-icon')
    let isRepeatEnabled = false
    let isMuted = false

    // play music
    playMusicBtn.addEventListener('click', playMusic)
    function playMusic() {
        if (audio.paused) {
            audio.play()
            playIcon.classList.remove('bi-play-fill')
            playIcon.classList.add('bi-pause-fill')
        } else {
            audio.pause()
            playIcon.classList.remove('bi-pause-fill')
            playIcon.classList.add('bi-play-fill')
        }
    }

    // updateProgress
    audio.addEventListener('timeupdate', updateProgress)
    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement
        const progressPercent = (currentTime / duration) * 100
        progress.style.width = `${progressPercent}%`
        startTime.textContent = formatTime(currentTime)
    }

    // music time
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60)
        const secs = Math.floor(seconds % 60)
        return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`
    }

    // Set progress bar
    progressBar.addEventListener('click', setProgress)
    function setProgress(e) {
        const width = this.clientWidth
        const clickX = e.offsetX
        const duration = audio.duration
        audio.currentTime = (clickX / width) * duration
    }

    // prev music
    prevMusic.addEventListener('click', prevAudio)
    function prevAudio() {
        let index = musicArray.findIndex(m => m.id == selectedMusic.id)

        if (index !== -1) {
            if (index - 1 < 0) {
                showPlay(musicArray[musicArray.length - 1], true)
            } else {
                showPlay(musicArray[index - 1], true)
            }
        }
    }

    // next music
    nextMusic.addEventListener('click', nextAudio)
    function nextAudio() {
        let index = musicArray.findIndex(m => m.id == selectedMusic.id)

        if (index !== -1) {
            if (index + 1 >= musicArray.length) {
                showPlay(musicArray[0], true)
            } else {
                showPlay(musicArray[index + 1], true)
            }
        }
    }

    // Song ends
    audio.addEventListener('ended', () => {
        playIcon.classList.remove('bi-pause-fill')
        playIcon.classList.add('bi-play-fill')
        progress.style.width = '0'
        if (isRepeatEnabled) {
            playMusic()
        } else {
            nextAudio()
        }
    })

    // repeat music
    repeatMusic.addEventListener('click', () => {
        isRepeatEnabled = !isRepeatEnabled
        repeatMusic.classList.toggle('text-red-500')
    })

    // change volume
    volumeSlider.addEventListener('input', () => {
        audio.volume = volumeSlider.value / 100

        if (!isMuted) {
            if (audio.volume > 0) {
                volumeIcon.classList.remove('bi-volume-mute-fill')
                volumeIcon.classList.add('bi-volume-up')
            } else {
                volumeIcon.classList.remove('bi-volume-up')
                volumeIcon.classList.add('bi-volume-mute-fill')
            }
        }
    })

    // muted volume
    volumeIcon.addEventListener('click', () => {
        isMuted = !isMuted
        if (isMuted) {
            audio.muted = true
            volumeIcon.classList.remove('bi-volume-up')
            volumeIcon.classList.add('bi-volume-mute-fill')
        } else {
            audio.muted = false
            volumeIcon.classList.remove('bi-volume-mute-fill')
            volumeIcon.classList.add('bi-volume-up')
        }
    })

    // play music when next music is on
    if (shouldPlay) {
        playMusic()
    }
}
// showPlay
