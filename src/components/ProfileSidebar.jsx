// import React, { useState } from 'react';

const ProfileSidebar = () => {

    

    return (
        <div className="container border p-0">
            <div className="my-3 d-flex justify-content-center">
                <img src="./img/hero.png" className="rounded-circle w-50" alt="" />
            </div>
            <div id="list-example" className="list-group">
                <a href="#details" className="list-group-item list-group-item-action">Details </a>
                <a href="#education" className="list-group-item list-group-item-action">Education</a>
                <a href="#document" className="list-group-item list-group-item-action">Document</a>
                <a href="#" className="list-group-item list-group-item-action">Setting</a>
            </div>
        </div>
    );
};

export default ProfileSidebar;