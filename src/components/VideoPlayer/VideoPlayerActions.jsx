import { Heart } from "../Icons/Heart.jsx"
import { Shere} from '../Icons/Shere.jsx'
import { Comment } from '../Icons/Comment.jsx'
import styles from "./index.module.css"
export default function VideoPlayerActions({likes=12, comments=212, sheres=12, hearted=false}){
    return(
        <aside className={styles.actions}>
            
            <div className={styles.action}>
            <Heart/>
            <strong title="like">{likes}</strong>
            </div>
            
            <div className={styles.action}>
            <Comment/>
            <strong title="comments">{comments}</strong>
            </div>
            
            <div className={styles.action}>
            <Shere/>
            <strong title="sheres">{sheres}</strong>
            </div>
        </aside>
    )
}