import { Camera, CameraResultType } from '@capacitor/camera';
import { useState } from 'react';

export function usePhotoGallery() {
  const [imageSrc, setImageSrc] = useState('');

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  };
  return {
    takePhoto,
  };
}