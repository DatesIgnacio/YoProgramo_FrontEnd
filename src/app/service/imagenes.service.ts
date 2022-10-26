import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/` + name)
    uploadBytes(imgRef, file)
      .then(response => { this.getImagen() })
      .catch(error => console.log(error))
  }

  getImagen(){
    const imagenRef = ref(this.storage, 'imagen')
    list (imagenRef)
    .then(async response =>{
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log ("La URL es:" + this.url);
      }
    })
    .catch(error => console.log(error))
  }


}
