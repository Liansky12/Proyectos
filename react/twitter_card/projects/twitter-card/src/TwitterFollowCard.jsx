import { useState } from "react";

export function TwitterFollowCard({ userName, children, initialIsFollowing }) {
   const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
   /* Forma alternativa
   const state = useState(false);
   const isFollowing = state[0]; // Estado actual
   const setIsFollowing = state[1]; // Función para cambiar el estado
   */

   const text = isFollowing ? 'Siguiendo' : 'Seguir';
   const buttonClassName = isFollowing
      ? 'tw-followCard-button is-following'
      : 'tw-followCard-button';
   
   const  handleClick = () => {
      setIsFollowing(!isFollowing);
   }
   return (
      <article className='tw-followCard'>
         <header className='tw-followCard-header'>
            <img
               className='tw-followCard-avatar'
               src={`https://unavatar.io/${userName}`}
               alt="El avatar de Duolingo" />
            <div className='tw-followCard-info'>
               <strong>{children}</strong>
               <span>@{userName}</span>
            </div>
         </header>
         <aside>
            <button className={buttonClassName} onClick={handleClick}>
               <span className="tw-followCard-text">{text}</span>
               <span className="tw-followCard-stopFollow">Dejar de seguir</span>
               </button>
         </aside>
      </article>
   )
}