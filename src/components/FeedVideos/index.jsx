import VideoPlayer from "../VideoPlayer/index.jsx"
import style from './style.module.css'
const VIDEOS=[
    {
        id:1,
        author:'liryonni',
        likes:123,
        sheres:12,
        comments:333,
        songTitle:"sonido original- Pablo",
        albumCover:"https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/c42763c8c49e40a588e968535af7191f~c5_100x100.jpeg",
        src: 'https://v16-webapp.tiktok.com/44cd8b7762d8fd083f2bd44406c8a7b0/62e322bf/video/tos/useast2a/tos-useast2a-ve-0068c001/47fdffa32d9e4f51a485c4b9f95d9f08/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2166&bt=1083&btag=80000&cs=0&ds=3&ft=ar5S8q1Hmo0PDZlPAuaQ9gi1~ObpkV1PCX&mime_type=video_mp4&qs=0&rc=aDU5PGQ8ZjQ0Z2VlZDxkNUBpamY6eTY6ZnB4PDMzNzczM0BgL18yNTMzNi8xYTAyMjMuYSNocWMwcjRfYmxgLS1kMTZzcw%3D%3D&l=202207281757490101921650790E33D456',
        description: 'la HAMBURGUESA mas GRANDE de tiktok #fyp #parati #foryou #food #comida'
    },
    {
        id:2,
        author:'finoyelegante' ,
        likes:1233,
        shares:122,
        comments:323,
        songTitle:"sonido original- Pablo",
        albumCover:"https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/c42763c8c49e40a588e968535af7191f~c5_100x100.jpeg",
        src:'https://v16-webapp.tiktok.com/bce4fffaa3007dc9f480a66b2017c6c1/62e3231b/video/tos/useast2a/tos-useast2a-ve-0068c003/989c866ed5414cd0ae3d3fe4b535594d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=6150&bt=3075&btag=80000&cs=0&ds=3&ft=ar5S8q1Hmo0PDZlPAuaQ9gi1~ObpkV1PCX&mime_type=video_mp4&qs=0&rc=aWRnODo0Nmk1NjU6M2k2ZUBpM2RkOTk6ZjYzPDMzNzczM0AyMzYuYTVjX2IxNDUyMDMyYSMuX2tfcjRfLXJgLS1kMTZzcw%3D%3D&l=202207281757490101921650790E33D456',
        description:'Hoy probaré una nano-cinta, se dice que es muy pegajosa y se puede limpiar y usar repetidamente. #nano #pegamento #cintaadhesiva #familia #linkone #ilinkone #tiktokmademebuyit'
    },
    {   
        id:3,
        author:'bigbangbarber' ,
        likes:11233,
        shares:1452,
        comments:23,
        songTitle:"sonido original- Pablo",
        albumCover:"https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/c42763c8c49e40a588e968535af7191f~c5_100x100.jpeg",
        src: 'https://v16-webapp.tiktok.com/d9ea1d13a70b972adca7ff71fc768b3b/62e322c1/video/tos/useast2a/tos-useast2a-pve-0068/12a577788221441bb2b2459d2426b596/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2462&bt=1231&btag=80000&cs=0&ds=3&ft=ar5S8q1Hmo0PDZlPAuaQ9gi1~ObpkV1PCX&mime_type=video_mp4&qs=0&rc=Zzc5NDg4ZGVmNmg8MzloNUBpM3V5cjM6ZmhsZTMzNzczM0BiY15fMi4uNmMxYTU2MzNeYSMwamVlcjRnMl9gLS1kMTZzcw%3D%3D&l=202207281757490101921650790E33D456',
        description:'Yo le dije que se movio 🚪😳 Si no compartis el enlace de este video tenes 50 años de mala suerte 🔥☠️'
    }
]

export default function FeedVideos () {
    return(
        VIDEOS.map(video =>{
            return(
                <div key={video.id} className={style.item}> 
                    <VideoPlayer  {...video} />
                </div>
            )
        })
    )
}