import React, { useState } from 'react';
import "./profileedit.css";
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";

const ProfileEdit = () => {

    const [imagePreview, setImagePreview] = useState(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
      );
    
      const handleImageChange = (e) => {
        const file = e.target.files[0];
    
        if (file) {
          const reader = new FileReader();
    
          reader.onloadend = () => {
            setImagePreview(reader.result);
          };
    
          reader.readAsDataURL(file);
        }
    };

  return (
    <>
        <div className="ProfilePage_edit">
            <div className='boxgoback'>
                <Link to="/profile" className="box_iconBack">
                    <MdArrowBack id='iconBack'/>
                </Link>
            </div>
            <div className='box_name'>
                <div className='box_image_profile'>
                    <label htmlFor="profileImage">
                        <img  src={imagePreview} alt="Profile Preview"/>
                        <p><FaCamera id='icon_camera'/></p>
                    </label>

                    <input 
                        type="file"
                        id="profileImage"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <p>Name: Sompong</p>
            </div>
            <div className='box_user_profile'>
                <p>User</p><FaRegUserCircle id='iconUser'/>
            </div>
            <form className='container_form_profileedit'>
                <input type="email" placeholder="humascot@gmail.com" required />
                <input type="password" placeholder=" Please enter yourcurrent password " required />
                <input type="password" placeholder=" Please enter a new password " required />
                <input type="password" placeholder=" Please confirm your new password " required />

                <button type="submit" >Confirmation</button>
            </form>
          
        </div>
    </>
  )
}

export default ProfileEdit