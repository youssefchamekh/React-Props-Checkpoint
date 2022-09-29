import React from 'react';
export default function Profileimage(props){
    return (
            <div className="w-full lg:w-2/5">
                {/* Big profile image for side bar (desktop) */}
                <img src={props.picture} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
            </div>
    )
}
