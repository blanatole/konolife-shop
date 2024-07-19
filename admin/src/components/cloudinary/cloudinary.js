import axios from 'axios';

import {v2 as cloudinary} from 'cloudinary'

export const uploadCloudinary=async(file, formData)=>{
    formData.append("images",file);
    formData.append("upload_preset","diuyexpfn");
    const {data} = await axios.post("https://api.cloudinary.com/v1_1/dvyozjjma/image/upload", formData);

    return {publicId: data?.public_id, url: data?.secure_url, formData}
}
